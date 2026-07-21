import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Inquiry = {
  name?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  meetingDate?: string;
  meetingTime?: string;
  message?: string;
  imagePublicIds?: string[];
};

const clean = (value: unknown, maxLength = 2000) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) {
    return NextResponse.json({ error: "Inquiry delivery is not configured." }, { status: 503 });
  }

  let body: Inquiry;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid inquiry data." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 254);
  const enquiryType = clean(body.enquiryType, 80);
  if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "A valid name and email address are required." }, { status: 400 });
  }

  const imagePublicIds = Array.isArray(body.imagePublicIds)
    ? body.imagePublicIds.filter((id): id is string => typeof id === "string" && id.startsWith("smilyx-inquiries/")).slice(0, 6)
    : [];

  const formspreeResponse = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `New Smilyx inquiry: ${enquiryType || "General inquiry"}`,
      name,
      email,
      phone: clean(body.phone, 60),
      enquiry_type: enquiryType,
      preferred_meeting_date: clean(body.meetingDate, 20),
      preferred_meeting_time: clean(body.meetingTime, 40),
      clinical_instructions: clean(body.message),
      cloudinary_private_image_ids: imagePublicIds.length ? imagePublicIds.join("\n") : "No images attached",
    }),
  });

  if (!formspreeResponse.ok) {
    return NextResponse.json({ error: "We could not send your inquiry. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

import { createHash } from "crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const UPLOAD_FOLDER = "smilyx-inquiries";
const UPLOAD_TYPE = "private";

export async function POST() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json({ error: "Image uploads are not configured." }, { status: 503 });
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const paramsToSign = `folder=${UPLOAD_FOLDER}&timestamp=${timestamp}&type=${UPLOAD_TYPE}`;
  const signature = createHash("sha1").update(`${paramsToSign}${apiSecret}`).digest("hex");

  return NextResponse.json({
    apiKey,
    cloudName,
    folder: UPLOAD_FOLDER,
    timestamp,
    signature,
    type: UPLOAD_TYPE,
  });
}

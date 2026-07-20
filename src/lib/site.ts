import type { Metadata } from "next";

export const siteName = "Smilyx Clear Aligners";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const siteDescription = "Clear aligner treatment with digital planning, clinical supervision, and thoughtful aftercare.";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteName,
    url: siteUrl,
    telephone: "+65 6789 0123",
    email: "partner@smilyx-aligners.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Dental Science Pkwy, Suite 400",
      addressLocality: "Singapore",
      postalCode: "048582",
      addressCountry: "SG",
    },
  };
}

import FAQs from "@/src/views/FAQs";
import { pageMetadata, siteUrl } from "@/src/lib/site";
import { FAQs as questions } from "@/src/data";
export const metadata = pageMetadata("Frequently Asked Questions", "Answers to common questions about clear aligners, treatment, care, and pricing.", "/faqs");
export default function Page() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <><FAQs /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}

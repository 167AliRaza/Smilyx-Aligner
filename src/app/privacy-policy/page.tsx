import PrivacyPolicy from "@/src/views/PrivacyPolicy";
import { pageMetadata } from "@/src/lib/site";
export const metadata = pageMetadata("Privacy Policy", "Read the Vélourcare Ortho privacy policy.", "/privacy-policy");
export default function Page() { return <PrivacyPolicy />; }

import AboutUs from "@/src/views/AboutUs";
import { pageMetadata } from "@/src/lib/site";
export const metadata = pageMetadata("About Us", "Meet the clinical team and treatment philosophy behind Smilyx Clear Aligners.", "/about-us");
export default function Page() { return <AboutUs />; }

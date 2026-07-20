import Blogs from "@/src/views/Blogs";
import { pageMetadata } from "@/src/lib/site";
export const metadata = pageMetadata("Clinical Insights and Care Guides", "Practical notes on clear aligners, dental hygiene, treatment planning, and retention.", "/blogs");
export default function Page() { return <Blogs />; }

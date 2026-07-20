import Link from "next/link";
export default function NotFound() {
  return <section className="max-w-3xl mx-auto px-6 py-32 text-center"><p className="text-brand-600 font-bold text-sm">404</p><h1 className="font-display text-4xl font-black mt-3">Page not found</h1><p className="text-slate-600 mt-4">The page you requested does not exist.</p><Link href="/" className="inline-flex mt-8 px-5 py-3 rounded-full bg-brand-600 text-white font-bold text-sm">Return home</Link></section>;
}

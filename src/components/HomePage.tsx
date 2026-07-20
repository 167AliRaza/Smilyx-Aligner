"use client";

import { useRouter } from "next/navigation";
import Home from "@/src/views/Home";

export default function HomePage() {
  const router = useRouter();
  return <Home onNavigate={(page) => router.push(page === "home" ? "/" : `/${page}`)} onSetContactDefault={() => undefined} />;
}

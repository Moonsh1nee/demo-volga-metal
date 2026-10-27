"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/kp")) return null;
  return (
    <div className="mcta">
      <Link className="btn" href="/kp/">
        Запросить КП
      </Link>
    </div>
  );
}

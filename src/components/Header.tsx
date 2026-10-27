"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="hd">
      <div className="w">
        <Link className="logo" href="/" onClick={() => setOpen(false)}>
          <i aria-hidden />
          <span>
            {SITE.name}
            <small>{SITE.tagline.toUpperCase()}</small>
          </span>
        </Link>
        <nav className="nav" aria-label="Основное меню">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={!n.href.startsWith("/#") && pathname.startsWith(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hd-tools">
          <ThemeToggle />
          <Link className="btn" href="/kp/">
            Запросить КП
          </Link>
          <button type="button" className="icon-btn burger" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Закрыть меню" : "Открыть меню"} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className={`menu${open ? " open" : ""}`} aria-label="Мобильное меню">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

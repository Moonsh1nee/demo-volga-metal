"use client";

import { SunMoon } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    root.dataset.theme = next;
    try {
      window.localStorage.setItem("vms-theme", next);
    } catch {}
  };

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label="Сменить тему оформления" title="Сменить тему">
      <SunMoon size={20} aria-hidden />
    </button>
  );
}

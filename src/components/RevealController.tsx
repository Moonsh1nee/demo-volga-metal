"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Элементы с классом .r всегда видны. После первой прокрутки скрываются
 * только те, что ещё не попали на экран, и проявляются при появлении.
 */
export function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;

    const arm = () => {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.remove("hide");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      document.querySelectorAll<HTMLElement>(".r").forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.classList.add("hide");
          io?.observe(el);
        }
      });
    };

    window.addEventListener("scroll", arm, { once: true, passive: true });
    return () => {
      window.removeEventListener("scroll", arm);
      io?.disconnect();
      document.querySelectorAll(".r.hide").forEach((el) => el.classList.remove("hide"));
    };
  }, [pathname]);

  return null;
}

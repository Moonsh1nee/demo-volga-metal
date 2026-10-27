import Link from "next/link";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="ft">
      <div className="w">
        <div>
          <b>{SITE.name}</b>
          <br />
          <span className="mono">
            {SITE.demoLine}. Сделано в <a href={SITE.studioUrl}>Akimov Web</a>
          </span>
          <div className="links">
            <Link href="/o-kompanii/">О проекте</Link>
            <Link href="/privacy/">Политика (демо)</Link>
          </div>
        </div>
        <div className="mono">
          {SITE.address} · {SITE.hours}
          <br />
          {SITE.email} · {SITE.phone}
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function PageHero({ crumbs, title, lead, children }: { crumbs: { href?: string; label: string }[]; title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="w">
        <nav className="crumbs" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span aria-hidden>/</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

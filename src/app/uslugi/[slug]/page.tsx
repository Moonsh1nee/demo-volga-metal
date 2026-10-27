import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { SERVICES } from "@/data/site";
import { OPS, calculate } from "@/lib/calc";
import { rub } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return s ? { title: s.name, description: s.lead } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();
  const ex = s.example;
  const price = ex.op ? calculate({ op: ex.op, material: ex.material ?? 1, thickness: ex.thickness ?? 4, qty: ex.qty ?? 1, rush: false }) : null;
  const kpHref = s.calcOp ? `/kp/?op=${s.calcOp}` : "/kp/";

  return (
    <>
      <PageHero crumbs={[{ href: "/#uslugi", label: "Услуги" }, { label: s.name }]} title={s.name} lead={s.lead}>
        <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
          <Link className="btn" href={kpHref}>{s.calcOp ? "Рассчитать эту операцию" : "Запросить КП"}</Link>
        </div>
      </PageHero>

      <section className="sec">
        <div className="w two">
          <div className="card">
            <h3>Параметры</h3>
            <dl className="kv">
              <div><dt>Материалы</dt><dd>{s.materials}</dd></div>
              <div><dt>Толщина</dt><dd>{s.thickness}</dd></div>
              <div><dt>Точность</dt><dd>{s.tolerance}</dd></div>
              <div><dt>Срок от</dt><dd>{s.term}</dd></div>
              {s.calcOp && <div><dt>Расценка от</dt><dd>{OPS[s.calcOp].base} ₽ / {OPS[s.calcOp].unit}</dd></div>}
            </dl>
          </div>
          <div className="card">
            <h3>Что входит</h3>
            <ul>{s.details.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="sec tint" style={{ paddingBlock: 64 }}>
        <div className="w two">
          <div className="card">
            <h3>Для расчёта пришлите</h3>
            <ul>{s.need.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
          <div className="card hl">
            <div className="kick">Пример заказа</div>
            <h3>{ex.title}</h3>
            <p className="mono" style={{ fontSize: 14 }}>{ex.params}</p>
            {price ? (
              <p style={{ marginTop: 16, font: "600 34px var(--font-oswald)" }}>от {rub(price.gross)} <small className="mono" style={{ fontSize: 12, font: "500 12px var(--font-plex-mono)", color: "var(--mute)" }}>с НДС 20%</small></p>
            ) : (
              <p className="note">Цена конструкций считается по спецификации металла и объёму операций.</p>
            )}
            <p className="note">Демо: пример и цена вымышлены.</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <div className="sec-h"><div className="kick">Вопросы</div><h2 className="h2">Частые вопросы</h2></div>
          <Faq items={s.faq} />
          <p className="more"><Link className="btn ln" href="/#uslugi">Все услуги</Link></p>
        </div>
      </section>
    </>
  );
}

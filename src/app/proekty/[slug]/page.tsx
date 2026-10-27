import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProjectArt } from "@/components/ProjectArt";
import { PROJECTS } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.task } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <PageHero crumbs={[{ href: "/proekty/", label: "Проекты" }, { label: p.title }]} title={p.title} lead={p.task} />
      <section className="sec">
        <div className="w two">
          <div className="big-art"><ProjectArt art={p.art} /></div>
          <div className="card">
            <h3>Характеристики партии</h3>
            <dl className="kv">
              {p.specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
              <div><dt>Заказчик</dt><dd>{p.customer} (условно)</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="sec tint" style={{ paddingBlock: 64 }}>
        <div className="w two">
          <div className="card"><h3>Что сделали</h3><ul>{p.work.map((w) => <li key={w}>{w}</li>)}</ul></div>
          <div className="card hl"><h3>Результат</h3><p>{p.result}</p><p className="note">Демо-кейс: заказчик, цифры и сроки вымышлены.</p></div>
        </div>
      </section>
      <section className="sec" style={{ paddingBlock: 56 }}>
        <div className="w" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn" href="/kp/">Запросить КП на похожее</Link>
          <Link className="btn ln" href="/proekty/">Все проекты</Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <PageHero crumbs={[{ label: "404" }]} title="Страница не найдена" lead="Такой страницы нет. Вернитесь на главную или запросите КП.">
      <div className="acts" style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
        <Link className="btn" href="/">На главную</Link>
        <Link className="btn ln" href="/kp/">Запросить КП</Link>
      </div>
    </PageHero>
  );
}

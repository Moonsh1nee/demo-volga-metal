import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SpecTable } from "@/components/SpecTable";
import { EQUIPMENT, SERVICES } from "@/data/site";

export const metadata: Metadata = { title: "Оборудование", description: "Парк станков: волоконные лазеры 6 кВт, листогиб 160 т, сварочные посты, камера окраски." };

export default function Equipment() {
  return (
    <>
      <PageHero crumbs={[{ label: "Оборудование" }]} title="Оборудование цеха" lead="Станки вымышлены, но параметры правдоподобны: так на рабочем сайте выглядит парк предприятия." />
      <section className="sec">
        <div className="w">
          <SpecTable label="Оборудование цеха" head={["Оборудование", "Параметры", "Количество", "Операция"]}>
            {EQUIPMENT.map((e) => {
              const s = SERVICES.find((x) => x.slug === e.service);
              return (
                <tr key={e.name}>
                  <td>{e.name}</td>
                  <td className="m">{e.params}</td>
                  <td className="m">{e.qty}</td>
                  <td className="m">{s && <Link href={`/uslugi/${s.slug}/`}>{s.name}</Link>}</td>
                </tr>
              );
            })}
          </SpecTable>
          <div className="cards3" style={{ marginTop: 40 }}>
            <div className="card"><h3>2 смены</h3><p className="note" style={{ marginTop: 0 }}>Лазеры работают в две смены, срочные заказы встают в свободные окна.</p></div>
            <div className="card"><h3>Раскрой в цехе</h3><p className="note" style={{ marginTop: 0 }}>Технолог раскладывает детали по листу и считает коэффициент использования металла.</p></div>
            <div className="card"><h3>ОТК на выходе</h3><p className="note" style={{ marginTop: 0 }}>Замеры по чертежу и протокол к каждой партии.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

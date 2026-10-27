import type { Metadata } from "next";
import { KpFromQuery } from "@/components/KpFromQuery";
import { PageHero } from "@/components/PageHero";
import { ProcessTimeline } from "@/components/ProcessTimeline";

export const metadata: Metadata = { title: "Расчёт и запрос КП", description: "Калькулятор стоимости с НДС и форма запроса коммерческого предложения. Демо." };

export default function Kp() {
  return (
    <>
      <PageHero crumbs={[{ label: "Расчёт КП" }]} title="Расчёт и запрос КП" lead="Калькулятор даёт цену «от». Точное коммерческое предложение менеджер пришлёт после проверки чертежа." />
      <section className="sec kp" style={{ paddingBlock: 56 }}>
        <div className="w"><KpFromQuery /></div>
      </section>
      <section className="sec tint">
        <div className="w">
          <div className="sec-h"><div className="kick">Что дальше</div><h2 className="h2">От запроса до отгрузки</h2></div>
          <ProcessTimeline withQuality={false} />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/data/site";

export const metadata: Metadata = { title: "Контакты", description: "Вымышленные контакты демо-предприятия." };

export default function Contacts() {
  return (
    <>
      <PageHero crumbs={[{ label: "Контакты" }]} title="Контакты" lead="Контакты вымышлены: настоящих адресов, телефонов и реквизитов на демо-сайте нет." />
      <section className="sec">
        <div className="w two">
          <div className="card">
            <h3>Как связаться</h3>
            <dl className="kv">
              <div><dt>Телефон</dt><dd>{SITE.phone}</dd></div>
              <div><dt>E-mail</dt><dd>{SITE.email}</dd></div>
              <div><dt>Адрес</dt><dd>{SITE.address}</dd></div>
              <div><dt>Часы работы</dt><dd>{SITE.hours}</dd></div>
            </dl>
          </div>
          <div className="card hl">
            <h3>Быстрее всего через КП</h3>
            <p>Пришлите чертёж через форму запроса, менеджер вернётся с ценой и сроком.</p>
            <p style={{ marginTop: 16 }}><Link className="btn" href="/kp/">Запросить КП</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}

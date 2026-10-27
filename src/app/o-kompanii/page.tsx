import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { QUALITY, SITE } from "@/data/site";

export const metadata: Metadata = { title: "О компании и о проекте", description: "О вымышленном предприятии и о демонстрационном проекте студии Akimov Web." };

export default function About() {
  return (
    <>
      <PageHero crumbs={[{ label: "О компании" }]} title="О компании" lead="Волга-Металл-Сервис выпускает детали и металлоконструкции по чертежам заказчиков: резка, гибка, сварка, окраска." />
      <section className="sec">
        <div className="w two">
          <div className="prose">
            <p>Так выглядит текст «о компании» на рабочем сайте: коротко о производстве, о том, кому и как мы помогаем, и почему нам можно доверить заказ. Тут же размещают реквизиты, лицензии и документы.</p>
            <p>Все данные на этой странице вымышлены. Организации, адреса, телефоны и цены не существуют.</p>
            <h2>Как мы работаем</h2>
            <ul>{QUALITY.map((q) => <li key={q.name}><b>{q.name}.</b> {q.text}</li>)}</ul>
          </div>
          <div className="card hl">
            <div className="kick">О проекте</div>
            <h3>Демо-проект студии Akimov Web</h3>
            <p>{SITE.demoLine}. Это пример сайта для B2B: калькулятор стоимости с НДС и запрос коммерческого предложения с чертежом.</p>
            <ul style={{ marginTop: 14 }}>
              <li>Бэкенда нет: расчёт считается в браузере.</li>
              <li>Запрос КП сохраняется только в вашем браузере (localStorage), файл никуда не загружается.</li>
              <li>Сайт закрыт от индексации поисковиками.</li>
            </ul>
            <p className="note"><a href={SITE.studioUrl}>Akimov Web</a> · <Link href="/privacy/">Политика (демо)</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}

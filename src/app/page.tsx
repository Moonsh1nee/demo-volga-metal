import Link from "next/link";
import { BlueprintHero } from "@/components/BlueprintHero";
import { ShopLoad } from "@/components/ShopLoad";
import { SpecsStrip } from "@/components/SpecsStrip";
import { SpecTable } from "@/components/SpecTable";
import { ProjectCard } from "@/components/ProjectCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ClientsGrid } from "@/components/ClientsGrid";
import { Faq } from "@/components/Faq";
import { KpSection } from "@/components/KpSection";
import { EQUIPMENT, FAQ, PROJECTS, SERVICES } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="w">
          <div>
            <div className="tag">Лазерная резка · гибка · сварка · окраска</div>
            <h1>Металл по чертежу <em>в срок</em> и с допуском</h1>
            <p className="lead">Изготавливаем детали и металлоконструкции для производств, строителей и торговых сетей. Работаем по договору с НДС, отгружаем партиями, закрываем документы через ЭДО.</p>
            <div className="acts">
              <Link className="btn" href="/#kp">Рассчитать и запросить КП</Link>
              <Link className="btn ln" href="/#uslugi">Что мы делаем</Link>
            </div>
            <ShopLoad />
          </div>
          <BlueprintHero />
        </div>
      </section>
      <SpecsStrip />

      <section className="sec" id="uslugi">
        <div className="w">
          <div className="sec-h">
            <div className="kick">Услуги</div>
            <h2 className="h2">Что мы производим</h2>
            <p>Принимаем чертежи в DXF, DWG, STEP и PDF. Если чертежа нет, поможем с эскизом.</p>
          </div>
          <SpecTable label="Услуги и параметры" head={["Операция", "Материалы", "Толщина", "Точность", "Срок от"]}>
            {SERVICES.map((s) => (
              <tr key={s.slug}>
                <td><Link href={`/uslugi/${s.slug}/`}>{s.name.replace(" на ЧПУ", "")}</Link></td>
                <td>{s.materials}</td>
                <td className="m">{s.thickness}</td>
                <td className="m">{s.tolerance}</td>
                <td className="m">{s.term}</td>
              </tr>
            ))}
          </SpecTable>
        </div>
      </section>

      <section className="sec tint" id="park">
        <div className="w">
          <div className="sec-h">
            <div className="kick">Производство</div>
            <h2 className="h2">Оборудование цеха</h2>
          </div>
          <SpecTable label="Оборудование цеха" head={["Оборудование", "Параметры", "Количество"]}>
            {EQUIPMENT.map((e) => (
              <tr key={e.name}>
                <td>{e.name}</td>
                <td className="m">{e.params}</td>
                <td className="m">{e.qty}</td>
              </tr>
            ))}
          </SpecTable>
          <p className="more"><Link className="btn ln" href="/oborudovanie/">Подробнее об оборудовании</Link></p>
        </div>
      </section>

      <section className="sec kp" id="kp">
        <div className="w">
          <div className="sec-h">
            <div className="kick">Расчёт и заявка</div>
            <h2 className="h2">Ориентировочная цена за минуту</h2>
            <p>Калькулятор даёт цену «от». Точное коммерческое предложение менеджер пришлёт после проверки чертежа.</p>
          </div>
          <KpSection />
        </div>
      </section>

      <section className="sec" id="proekty">
        <div className="w">
          <div className="sec-h">
            <div className="kick">Проекты</div>
            <h2 className="h2">Что мы уже делали</h2>
            <p>Примеры для демонстрации. На рабочем сайте здесь будут реальные работы с фотографиями.</p>
          </div>
          <div className="proj">
            {PROJECTS.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
          <p className="more"><Link className="btn ln" href="/proekty/">Все проекты</Link></p>
        </div>
      </section>

      <section className="sec tint" id="rabota">
        <div className="w">
          <div className="sec-h">
            <div className="kick">Как работаем</div>
            <h2 className="h2">От чертежа до отгрузки</h2>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <div className="sec-h">
            <div className="kick">Клиенты</div>
            <h2 className="h2">Нам доверяют</h2>
          </div>
          <ClientsGrid />
        </div>
      </section>

      <section className="sec" id="faq" style={{ paddingTop: 0 }}>
        <div className="w">
          <div className="sec-h">
            <div className="kick">Вопросы</div>
            <h2 className="h2">Что спрашивают заказчики</h2>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>
    </>
  );
}

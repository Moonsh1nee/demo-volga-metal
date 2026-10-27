import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/data/site";

export const metadata: Metadata = { title: "Проекты", description: "Примеры работ: стеллажи, фланцы, навесы, ограждения. Демо-кейсы." };

export default function Projects() {
  return (
    <>
      <PageHero crumbs={[{ label: "Проекты" }]} title="Что мы уже делали" lead="Примеры для демонстрации. На рабочем сайте здесь будут реальные работы с фотографиями." />
      <section className="sec">
        <div className="w proj">
          {PROJECTS.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>
    </>
  );
}

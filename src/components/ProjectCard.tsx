import Link from "next/link";
import type { Project } from "@/data/site";
import { ProjectArt } from "./ProjectArt";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/proekty/${p.slug}/`} className="pj r">
      <div className="ph">
        <ProjectArt art={p.art} />
      </div>
      <div className="bd">
        <h3>{p.title}</h3>
        <dl>
          <div><dt>Партия</dt><dd>{p.batch}</dd></div>
          <div><dt>Материал</dt><dd>{p.material}</dd></div>
          <div><dt>Срок</dt><dd>{p.term}</dd></div>
        </dl>
      </div>
    </Link>
  );
}

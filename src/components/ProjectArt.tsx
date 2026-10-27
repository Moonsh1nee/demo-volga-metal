import type { ProjectArt as Art } from "@/data/site";

const ARTS: Record<Art, React.ReactNode> = {
  rack: (
    <>
      <path d="M40 160V60h60v100M100 110h120v50M220 60h60v100" />
      <path d="M40 60l30-30 30 30M220 60l30-30 30 30" />
    </>
  ),
  flange: (
    <>
      <circle cx="160" cy="100" r="60" />
      <circle cx="160" cy="100" r="22" />
      <path d="M160 30v-12M160 182v-12M90 100H78M242 100h-12" />
    </>
  ),
  canopy: (
    <>
      <path d="M30 150h260M30 150V80l60-40h140l60 40v70" />
      <path d="M90 150V80M160 150V40M230 150V80" />
    </>
  ),
  fence: (
    <>
      <path d="M20 160h280M20 60h280M20 110h280" />
      <path d="M50 160V40M110 160V40M170 160V40M230 160V40M290 160V40" />
    </>
  ),
  panel: (
    <>
      <rect x="50" y="40" width="220" height="120" rx="4" />
      <circle cx="90" cy="80" r="8" /><circle cx="130" cy="80" r="8" /><circle cx="170" cy="80" r="8" /><circle cx="210" cy="80" r="8" />
      <circle cx="90" cy="120" r="8" /><circle cx="130" cy="120" r="8" /><circle cx="170" cy="120" r="8" /><circle cx="210" cy="120" r="8" />
      <path d="M250 40v120" />
    </>
  ),
  frame: (
    <>
      <path d="M50 150V70h220v80M50 70l30-30h160l30 30" />
      <path d="M50 110h220M160 70v80M40 150h60M220 150h60" />
    </>
  ),
};

export function ProjectArt({ art }: { art: Art }) {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="Схематичное изображение изделия">
      <rect width="320" height="200" fill="#1b1e22" />
      <g stroke="#ff5a00" strokeWidth="2" fill="none">{ARTS[art]}</g>
    </svg>
  );
}

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { OPS, type CalcOp } from "@/lib/calc";
import { KpSection } from "./KpSection";

function Inner() {
  const op = useSearchParams().get("op") as CalcOp | null;
  const initialOp = op && op in OPS ? op : "laser";
  return <KpSection key={initialOp} initialOp={initialOp} />;
}

export function KpFromQuery() {
  return (
    <Suspense fallback={<KpSection />}>
      <Inner />
    </Suspense>
  );
}

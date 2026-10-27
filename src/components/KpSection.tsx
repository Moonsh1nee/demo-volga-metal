"use client";

import { useState } from "react";
import { MATERIALS, OPS, calculate, type CalcOp } from "@/lib/calc";
import { decimal } from "@/lib/format";
import { PriceCalculator, type CalcState } from "./PriceCalculator";
import { QuoteForm } from "./QuoteForm";

export function KpSection({ initialOp = "laser" }: { initialOp?: CalcOp }) {
  const [state, setState] = useState<CalcState>({ op: initialOp, material: 1, thickness: 4, qty: "120", rush: false });
  const o = OPS[state.op];
  const q = Math.min(5000, Number(state.qty) || 1);
  const r = calculate({ ...state, qty: q });
  const mat = MATERIALS.find((m) => m.value === state.material)?.label ?? "";
  const line = `${o.name}, ${q} ${o.unit}${state.op === "powder" ? "" : `, ${mat}, ${decimal(state.thickness)} мм`}${state.rush ? ", срочно" : ""}`;

  return (
    <div className="kg">
      <PriceCalculator state={state} onChange={setState} />
      <QuoteForm summary={{ line, gross: r.gross }} />
    </div>
  );
}

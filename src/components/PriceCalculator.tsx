"use client";

import { useSyncExternalStore } from "react";
import { MATERIALS, OPS, THICKNESS, calculate, formatShip, type CalcInput, type CalcOp } from "@/lib/calc";
import { decimal, rub } from "@/lib/format";

export type CalcState = Omit<CalcInput, "qty"> & { qty: string };

const noop = () => () => {};
const today = () => new Date().setHours(0, 0, 0, 0);

export function PriceCalculator({ state, onChange }: { state: CalcState; onChange: (s: CalcState) => void }) {
  const todayMs = useSyncExternalStore(noop, today, () => null);
  const o = OPS[state.op];
  const r = calculate({ ...state, qty: Math.min(5000, Number(state.qty) || 1) });
  const set = (patch: Partial<CalcState>) => onChange({ ...state, ...patch });
  const thicknesses = THICKNESS.filter((t) => t <= o.maxTh);
  const powder = state.op === "powder";

  const setOp = (op: CalcOp) => {
    const max = OPS[op].maxTh;
    set({ op, thickness: state.thickness > max ? 4 : state.thickness });
  };

  return (
    <div className="cal">
      <h3>Параметры заказа</h3>
      <div className="f">
        <label htmlFor="op">Операция</label>
        <select id="op" value={state.op} onChange={(e) => setOp(e.target.value as CalcOp)}>
          {(Object.keys(OPS) as CalcOp[]).map((k) => (
            <option key={k} value={k}>{OPS[k].name}</option>
          ))}
        </select>
      </div>
      {!powder && (
        <div className="g2">
          <div className="f">
            <label htmlFor="mat">Материал</label>
            <select id="mat" value={state.material} onChange={(e) => set({ material: Number(e.target.value) })}>
              {MATERIALS.map((m) => (
                <option key={m.label} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
          <div className="f">
            <label htmlFor="th">Толщина, мм</label>
            <select id="th" value={state.thickness} onChange={(e) => set({ thickness: Number(e.target.value) })}>
              {thicknesses.map((t) => (
                <option key={t} value={t}>{decimal(t)}</option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div className="g2">
        <div className="f">
          <label htmlFor="qty">{o.label}</label>
          <input id="qty" type="number" inputMode="numeric" min={1} max={5000} value={state.qty} onChange={(e) => set({ qty: e.target.value })} />
        </div>
        <div className="f">
          <span className="lab" id="rush-l">Срок</span>
          <div className="rs" role="group" aria-labelledby="rush-l">
            <button type="button" aria-pressed={!state.rush} onClick={() => set({ rush: false })}>Стандарт</button>
            <button type="button" aria-pressed={state.rush} onClick={() => set({ rush: true })}>Срочно +25%</button>
          </div>
        </div>
      </div>
      <div className="res" aria-live="polite">
        <div><span>Цена за {o.unit}</span><span>{r.unit.toFixed(1).replace(".", ",")} ₽</span></div>
        <div><span>Скидка за объём</span><span>{r.discount ? `−${r.discount * 100}%` : "нет"}</span></div>
        <div><span>Сумма без НДС</span><span>{rub(r.net)}</span></div>
        <div><span>НДС 20%</span><span>{rub(r.vat)}</span></div>
        <div className="ship"><span>Ближайшая отгрузка</span><span>{todayMs === null ? "…" : formatShip(new Date(todayMs), r.workDays)}</span></div>
        <div className="tt"><span>Итого от</span><span>{rub(r.gross)}</span></div>
      </div>
      <div className="note">Минимальный заказ 3 000 ₽. Скидка за объём: от 500 ед. минус 5%, от 2 000 ед. минус 10%. Демо-расчёт, цены вымышлены.</div>
    </div>
  );
}

export type CalcOp = "laser" | "bend" | "weld" | "powder";

export const THICKNESS = [0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20];

export const MATERIALS = [
  { value: 1, label: "Сталь Ст3" },
  { value: 1.1, label: "Сталь 09Г2С" },
  { value: 1.9, label: "Нержавейка AISI 304" },
  { value: 1.5, label: "Алюминий АМг" },
];

export const OPS: Record<CalcOp, { name: string; label: string; unit: string; base: number; k: number; maxTh: number }> = {
  laser: { name: "Лазерная резка", label: "Длина реза, пог. м", unit: "пог. м", base: 30, k: 0.22, maxTh: 20 },
  bend: { name: "Гибка", label: "Количество гибов, шт.", unit: "гиб", base: 12, k: 0.1, maxTh: 8 },
  weld: { name: "Сварка", label: "Длина шва, пог. м", unit: "пог. м", base: 180, k: 0.08, maxTh: 20 },
  powder: { name: "Порошковая окраска", label: "Площадь, м²", unit: "м²", base: 320, k: 0, maxTh: 20 },
};

export const MIN_ORDER = 3000;
export const VAT = 0.2;
export const RUSH = 1.25;

export type CalcInput = { op: CalcOp; material: number; thickness: number; qty: number; rush: boolean };

export function calculate({ op, material, thickness, qty, rush }: CalcInput) {
  const o = OPS[op];
  const q = Math.max(1, Math.floor(qty) || 1);
  const unit = o.base * (op === "powder" ? 1 : material) * (1 + o.k * Math.max(0, thickness - 1));
  const discount = q >= 2000 ? 0.1 : q >= 500 ? 0.05 : 0;
  const net = Math.max(MIN_ORDER, unit * q * (1 - discount) * (rush ? RUSH : 1));
  const vat = net * VAT;
  const workDays = rush ? 2 : 5 + (q > 1000 ? 3 : 0);
  return { qty: q, unit, discount, net, vat, gross: net + vat, workDays };
}

export function addWorkDays(from: Date, days: number) {
  const d = new Date(from);
  let n = days;
  while (n > 0) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) n--;
  }
  return d;
}

export function formatShip(from: Date, days: number) {
  const d = addWorkDays(from, days);
  return `${d.getDate()}.${String(d.getMonth() + 1).padStart(2, "0")} (раб. дней: ${days})`;
}

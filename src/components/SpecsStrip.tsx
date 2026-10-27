import { CountUp } from "./CountUp";

export function SpecsStrip() {
  return (
    <div className="specs">
      <div className="w">
        <div className="it">
          <b>от 1 дня</b>
          <span>срок на резку</span>
        </div>
        <div className="it">
          <b>±0,1 мм</b>
          <span>точность реза</span>
        </div>
        <div className="it">
          <CountUp to={20} pre="до " suf=" мм" />
          <span>толщина стали</span>
        </div>
        <div className="it">
          <CountUp to={20} pre="НДС " suf="%" />
          <span>договор и ЭДО</span>
        </div>
      </div>
    </div>
  );
}

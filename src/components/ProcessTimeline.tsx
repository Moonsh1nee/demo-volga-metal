import { QUALITY, STEPS } from "@/data/site";

export function ProcessTimeline({ withQuality = true }: { withQuality?: boolean }) {
  return (
    <>
      <ol className="tl">
        {STEPS.map((s) => (
          <li key={s.name} className="r">
            <small>{s.when}</small>
            <b>{s.name}</b>
            <span>{s.text}</span>
          </li>
        ))}
      </ol>
      {withQuality && (
        <div className="cert">
          {QUALITY.map((c) => (
            <div key={c.name}>
              <b>{c.name}</b>
              <span>{c.text}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function SpecTable({ label, head, children }: { label: string; head: string[]; children: React.ReactNode }) {
  return (
    <div className="tw" role="region" aria-label={label} tabIndex={0}>
      <table>
        <caption className="sr-only">{label}</caption>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

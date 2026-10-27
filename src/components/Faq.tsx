export function Faq({ items, open = true }: { items: { q: string; a: string }[]; open?: boolean }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={f.q} open={open && i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

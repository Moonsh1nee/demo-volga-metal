export function BlueprintHero() {
  const i = (n: number) => ({ "--i": n }) as React.CSSProperties;
  return (
    <svg className="draw" viewBox="0 0 500 400" fill="none" role="img" aria-label="Чертёж стальной пластины с размерами">
      <g className="ln" stroke="#eceff1" strokeWidth="1.5">
        <rect x="90" y="90" width="320" height="200" rx="6" pathLength={1} style={i(0)} />
        <circle cx="130" cy="130" r="14" pathLength={1} style={i(1)} />
        <circle cx="370" cy="130" r="14" pathLength={1} style={i(2)} />
        <circle cx="130" cy="250" r="14" pathLength={1} style={i(3)} />
        <circle cx="370" cy="250" r="14" pathLength={1} style={i(4)} />
        <rect x="190" y="170" width="120" height="40" rx="20" pathLength={1} style={i(5)} />
      </g>
      <path className="fin" d="M250 70V320M70 190H430" stroke="#eceff1" strokeWidth="1.5" strokeDasharray="10 4 2 4" opacity=".35" />
      <g className="ln" stroke="#ff5a00" strokeWidth="1.5">
        <path d="M90 330h320M90 322v16M410 322v16" pathLength={1} style={i(6)} />
        <path d="M450 90v200M442 90h16M442 290h16" pathLength={1} style={i(7)} />
      </g>
      <path className="fin" d="M90 330l10-4v8zM410 330l-10-4v8z" fill="#ff5a00" />
      <g className="fin" fill="#ff5a00" fontFamily="IBM Plex Mono, monospace" fontSize="14">
        <text x="226" y="352">320</text>
        <text x="462" y="196">200</text>
        <text x="136" y="104" fill="#eceff1" opacity=".8">Ø 14</text>
        <text x="206" y="196" fill="#eceff1" opacity=".8">120×40</text>
      </g>
      <g className="fin" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#eceff1">
        <text x="90" y="52">ПЛАСТИНА ОП-14 · СТ3 · t = 4 мм</text>
        <text x="90" y="72">ДОПУСК ±0,1 мм · ЛАЗЕР</text>
      </g>
      <circle className="beam" r="5" fill="#ff5a00" />
      <circle className="beam" r="12" fill="#ff5a00" opacity=".25" />
    </svg>
  );
}

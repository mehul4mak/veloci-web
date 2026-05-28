// Veloci wordmark: a gradient rounded-square with a clean chevron "V"
// (the velocity vector). LogoDefs renders the shared SVG symbol once;
// Logo references it via <use> so the mark can repeat cheaply.

export function LogoDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a84ff" />
          <stop offset="1" stopColor="#5e5ce6" />
        </linearGradient>
        <symbol id="logo-mark" viewBox="0 0 28 28">
          <rect x="0" y="0" width="28" height="28" rx="7" fill="url(#logoGrad)" />
          <path
            d="M 7 9 L 14 20 L 21 9"
            stroke="white"
            strokeWidth="2.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
      </defs>
    </svg>
  );
}

export function Logo({ label = "Veloci home" }: { label?: string }) {
  return (
    <a href="#top" className="logo" aria-label={label}>
      <svg className="logo-mark">
        <use href="#logo-mark" />
      </svg>
      <span className="logo-word">Veloci</span>
    </a>
  );
}

// Official Velcy lockup (brand asset kit). Horizontal mark + wordmark.
// On dark surfaces use variant="white".
export function Logo({
  variant = "ink",
  height = 26,
}: {
  variant?: "ink" | "white";
  height?: number;
}) {
  const src =
    variant === "white"
      ? "/velcy-logo-horizontal-white.svg"
      : "/velcy-logo-horizontal.svg";
  return (
    <a href="#top" className="logo" aria-label="Velcy home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Velcy" height={height} style={{ display: "block", height }} />
    </a>
  );
}

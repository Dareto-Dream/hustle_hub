const ITEMS = [
  "FREELANCE",
  "JOBS",
  "HIRING",
  "EMPLOYEES",
  "REAL WORK",
  "REAL MONEY",
  "LEVEL UP",
  "NO SCAMS",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section
      className="marquee-mask relative overflow-hidden py-5"
      style={{ background: "var(--yellow)" }}
      aria-hidden="true"
    >
      <div
        className="flex w-max whitespace-nowrap"
        style={{ animation: "marquee 34s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center font-display leading-none tracking-widest text-black"
            style={{ fontSize: "clamp(1.4rem, 4vw, 2.75rem)" }}
          >
            <span className="px-7">{item}</span>
            <span style={{ color: "rgba(0,0,0,0.25)" }} aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { DISCORD_INVITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--border-strong)" }}>
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          <div className="flex items-center gap-4">
            <div
              className="relative h-10 w-10 overflow-hidden"
              style={{ border: "1px solid var(--border-strong)" }}
            >
              <Image src="/logo.png" alt="" fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <div
                className="font-display text-[1.35rem] leading-none tracking-wide"
                style={{ color: "var(--cream)" }}
              >
                SOLO HUSTLE HUB
              </div>
              <div
                className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.24em]"
                style={{ color: "var(--cream-muted)" }}
              >
                All Hustle · No Filler
              </div>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-8 font-mono text-[0.65rem] uppercase tracking-[0.18em]"
            style={{ color: "var(--cream-muted)" }}
          >
            <a href="#about" className="transition-colors hover:text-[var(--cream)]">About</a>
            <a href="#features" className="transition-colors hover:text-[var(--cream)]">Who it&apos;s for</a>
            <a href="#ranks" className="transition-colors hover:text-[var(--cream)]">Ranks</a>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-[#FFD600]"
            >
              Discord
            </a>
          </nav>

          <div
            className="font-mono text-[0.6rem] uppercase tracking-[0.22em] md:text-right"
            style={{ color: "var(--cream-muted)" }}
          >
            <div>© {year} Solo Hustle Hub</div>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener"
              className="mt-1 block transition-colors hover:text-[var(--cream)]"
            >
              discord.gg/YU6mWWzXmD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

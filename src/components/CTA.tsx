"use client";

import { Reveal } from "./Reveal";
import DiscordIcon from "./DiscordIcon";
import { DISCORD_INVITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section
      id="join"
      className="relative overflow-hidden py-32 md:py-52"
      style={{ background: "var(--yellow)" }}
    >
      {/* Subtle grid on the yellow surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-x relative z-10">
        <Reveal>
          <div
            className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.28em]"
            style={{ color: "rgba(0,0,0,0.42)" }}
          >
            — Join the community
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="font-display leading-[0.85] text-black"
            style={{ fontSize: "clamp(4.5rem, 16vw, 13rem)" }}
          >
            READY<br />
            TO LEVEL<br />
            UP?
          </h2>
        </Reveal>

        <div
          className="mt-12 flex flex-col gap-7 pt-10 md:flex-row md:items-center md:justify-between"
          style={{ borderTop: "1px solid rgba(0,0,0,0.14)" }}
        >
          <Reveal delay={0.18}>
            <p className="text-xl text-black/65 md:text-2xl">
              Free to join. Real work. Real money.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener"
                className="btn btn-dark btn-lg"
              >
                <DiscordIcon className="h-6 w-6" />
                Join the Squad
              </a>
              <span
                className="font-mono text-xs uppercase tracking-[0.22em] sm:ml-4"
                style={{ color: "rgba(0,0,0,0.38)" }}
              >
                discord.gg/YU6mWWzXmD
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

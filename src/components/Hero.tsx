"use client";

import { motion } from "motion/react";
import DiscordIcon from "./DiscordIcon";
import { DISCORD_INVITE } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden"
      style={{ paddingTop: "68px" }}
    >
      <div className="container-x relative z-10 flex min-h-[calc(100dvh-68px)] flex-col justify-center pb-16 pt-12">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Kicker */}
          <motion.div
            variants={item}
            className="mb-10 flex items-center gap-3"
          >
            <span className="dot-live" />
            <span
              className="font-mono text-[0.65rem] uppercase tracking-[0.25em]"
              style={{ color: "var(--cream-muted)" }}
            >
              Community active · Freelance · Jobs · Hiring
            </span>
          </motion.div>

          {/* Editorial layout: giant stacked headline left, content right */}
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-0">

            {/* Left: SOLO / HUSTLE / HUB. */}
            <motion.div
              variants={item}
              className="lg:border-r lg:pr-14"
              style={{ borderColor: "var(--border-strong)" }}
            >
              <h1
                className="font-display leading-[0.85] select-none"
                style={{ fontSize: "clamp(4.5rem, 12vw, 10rem)" }}
              >
                <span style={{ color: "rgba(237,232,224,0.35)", display: "block" }}>SOLO</span>
                <span
                  style={{ color: "var(--yellow)", display: "block", position: "relative" }}
                >
                  HUSTLE
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: "4px",
                      left: 0,
                      height: "4px",
                      width: "2.7ch",
                      background: "var(--yellow)",
                      opacity: 0.4,
                    }}
                  />
                </span>
                <span style={{ color: "rgba(237,232,224,0.15)", display: "block" }}>HUB.</span>
              </h1>
            </motion.div>

            {/* Right: subtitle + CTA */}
            <motion.div
              variants={item}
              className="flex flex-col gap-8 lg:pl-14"
            >
              <p
                className="text-xl leading-relaxed md:text-2xl"
                style={{ color: "var(--cream-dim)", maxWidth: "36rem" }}
              >
                The Discord where{" "}
                <strong style={{ color: "var(--cream)", fontWeight: 600 }}>
                  verified clients
                </strong>{" "}
                post real work and freelancers{" "}
                <strong style={{ color: "var(--cream)", fontWeight: 600 }}>
                  lock in contracts
                </strong>
                . Moderated daily. Free to join. Zero tolerance for scams.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  <DiscordIcon className="h-5 w-5" />
                  Join the Squad
                </a>
                <a href="#ranks" className="btn btn-ghost">
                  View Ranks
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stat row — full width, below the split */}
          <motion.div
            variants={item}
            className="mt-16 grid grid-cols-3 border"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { label: "Active", value: "24/7", accent: false },
              { label: "Entry price", value: "Free", accent: true },
              { label: "Earnings cap", value: "None", accent: false },
            ].map((s, i) => (
              <div
                key={s.label}
                className="px-6 py-7 md:px-10"
                style={{
                  borderLeft: i > 0 ? `1px solid var(--border)` : undefined,
                }}
              >
                <div
                  className="font-mono text-[0.62rem] uppercase tracking-[0.25em]"
                  style={{ color: "var(--cream-muted)" }}
                >
                  {s.label}
                </div>
                <div
                  className="mt-2 font-display leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    color: s.accent ? "var(--yellow)" : "var(--cream)",
                  }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 z-10 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] transition-colors"
        style={{
          left: "clamp(1.25rem, 5vw, 3rem)",
          color: "var(--cream-muted)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-muted)")}
      >
        <span
          className="relative block overflow-hidden"
          style={{ width: "32px", height: "1px", background: "var(--border-strong)" }}
        >
          <span
            className="absolute inset-0 block"
            style={{
              background: "var(--yellow)",
              animation: "scrollLine 2.4s ease-in-out infinite",
            }}
          />
        </span>
        Scroll
      </a>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

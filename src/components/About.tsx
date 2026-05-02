"use client";

import { Reveal } from "./Reveal";
import { Check, ExternalLink } from "lucide-react";
import { COMPANY_NAME, COMPANY_URL, CREATOR_NAME } from "@/lib/constants";

const BULLETS = [
  "Real-time gig drops",
  "Verified clients & employers",
  "Portfolio reviews",
  "Peer mentorship",
  "Active staff & moderation",
  "No scams, no fluff",
];

export default function About() {
  return (
    <section id="about" className="container-x relative py-32 md:py-44">

      <div
        className="mb-2 flex items-end justify-between gap-8 pb-8"
        style={{ borderBottom: "1px solid var(--border-strong)" }}
      >
        <Reveal>
          <div className="section-label">01 — About</div>
        </Reveal>
        <Reveal delay={0.04}>
          <div
            aria-hidden="true"
            className="font-display leading-none select-none"
            style={{ fontSize: "clamp(4rem, 12vw, 8rem)", color: "var(--cream)", opacity: 0.025 }}
          >
            WHO
          </div>
        </Reveal>
      </div>

      <div className="grid gap-16 pt-14 lg:grid-cols-[1fr_360px]">
        <div>
          <Reveal>
            <h2
              className="font-display leading-[0.9]"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)", color: "var(--cream)" }}
            >
              WHERE HUSTLERS<br />
              &amp; CLIENTS<br />
              <span style={{ color: "var(--yellow)" }}>COLLIDE.</span>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-5 text-lg leading-relaxed" style={{ color: "var(--cream-dim)" }}>
            <Reveal delay={0.1}>
              <p>
                Solo Hustle Hub is a purpose-built Discord for people who are{" "}
                <strong style={{ color: "var(--cream)", fontWeight: 600 }}>serious about results</strong>.
                We operate on a strict no-scam, no time-waste policy — a reliable space where every
                opportunity is legitimate and every interaction has value.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                Freelancers showcase skills and lock in contracts. Clients find dependable talent.
                The goal:{" "}
                <strong style={{ color: "var(--cream)", fontWeight: 600 }}>consistent income</strong>,
                long-term professional relationships, and a focused space to scale your hustle.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.22}>
          <div className="space-y-5">
            <ul style={{ border: "1px solid var(--border)" }}>
              {BULLETS.map((b, i) => (
                <li
                  key={b}
                  className="group flex cursor-default items-center gap-3 px-5 py-4 transition-colors duration-150 hover:bg-[#FFD600]"
                  style={{ borderTop: i > 0 ? "1px solid var(--border)" : undefined }}
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--yellow)] transition-colors group-hover:text-black"
                  />
                  <span className="text-sm font-medium text-[var(--cream)] transition-colors group-hover:text-black">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-[var(--border)] bg-[var(--ink-2)] p-5 transition-colors duration-150 hover:bg-[#FFD600]"
              aria-label={`Visit ${COMPANY_NAME}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--cream-muted)] transition-colors group-hover:text-black/55">
                    Creator Credit
                  </div>
                  <div className="mt-3 font-display text-[2rem] leading-none tracking-wide text-[var(--cream)] transition-colors group-hover:text-black">
                    {CREATOR_NAME}
                  </div>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-[var(--border-strong)] text-[var(--cream-dim)] transition-colors group-hover:border-black/20 group-hover:text-black">
                  <ExternalLink className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--cream-dim)] transition-colors group-hover:text-black/70">
                Built under {COMPANY_NAME}, the team behind focused web builds,
                community launches, and creator tools.
              </p>
              <span className="mt-5 inline-flex font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--yellow)] transition-colors group-hover:text-black">
                deltavdevs.com
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

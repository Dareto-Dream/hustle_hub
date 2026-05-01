"use client";

import { motion } from "motion/react";
import { Copy, Crown, ShieldCheck, Swords, Gem, Flame, ArrowUpRight, Info } from "lucide-react";
import { useState, useCallback } from "react";
import type { ComponentType } from "react";
import { RANKS, DISCORD_USERNAME, type Rank } from "@/lib/constants";
import { Reveal, RevealStack, RevealItem } from "./Reveal";
import Toast from "./Toast";

const TONE: Record<Rank["tone"], { color: string; border: string; bg: string }> = {
  apex:  { color: "#FFD600", border: "rgba(255,214,0,0.45)", bg: "rgba(255,214,0,0.06)" },
  lead:  { color: "#EDE8E0", border: "rgba(237,232,224,0.22)", bg: "rgba(237,232,224,0.03)" },
  admin: { color: "#B8B0A4", border: "rgba(184,176,164,0.18)", bg: "rgba(184,176,164,0.025)" },
  ops:   { color: "#9A8F82", border: "rgba(154,143,130,0.15)", bg: "rgba(154,143,130,0.02)" },
  mod:   { color: "#6A6259", border: "rgba(106,98,89,0.12)", bg: "transparent" },
};

const TONE_ICONS: Record<Rank["tone"], ComponentType<{ className?: string }>> = {
  apex: Crown, lead: Gem, admin: ShieldCheck, ops: Swords, mod: Flame,
};

export default function Ranks() {
  const [toast, setToast] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });

  const copyUsername = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
      setToast({ open: true, message: `Copied @${DISCORD_USERNAME}` });
      setTimeout(() => setToast({ open: false, message: "" }), 2200);
    } catch {
      setToast({ open: true, message: "DM @ahgbk on Discord" });
      setTimeout(() => setToast({ open: false, message: "" }), 2800);
    }
  }, []);

  const featured = RANKS.filter((r) => r.featured);
  const rest = RANKS.filter((r) => !r.featured);

  return (
    <section id="ranks" className="container-x relative py-32 md:py-44">

      <div
        className="mb-2 flex items-end justify-between gap-8 pb-8"
        style={{ borderBottom: "1px solid var(--border-strong)" }}
      >
        <Reveal>
          <div className="section-label">03 — Staff ranks</div>
        </Reveal>
        <Reveal delay={0.04}>
          <div
            aria-hidden="true"
            className="font-display leading-none select-none"
            style={{ fontSize: "clamp(4rem, 12vw, 8rem)", color: "var(--cream)", opacity: 0.025 }}
          >
            RANK
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <h2
            className="font-display leading-[0.9]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)", color: "var(--cream)" }}
          >
            UNLOCK<br />
            YOUR <span style={{ color: "var(--yellow)" }}>RANK.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className="max-w-sm self-end text-lg leading-relaxed"
            style={{ color: "var(--cream-dim)" }}
          >
            Send a{" "}
            <strong style={{ color: "var(--cream)", fontWeight: 600 }}>PSN Gift Card</strong>{" "}
            to{" "}
            <button
              onClick={copyUsername}
              className="inline-copy"
              aria-label={`Copy Discord username ${DISCORD_USERNAME}`}
            >
              @{DISCORD_USERNAME}
              <Copy className="h-3 w-3" />
            </button>{" "}
            on Discord. Click a rank card to copy &amp; DM.
          </p>
        </Reveal>
      </div>

      {/* Featured row */}
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {featured.map((r, i) => (
          <Reveal key={r.name} delay={0.05 + i * 0.09}>
            <RankCard rank={r} onClaim={copyUsername} featured />
          </Reveal>
        ))}
      </div>

      <div className="my-8 rule-strong" />

      {/* Rest grid */}
      <RevealStack className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" stagger={0.04}>
        {rest.map((r) => (
          <RevealItem key={r.name}>
            <RankCard rank={r} onClaim={copyUsername} />
          </RevealItem>
        ))}
      </RevealStack>

      <Reveal delay={0.15}>
        <p
          className="mt-10 flex items-start gap-2 font-mono text-xs"
          style={{ color: "var(--cream-muted)" }}
        >
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>
            PSN = PlayStation Network Gift Card. Send via Discord DM to{" "}
            <button onClick={copyUsername} className="inline-copy ml-1">
              @{DISCORD_USERNAME}
            </button>{" "}
            for rank assignment.
          </span>
        </p>
      </Reveal>

      <Toast open={toast.open} message={toast.message} />
    </section>
  );
}

function RankCard({
  rank,
  onClaim,
  featured,
}: {
  rank: Rank;
  onClaim: () => void;
  featured?: boolean;
}) {
  const tone = TONE[rank.tone];
  const Icon = TONE_ICONS[rank.tone];

  return (
    <motion.button
      type="button"
      onClick={onClaim}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      className={`group relative flex w-full flex-col text-left transition-colors duration-150 ${
        featured ? "min-h-[300px] p-8" : "min-h-[210px] p-6"
      }`}
      style={{ background: tone.bg, border: `1px solid ${tone.border}` }}
    >
      {/* Top accent line */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 block"
        style={{
          height: "2px",
          background: tone.color,
          opacity: featured ? 1 : 0.65,
        }}
      />

      {/* Tier + icon */}
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[0.6rem] uppercase tracking-[0.28em]"
          style={{ color: tone.color, opacity: 0.7 }}
        >
          {rank.tier}
        </span>
        <div
          className="grid h-8 w-8 place-items-center border"
          style={{ borderColor: tone.border, color: tone.color }}
          aria-hidden="true"
        >
          <Icon className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Name */}
      <h3
        className={`font-display leading-none tracking-wide text-[var(--cream)] ${
          featured ? "mt-8" : "mt-6"
        }`}
        style={{ fontSize: featured ? "clamp(2rem,4.5vw,3rem)" : "1.75rem" }}
      >
        {rank.name.toUpperCase()}
      </h3>

      {/* Price */}
      <div className={featured ? "mt-5" : "mt-4"}>
        <div
          className="font-display leading-none tracking-wide"
          style={{
            fontSize: featured ? "clamp(3rem,6vw,4.5rem)" : "2.5rem",
            color: tone.color,
          }}
        >
          {rank.price}
        </div>
        <div
          className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em]"
          style={{ color: "var(--cream-muted)" }}
        >
          {rank.priceNote}
        </div>
      </div>

      {/* Featured perks */}
      {featured && rank.perks.length > 0 && (
        <ul className="mt-5 space-y-2">
          {rank.perks.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-sm"
              style={{ color: "var(--cream-dim)" }}
            >
              <span
                aria-hidden="true"
                className="mt-[9px] block h-[2px] w-3 shrink-0"
                style={{ background: tone.color }}
              />
              {p}
            </li>
          ))}
        </ul>
      )}

      {/* Footer row */}
      <div
        className="mt-auto flex items-center justify-between pt-5 font-mono text-[0.62rem] uppercase tracking-[0.2em] transition-colors group-hover:text-[var(--cream)]"
        style={{ color: "var(--cream-muted)" }}
      >
        <span>
          DM <span style={{ color: "var(--cream)" }}>@{DISCORD_USERNAME}</span>
        </span>
        <span className="flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-1">
          Claim <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.button>
  );
}

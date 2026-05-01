"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { DISCORD_INVITE } from "@/lib/constants";

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between transition-all duration-200"
      style={{
        background: scrolled ? "rgba(12, 12, 12, 0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-strong)" : "1px solid transparent",
        padding: "0 clamp(1.25rem, 5vw, 3rem)",
        height: "68px",
      }}
    >
      <a href="#top" className="flex items-center gap-3" aria-label="Solo Hustle Hub home">
        <div
          className="relative h-8 w-8 overflow-hidden"
          style={{ border: "1px solid var(--border-strong)" }}
        >
          <Image src="/logo.png" alt="" fill sizes="32px" className="object-cover" priority />
        </div>
        <span
          className="hidden font-display text-[1.1rem] leading-none tracking-wide sm:block"
          style={{ color: "var(--cream)" }}
        >
          SOLO HUSTLE HUB
        </span>
      </a>

      <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-7">
        {["About", "Who it's for", "Ranks"].map((label, i) => (
          <a
            key={label}
            href={["#about", "#features", "#ranks"][i]}
            className="hidden font-mono text-[0.65rem] uppercase tracking-[0.18em] transition-colors hover:text-[var(--cream)] md:inline-flex"
            style={{ color: "var(--cream-muted)" }}
          >
            {label}
          </a>
        ))}
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener"
          className="btn btn-primary"
          style={{ padding: "0.5rem 1.2rem", fontSize: "0.95rem", minHeight: "38px" }}
        >
          <span className="dot-live" aria-hidden="true" />
          Join Free
        </a>
      </nav>
    </motion.header>
  );
}

"use client";

import { Reveal, RevealStack, RevealItem } from "./Reveal";
import { Briefcase, Search, UserPlus, Network } from "lucide-react";

const FEATURES = [
  {
    num: "01",
    title: "Freelancers",
    icon: Briefcase,
    body: "Find paying clients, showcase your work, and lock in repeat contracts. Your next project is three messages away.",
  },
  {
    num: "02",
    title: "Job Seekers",
    icon: Search,
    body: "Browse fresh listings, get referrals, and land interviews without burning out on mass-apply boards.",
  },
  {
    num: "03",
    title: "Hiring & Clients",
    icon: UserPlus,
    body: "Post roles. Get matched with motivated specialists. Skip the ATS spam and hire real humans — fast.",
  },
  {
    num: "04",
    title: "Employees",
    icon: Network,
    body: "Network across industries, sharpen skills, and build your side hustle alongside the 9-to-5.",
  },
];

export default function Features() {
  return (
    <section id="features" className="container-x relative py-32 md:py-44">

      <div
        className="mb-2 flex items-end justify-between gap-8 pb-8"
        style={{ borderBottom: "1px solid var(--border-strong)" }}
      >
        <Reveal>
          <div className="section-label">02 — Who it&apos;s for</div>
        </Reveal>
        <Reveal delay={0.04}>
          <div
            aria-hidden="true"
            className="font-display leading-none select-none"
            style={{ fontSize: "clamp(4rem, 12vw, 8rem)", color: "var(--cream)", opacity: 0.025 }}
          >
            FOR
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <h2
          className="mt-14 font-display leading-[0.9]"
          style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)", color: "var(--cream)" }}
        >
          BUILT FOR<br />
          <span style={{ color: "var(--yellow)" }}>EVERY SIDE</span><br />
          OF THE HUSTLE.
        </h2>
      </Reveal>

      {/* Seamless grid: parent provides the 1px border background, gap-px creates slots */}
      <div className="mt-14" style={{ background: "var(--border)" }}>
        <RevealStack className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {FEATURES.map((f) => (
            <RevealItem key={f.num}>
              <FeatureCard {...f} />
            </RevealItem>
          ))}
        </RevealStack>
      </div>
    </section>
  );
}

function FeatureCard({
  num,
  title,
  body,
  icon: Icon,
}: {
  num: string;
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div
      className="group flex h-full flex-col p-8 transition-colors duration-150 hover:bg-[#FFD600]"
      style={{ background: "var(--ink-2)" }}
    >
      <div className="flex items-start justify-between">
        <span
          className="font-mono text-[0.62rem] uppercase tracking-[0.28em] transition-colors group-hover:text-black/50"
          style={{ color: "var(--cream-muted)" }}
        >
          {num}
        </span>
        <div
          className="grid h-10 w-10 place-items-center border transition-colors duration-150 group-hover:border-black/20 group-hover:text-black"
          style={{ borderColor: "var(--border-strong)", color: "var(--cream-dim)" }}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <h3
        className="mt-8 font-display leading-none tracking-wide transition-colors group-hover:text-black"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", color: "var(--cream)" }}
      >
        {title.toUpperCase()}
      </h3>
      <p
        className="mt-4 text-sm leading-relaxed transition-colors group-hover:text-black/70"
        style={{ color: "var(--cream-dim)" }}
      >
        {body}
      </p>
    </div>
  );
}

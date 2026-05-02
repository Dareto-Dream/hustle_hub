export const DISCORD_INVITE = "https://discord.gg/YU6mWWzXmD";
export const DISCORD_USERNAME = "ahgbk";
export const CREATOR_NAME = "DeltaVortex";
export const COMPANY_NAME = "DeltaVDevs";
export const COMPANY_URL = "https://deltavdevs.com";
export const SITE_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const LOGO_PATH = `${SITE_BASE_PATH}/logo.png`;

export type Rank = {
  name: string;
  price: string;
  priceNote?: string;
  tier: string;
  tone: "apex" | "lead" | "admin" | "ops" | "mod";
  perks: string[];
  featured?: boolean;
};

export const RANKS: Rank[] = [
  {
    name: "Founder",
    price: "$100",
    priceNote: "PSN Gift Card",
    tier: "TIER 01 · APEX",
    tone: "apex",
    featured: true,
    perks: [
      "Highest authority role",
      "Shapes community direction",
      "Exclusive founder channel",
    ],
  },
  {
    name: "Co-Founder",
    price: "$50 + $25",
    priceNote: "PSN Gift Cards",
    tier: "TIER 01 · APEX",
    tone: "apex",
    featured: true,
    perks: [
      "Executive authority",
      "Strategic decisions",
      "Leadership channel access",
    ],
  },
  {
    name: "Head of Staff",
    price: "$50",
    priceNote: "PSN Gift Card",
    tier: "TIER 02 · LEADERSHIP",
    tone: "lead",
    perks: ["Oversees all staff ops", "Escalation authority"],
  },
  {
    name: "Network Director",
    price: "$25 + $15",
    priceNote: "or $20 PSN card",
    tier: "TIER 02 · LEADERSHIP",
    tone: "lead",
    perks: ["Directs network growth", "Cross-channel coordination"],
  },
  {
    name: "Board of Directors",
    price: "$20 + $10",
    priceNote: "PSN Gift Cards",
    tier: "TIER 02 · LEADERSHIP",
    tone: "lead",
    perks: ["Governance vote", "Policy input"],
  },
  {
    name: "Head Administrator",
    price: "$25",
    priceNote: "PSN Gift Card",
    tier: "TIER 03 · ADMIN",
    tone: "admin",
    perks: ["Leads admin squad", "Server configuration"],
  },
  {
    name: "Administration Team",
    price: "$20",
    priceNote: "PSN Gift Card",
    tier: "TIER 03 · ADMIN",
    tone: "admin",
    perks: ["Core admin access", "Member management"],
  },
  {
    name: "Community Manager",
    price: "$10 + $5",
    priceNote: "PSN Gift Cards",
    tier: "TIER 04 · OPS",
    tone: "ops",
    perks: ["Community engagement", "Events & programs"],
  },
  {
    name: "Chief Moderation Officer",
    price: "$10 + $5",
    priceNote: "PSN Gift Cards",
    tier: "TIER 04 · OPS",
    tone: "ops",
    perks: ["Leads moderation team", "Dispute resolution"],
  },
  {
    name: "Senior Moderator",
    price: "$10",
    priceNote: "PSN Gift Card",
    tier: "TIER 05 · MOD",
    tone: "mod",
    perks: ["Elevated mod tools", "Mentors mod team"],
  },
  {
    name: "Moderator",
    price: "$5",
    priceNote: "PSN Gift Card",
    tier: "TIER 05 · MOD",
    tone: "mod",
    perks: ["Active moderation", "Community support"],
  },
  {
    name: "Management Team",
    price: "$5",
    priceNote: "PSN Gift Card",
    tier: "TIER 05 · MOD",
    tone: "mod",
    perks: ["Operational support", "Entry-level staff"],
  },
];

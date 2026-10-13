export const site = {
  name: "Notts Repeaters",
  domain: "nottsrepeaters.org",
  url: "https://nottsrepeaters.org",
  description:
    "Programming details for GB7NR, GB3NF, and GB3NM, the Nottingham amateur radio repeaters.",
  keeper: "M0VUB",
  email: "shane@freestar.network",
  region: "ETCC Central England",
} as const;

export const nav = [
  { href: "/gb7nr", label: "GB7NR" },
  { href: "/gb3nf", label: "GB3NF" },
  { href: "/gb3nm", label: "GB3NM" },
  { href: "/about", label: "About" },
  { href: "/history", label: "History" },
  { href: "/support", label: "Support" },
] as const;

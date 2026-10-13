export const site = {
  name: "Nottingham Repeaters",
  domain: "nottsrepeaters.org",
  url: "https://nottsrepeaters.org",
  description:
    "Programming details for the Nottingham amateur radio repeaters: GB7NR on 439.4375 MHz, GB3NF on 145.6250 MHz, and GB3NM on 433.1750 MHz.",
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

export interface Fact {
  label: string;
  value: string;
}

export interface Talkgroup {
  id: string;
  slot: string;
  name: string;
}

export interface Station {
  slug: "gb7nr" | "gb3nf" | "gb3nm";
  callsign: string;
  band: string;
  channel: string;
  mode: string;
  summary: string;
  outputMHz: string;
  inputMHz: string;
  status: "On air";
  programming: Fact[];
  operation: Fact[];
  licence: Fact[];
  licenceHref: string;
  links?: Fact[];
  talkgroups?: Talkgroup[];
  photo?: { src: string; alt: string; caption: string };
  embed?: { src: string; title: string };
  /** Shown on the station page when a programming warning is needed. */
  notice?: string;
}

/**
 * Licence figures are from ETCC via ukrepeater.net on 13 Oct 2026.
 * Hardware and linking follow the keeper's description.
 *
 * GB7NR static talkgroups, including the slots, were confirmed by the keeper
 * on 13 Oct 2026. Names are from the SystemX dashboard.
 *
 * Held back until confirmed:
 * - GB3NF links only to FreeSTAR hub 2196. Its own AllStar node number is not published.
 * - EchoLink GB3NF-R, node 564542, from the old gb3nf.co.uk services page.
 * - Precise site coordinates. GB3NF and GB3NM are withheld on the ETCC record.
 */
export const stations: Station[] = [
  {
    slug: "gb7nr",
    callsign: "GB7NR",
    band: "70cm",
    channel: "DVU35",
    mode: "DMR and D-Star",
    summary: "70cm repeater on Pi-Star. DMR is on SystemX. D-Star is linked to XLX248 module P.",
    outputMHz: "439.4375",
    inputMHz: "430.4375",
    status: "On air",
    programming: [
      { label: "Offset", value: "−9 MHz" },
      { label: "Colour code", value: "1" },
      { label: "DMR ID", value: "235287" },
      { label: "Channel", value: "DVU35" },
    ],
    operation: [
      { label: "DMR", value: "SystemX" },
      { label: "D-Star", value: "XLX248 module P" },
      { label: "Hardware", value: "MMDVM on Motorola radios, Pi-Star" },
      { label: "Coverage", value: "Nottingham, locator IO92KX" },
    ],
    talkgroups: [
      { id: "235", slot: "1", name: "235 Alive" },
      { id: "2350", slot: "2", name: "UK ChatterBOX" },
      { id: "23590", slot: "2", name: "East Midlands" },
      { id: "23591", slot: "2", name: "Nottinghamshire Link" },
    ],
    licence: [
      { label: "Keeper", value: "M0VUB" },
      { label: "ETCC record", value: "3855" },
      { label: "ERP", value: "14 dBW" },
      { label: "Antenna height", value: "10 m above ground" },
      { label: "NoV review", value: "13 March 2028" },
    ],
    licenceHref: "https://ukrepeater.net/my_repeater.php?id=3855",
    links: [
      { label: "Pi-Star dashboard", value: "https://gb7nr.nottsrepeaters.org" },
      { label: "SystemX dashboard", value: "https://dmr.freestar.network/legacy" },
      { label: "D-Star dashboard", value: "https://xlx248.freestar.network" },
    ],
  },
  {
    slug: "gb3nf",
    callsign: "GB3NF",
    band: "2m",
    channel: "RV50",
    mode: "FM AllStar",
    summary: "2m FM repeater. It links to the FreeSTAR hub, AllStar node 2196.",
    outputMHz: "145.6250",
    inputMHz: "145.0250",
    status: "On air",
    programming: [
      { label: "Offset", value: "−0.6 MHz" },
      { label: "CTCSS", value: "77.0 Hz" },
      { label: "Toneburst", value: "1750 Hz" },
      { label: "Deviation", value: "Narrow, 2.5 kHz (12.5 kHz)" },
      { label: "Channel", value: "RV50" },
    ],
    operation: [
      { label: "Hub", value: "FreeSTAR 2196" },
      { label: "Connection", value: "Usually linked. Dropped when there is QRM." },
      { label: "User control", value: "DTMF is switched off" },
      { label: "Coverage", value: "Nottingham and the surrounding area" },
    ],
    embed: {
      src: "https://masterdash.freestar.network/allmon3/index.html#2196,2167,54072,63061",
      title: "FreeSTAR AllStar dashboard, including hub 2196",
    },
    licence: [
      { label: "Keeper", value: "M0VUB" },
      { label: "ETCC record", value: "4294" },
      { label: "ERP", value: "8.8 dBW" },
      { label: "Locator", value: "IO92, exact site withheld" },
      { label: "NoV review", value: "20 July 2026" },
    ],
    licenceHref: "https://ukrepeater.net/my_repeater.php?id=4294",
    photo: {
      src: "/photos/gb3nf-rack.jpg",
      alt: "GB3NF rack with the G1SLE MkII repeater controller and base station radio",
      caption: "GB3NF rack. G1SLE MkII controller, with the base station radio below it.",
    },
  },
  {
    slug: "gb3nm",
    callsign: "GB3NM",
    band: "70cm",
    channel: "RB07",
    mode: "FM talkthrough",
    summary: "Standalone 70cm FM repeater. It stays on its own channel.",
    outputMHz: "433.1750",
    inputMHz: "434.7750",
    status: "On air",
    programming: [
      { label: "Offset", value: "+1.6 MHz" },
      { label: "CTCSS", value: "71.9 Hz" },
      { label: "Deviation", value: "Wide, 25 kHz" },
      { label: "Channel", value: "RB07" },
    ],
    operation: [
      { label: "Hardware", value: "Motorola DR3000 talkthrough" },
      { label: "Between overs", value: "CTCSS drops, so tone squelch hides the pips" },
      { label: "Coverage", value: "Nottingham and the surrounding area" },
    ],
    licence: [
      { label: "Keeper", value: "M0VUB" },
      { label: "ETCC record", value: "4908" },
      { label: "ERP", value: "11 dBW" },
      { label: "Locator", value: "IO92, exact site withheld" },
    ],
    licenceHref: "https://ukrepeater.net/my_repeater.php?id=4908",
    notice:
      "DMR on this DR3000 is switched off. Programme the channel as 25 kHz wide.",
    photo: {
      src: "/photos/gb3nm-dr3000.jpg",
      alt: "Motorola DR3000 repeater labelled GB3NM on 433.175 MHz",
      caption: "GB3NM Motorola DR3000 talkthrough, labelled 433.175 MHz.",
    },
  },
];

export function getStation(slug: string): Station | undefined {
  return stations.find((station) => station.slug === slug);
}

export interface HistoryEntry {
  when: string;
  text: string;
  more: string[];
}

export const historyPhotos = [
  {
    src: "/photos/gb3nf-2006.jpg",
    alt: "The GB3NF equipment cabinet in 2006, beside a desktop computer",
    caption: "GB3NF in 2006, in the original cabinet.",
  },
  {
    src: "/photos/gb3nf-mast.jpg",
    alt: "Looking up inside the lattice mast at the original GB3NF site",
    caption: "The mast at Dorket Head, where the Nottingham GB3NF started.",
  },
];

/**
 * Sources, checked 14 Oct 2026:
 * - 1977 on-air date: Geoff G4AFJ, Leicestershire Repeater Group, from RSGB repeater records.
 *   An earlier note that GB3NM opened on RB07 was wrong. Nothing in that account,
 *   or elsewhere online, gives GB3NM a 1977 CTCSS tone. Phase 2 access was a
 *   1750 Hz toneburst: the GB3LE provisional specification for the same batch
 *   (dave-cushman.net) requires 1750 Hz. The RSGB Repeater Management Committee
 *   later treated CTCSS as optional and additional. Nottinghamshire's tone in
 *   that plan is 71.9 Hz. CTCSS became mandatory for new UK repeaters in 2004.
 * - 1977–2005, GB3NM: an email to the keeper, 14 October 2026. Original output RB06,
 *   keeper Mike G2SP (SK), the Ransom Gardens broadcast mast, 15 W ERP, the move
 *   to RB07 in 1989, and the closure at that site in 2005.
 * - 1981–1995: Mike G4HXT, who switched the New Forest GB3NF on.
 * - 2005–2020: the keeper's account on gb3nf.co.uk/about/, and Nick G4IRX.
 * - 2019–2024: the GB7NR news written at the time.
 *   Bob M0NGT's part was corrected by the keeper: he made the EA7GIV
 *   MMDVM, configured the STM32 Nucleo, 3D-printed its case, and set
 *   the repeater up for first use. M0VUB assembled and deployed it.
 * Street addresses of the present sites, and site grids, are left out.
 */
export const history: HistoryEntry[] = [
  {
    when: "1977",
    text: "GB3NM comes on the air on 13 October, with GB3DY. It is Nottingham's 70cm repeater, on RB06, kept by Mike, G2SP.",
    more: [
      "Urban 2m repeaters had become difficult to license, so the RSGB opened a plan for smaller UHF boxes. The first of them were licensed in 1976. The next batch waited until October 1977.",
      "GB3NM and GB3DY came on the air on 13 October. GB3LE at Leicester followed on Saturday 15 October. GB3NM opened on RB06, 433.150 MHz, with an ERP of 15 watts. Access was by a 1750 Hz toneburst, the method specified for that batch of repeaters. The keeper was Mike, G2SP, now a silent key. The antenna was halfway up the Ransom Gardens commercial broadcast mast.",
    ],
  },
  {
    when: "1981",
    text: "The GB3NF callsign is commissioned for a 70cm repeater in the New Forest. The Waterside group switches it on at 19:00 on 4 November. It closes on 11 April 1995, when the mast is taken down.",
    more: [
      "GB3NF was the New Forest 70cm repeater on RB11, run by the Waterside UHF Repeater Group. The only other 70cm box nearby was GB3PH on Portsdown Hill, and it no longer covered the Waterside well. Most local stations worked it on Pye PF1 or PF2 handsets.",
      "The group formed on 29 May 1980 at the Flying Boat, Calshot. Lyndhurst Printing gave them a place in the radio room on the Hardley Industrial Estate, and two positions on the company mast. The main aerial was a Jaybeam C8/70 colinear, with a Jaybeam dipole below it for standby. Roy G8CKN built the cavities.",
      "Clive G4KCM and Mike G4HXT switched it on at 19:00 on 4 November 1981. Peter G4SBF and Jill were there. Constance, G8LY, was the first station through, before the repeater had sent its first Morse ident. Clive, John G8UAY and Arthur G8PGF kept the Mk I and Mk II radios on the air without a break.",
      "On the morning of Saturday 11 April 1995 the group arrived to take the mast down and found it already on the ground. No other site could be found. They dismantled the station and returned the licence to the RSGB. The callsign stayed unused until Nottingham took it up in 2005.",
    ],
  },
  {
    when: "1989",
    text: "GB3NM moves from RB06, 433.150 MHz, to RB07, 433.175 MHz.",
    more: [
      "GB3NM had been on RB06, 433.150 MHz, since it came on the air in 1977. In 1989 the output changed to 433.175 MHz, channel RB07, which it still uses.",
    ],
  },
  {
    when: "2005",
    text: "The GB3NF callsign is licensed again for Nottingham and run by the Midlands Repeater Group from Dorket Head. The radio is a Philips/Simoco FX5000 in a PYE L300 cabinet. That site does not last. GB3NM is taken off the air at Ransom Gardens.",
    more: [
      "The callsign came back in 2005, this time for Nottingham. The Midlands Repeater Group put GB3NF on the air at Dorket Head, the highest point in the city.",
      "The radio was a Philips/Simoco FX5000, built into a vintage PYE L300 cabinet from the old Bowman telephone exchange. Dorket Head did not last. After the move, the FX5000 was no longer fit to use.",
      "GB3NM was taken off the air from the Ransom Gardens site in 2005. It had been on that commercial broadcast mast since 1977.",
    ],
  },
  {
    when: "2006",
    text: "In April, Keith Moody, G4NRZ, becomes acting keeper of GB3NF, with Nick Button, G4IRX, as acting engineer. A new working party rebuilds GB3NF and GB3NM together. GB3NF returns to service on 28 October.",
    more: [
      "In April 2006 Keith Moody, G4NRZ, took over as acting keeper and a site was found in Mapperley. Nick Button, G4IRX, took on the engineering and judged the Philips/Simoco radio unusable. The repeater had to be built again.",
      "In June, G1MBQ, Keith G4NRZ, Ron G4XOU and Nick G4IRX started the rebuild. A Kyodo KG-110 and a Nokia BSR 150LN were given for the 2m repeater, the same radios already used on GB3NM. Dominic G7NPW helped with the Nokia. Both repeaters went into the PYE cabinet, each with a G1SLE MkII controller for CTCSS, 1750 Hz toneburst and the Morse ident.",
      "Ian Ashford, G8PWE, modified a Sinclair cavity set with dual ferrite isolators for the 2m side. It was shown on the GB3DX stand at the Castle Donington rally in September. GB3NF went back into service on 28 October.",
      "Nick G4IRX and the other Nottingham amateurs then ran both repeaters, GB3NM on 70cm and GB3NF on 2m, until 2020.",
    ],
  },
  {
    when: "2019",
    text: "M0VUB assembles GB7NR, a UHF repeater on a 9 MHz split with two Motorola GM360 radios, and deploys it at Mapperley Top in October. Bob, M0NGT, builds the MMDVM and configures it for first use.",
    more: [
      "In January 2019 M0VUB set out to build a repeater in Nottingham. A site was already there. He asked the ETCC agent for the Midlands for a multi-mode UHF repeater on a 9 MHz split, so it could carry more than one digital voice mode.",
      "Construction started in mid July, after the NoV and the callsign GB7NR. The radios were two Motorola GM360 UHF transceivers in a 4U case, with a front display and temperature-controlled fans for continuous duty. Bob, M0NGT, manufactured the MMDVM, an EA7GIV board, and configured and customised the STM32 Nucleo for GB7NR. He also 3D-printed the case for it, and he configured the repeater for its first use. M0VUB put the station together and deployed it.",
      "It went live at Mapperley Top in October 2019, on reduced power. DMR and D-Star were carried over an LTE connection while a better link was still being planned.",
    ],
  },
  {
    when: "2020",
    text: "On 15 May, G4NRZ takes GB3NF off the air. On 21 July he passes it to M0VUB. It is rebuilt for AllStar and, in September, shares the site with GB7NR. GB3NM is re-established the same year.",
    more: [
      "GB3NF had stayed with the 2006 group for fourteen years. On 15 May 2020 Keith G4NRZ decided it should be decommissioned and the equipment taken off the site. On 21 July Shane Daley, M0VUB, became acting keeper. Keith gave him the repeater.",
      "M0VUB rebuilt it for AllStar and moved it to the GB7NR site. September brought a new rack, a supply for both repeaters, and the isolation to run them together. GB3NF came back on the air that month. In October the receiver was brought into line with the 10 watt transmitter, and the worst of the site noise was taken out. It worked best to the south and south-east of the city.",
      "GB3NM was brought back the same year, during the pandemic, and stayed a standalone FM talkthrough. Both analogue repeaters then remained with M0VUB. gb7nr.co.uk opened in May.",
    ],
  },
  {
    when: "2021",
    text: "GB7NR leaves BrandMeister on 31 October and moves to IPSC2-FreeSTAR, after a FreeDMR trial and a period with SystemX on one slot.",
    more: [
      "Through the winter of 2020 the repeater was being moved off BrandMeister reflectors. A FreeDMR trial, the network started by Simon G7RZU, began in December and was still unsettled in January. In February a transmitter fault took GB7NR off the air.",
      "It was rebuilt in the spring. In May it went back on BrandMeister, with SystemX on the other slot. Slot 1 carried the FreeSTAR and local groups. Slot 2 stayed on BrandMeister, normally TG 2350. An AirTECH duplexer was aligned for 439.4375 and 430.4375 MHz.",
      "The last BrandMeister transmission was on Sunday 31 October 2021. From then GB7NR sat on the FreeSTAR IPSC2 master. Slot 2 was the local slot. Slot 1 carried the wider traffic, including TG 235 and TG 23426.",
    ],
  },
  {
    when: "2024",
    text: "D-Star comes off GB7NR. The repeater is replaced with a Motorola DR3000, linked by IP Site Connect.",
    more: [
      "In October, D-Star was taken off and GB7NR became DMR only. The MMDVM radios came out. A Motorola DR3000 went in their place, linked by IP Site Connect to the IPSC2-FreeSTAR master. It stayed that way until 2026.",
    ],
  },
  {
    when: "2026",
    text: "GB7NR returns to the original MMDVM Motorola radios, running Pi-Star. DMR stays on SystemX. D-Star returns, linked to XLX248 module P.",
    more: [
      "The DR3000 and the IP Site Connect link were taken out. GB7NR went back to the MMDVM and Motorola radios it was built with, this time running Pi-Star. DMR remained on SystemX. D-Star came back, linked to XLX248 module P.",
      "The static groups are TG 235 on slot 1, and TG 2350, TG 23590 and TG 23591 on slot 2. TG 23516, TGIF 116, is on slot 2 as well, but only some of the time. GB3NF is AllStar node 40070. It links to the FreeSTAR hub, node 2196, and is dropped when there is QRM. GB3NM stays a standalone 25 kHz FM box, with the DMR in its DR3000 switched off.",
      "This site, nottsrepeaters.org, replaces the public pages that had been split across gb7nr.co.uk and gb3nf.co.uk.",
    ],
  },
];

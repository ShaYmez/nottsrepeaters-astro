export interface HistoryEntry {
  when: string;
  text: string;
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
    caption: "The mast at Dorket Head, where GB3NF started.",
  },
];

export const history: HistoryEntry[] = [
  {
    when: "2005",
    text: "GB3NF is first licensed and run by the Midlands Repeater Group from Dorket Head.",
  },
  {
    when: "2019",
    text: "M0VUB builds GB7NR as a UHF repeater on a 9 MHz split, using MMDVM and two Motorola GM360 radios. It goes on air at Mapperley Top in October. Bob, M0NGT, made the MMDVM mount.",
  },
  {
    when: "2020",
    text: "gb7nr.co.uk launches with DMR and D-Star. In July, Keith Moody, G4NRZ, passes GB3NF to M0VUB. The repeater is rebuilt for AllStar and, in September, shares the site with GB7NR.",
  },
  {
    when: "2021",
    text: "GB7NR leaves BrandMeister on 31 October and moves to IPSC2-FreeSTAR, after a FreeDMR trial and a period with SystemX on one slot.",
  },
  {
    when: "2024",
    text: "D-Star comes off GB7NR. The repeater is replaced with a Motorola DR3000, linked by IP Site Connect.",
  },
  {
    when: "2026",
    text: "GB7NR returns to the original MMDVM Motorola radios, running Pi-Star. DMR stays on SystemX. D-Star returns, linked to XLX248 module P. This site covers GB7NR, GB3NF, and GB3NM.",
  },
];

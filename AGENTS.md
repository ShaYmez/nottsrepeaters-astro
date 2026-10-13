# Nottingham Repeaters

Public site for three Nottingham repeaters kept by M0VUB.

- GB7NR: 70cm DMR and D-Star. MMDVM on Motorola radios, Pi-Star. DMR on SystemX. D-Star on XLX248 module P. Output 439.4375 MHz, input 430.4375 MHz, colour code 1, DMR ID 235287. Static talkgroups: TG 235 slot 1, TG 2350 slot 2, TG 23590 slot 2, TG 23591 slot 2. TG 23516 slot 2 (TGIF 116) is optional and only sometimes static. Dashboards: https://gb7nr.nottsrepeaters.org, https://dmr.freestar.network/legacy, https://xlx248.freestar.network. Keeper email: shane@freestar.network.
- GB3NF: 2m FM AllStar, node 40070. Output 145.6250 MHz, input 145.0250 MHz, CTCSS 77.0 Hz. Links only to FreeSTAR hub 2196. Usually connected, and dropped when there is QRM. DTMF is off. Dashboard: https://masterdash.freestar.network/allmon3/index.html#2196,2167,54072,63061
- GB3NM: standalone 70cm FM talkthrough. Motorola DR3000. Output 433.1750 MHz, input 434.7750 MHz, CTCSS 71.9 Hz. Wide FM, 25 kHz. DMR is switched off.

## Editing rules

- Change station facts in `src/data/stations.ts`. Keep page templates free of one-off frequencies.
- Do not invent talkgroups, node numbers, coordinates, or nets.
- Do not describe GB7NR as a Motorola DR3000 on IP Site Connect, or as BrandMeister or IPSC2. It is the MMDVM Pi-Star repeater.
- Do not advertise DMR or Fusion on GB3NF. ETCC lists those modes; they are not what this site publishes.
- Do not publish precise site locations for GB3NF or GB3NM.
- Do not publish SystemX passwords, Motorola authentication keys, or master IP addresses.
- Do not rebuild the old members area or codeplug library in this site.
- The archive to mine for history is `C:\Users\shane\gb7nr.co.uk`. Leave its template, jQuery, and `inc/sendEmail.php` there.

## Open items

- Whether EchoLink node 564542 (GB3NF-R) is still proxied.
- A group donation link. Contact is shane@freestar.network.

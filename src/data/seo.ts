import type { Station } from "./stations";
import { site } from "./site";

export function stationListJsonLd(stations: Station[]) {
  return {
    "@type": "ItemList",
    "@id": `${site.url}/#repeaters`,
    name: "Nottingham amateur radio repeaters",
    itemListElement: stations.map((station, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: station.callsign,
      url: `${site.url}/${station.slug}/`,
      description: station.summary,
    })),
  };
}

export function stationJsonLd(station: Station) {
  const url = `${site.url}/${station.slug}/`;
  const facts = [
    { label: "Output", value: `${station.outputMHz} MHz` },
    { label: "Input", value: `${station.inputMHz} MHz` },
    { label: "Mode", value: station.mode },
    { label: "Band", value: station.band },
    { label: "Channel", value: station.channel },
    { label: "Status", value: station.status },
    ...station.programming,
    ...station.operation,
    ...station.licence,
  ];

  if (station.talkgroups) {
    facts.push({
      label: "Static talkgroups",
      value: station.talkgroups
        .map(
          (group) =>
            `TG ${group.id} slot ${group.slot} ${group.name}${group.optional ? " (optional, sometimes static)" : ""}`,
        )
        .join("; "),
    });
  }

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${station.callsign} · ${site.name}`,
    description: `${station.callsign} ${station.mode}. Output ${station.outputMHz} MHz, input ${station.inputMHz} MHz.`,
    isPartOf: { "@id": `${site.url}/#website` },
    about: {
      "@type": "Thing",
      name: station.callsign,
      description: station.summary,
      additionalProperty: facts.map((fact) => ({
        "@type": "PropertyValue",
        name: fact.label,
        value: fact.value,
      })),
    },
  };
}

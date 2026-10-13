import type { APIRoute } from "astro";
import { site } from "../data/site";
import { stations } from "../data/stations";

const paths = ["/", ...stations.map((station) => `/${station.slug}/`), "/about/", "/history/", "/support/"];

export const GET: APIRoute = () => {
  const urls = paths.map((path) => `  <url><loc>${site.url}${path}</loc></url>`).join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};

import { s as sanityClient } from '../chunks/_sanity_client_JiifF4TX.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  const siteUrl = "https://erofwhiterock.com";
  const services = await sanityClient.fetch(
    `*[_type == "service" && defined(slug.current)] { "slug": slug.current, _updatedAt }`
  );
  const locations = await sanityClient.fetch(
    `*[_type == "landingPage" && defined(slug.current) && slug.current != "home"] { "slug": slug.current, _updatedAt }`
  );
  const staticPages = [
    { url: "", changefreq: "daily", priority: 1 },
    { url: "about-us", changefreq: "monthly", priority: 0.8 },
    { url: "contact", changefreq: "monthly", priority: 0.8 },
    { url: "insurance-billing", changefreq: "monthly", priority: 0.8 },
    { url: "services", changefreq: "weekly", priority: 0.9 }
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map(
    (page) => `
    <url>
        <loc>${siteUrl}/${page.url}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`
  ).join("")}
    ${services.map(
    (service) => `
    <url>
        <loc>${siteUrl}/services/${service.slug}</loc>
        <lastmod>${service._updatedAt}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>`
  ).join("")}
    ${locations.map(
    (location) => `
    <url>
        <loc>${siteUrl}/locations/${location.slug}</loc>
        <lastmod>${location._updatedAt}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>`
  ).join("")}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

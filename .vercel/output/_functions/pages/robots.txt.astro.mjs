export { renderers } from '../renderers.mjs';

async function GET() {
  const sitemapUrl = new URL("sitemap.xml", "https://erofwhiterock.com").href;
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
    `.trim();
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

export async function GET() {
    const sitemapUrl = new URL("sitemap.xml", import.meta.env.SITE || "https://erwhiterock.com").href;

    // Content: Allow all, point to sitemap
    const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
    `.trim();

    return new Response(robotsTxt, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}

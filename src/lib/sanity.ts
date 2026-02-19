import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'hdx7hgqq',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-02-03',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source).auto('format').fit('max');
}

// GROQ Queries
const LANDING_PAGE_PROJECTION = `{
    ...,
    content[] {
        ...,
        _type == 'servicesSection' => {
            ...,
            services[]->
        },
        _type == 'physiciansSection' => {
            ...,
            physicians[]->
        },
        _type == 'testimonialsSection' => {
            ...,
            testimonials[]->
        },
        _type == 'faqSection' => {
            ...,
            faqs[]->
        }
    }
}`;

const LANDING_PAGE_QUERY = `*[_type == "landingPage" && (slug.current == "home" || !defined(slug.current))][0] ${LANDING_PAGE_PROJECTION}`;

const LANDING_PAGE_BY_SLUG_QUERY = `*[_type == "landingPage" && slug.current == $slug][0] ${LANDING_PAGE_PROJECTION}`;

const SETTINGS_QUERY = `*[_type == "settings"][0] {
    siteName,
    tagline,
    logo,
    footerLogo,
    contactPhone,
    address,
    email,
    googleMapsUrl,
    socialLinks,
    headerLinks[] { label, url, isActive },
    footerDescription,
    footerDisclaimer,
    googleAnalyticsId,
    footerColumns[] { title, links[] { label, url, isActive } },
    showStickyCTA,
    stickyCallText,
    stickyDirectionsText,
    globalSchema
}`;

export async function getLandingPage() {
    return await client.fetch(LANDING_PAGE_QUERY);
}

export async function getLandingPageBySlug(slug: string) {
    return await client.fetch(LANDING_PAGE_BY_SLUG_QUERY, { slug });
}

export async function getSettings() {
    return await client.fetch(SETTINGS_QUERY);
}

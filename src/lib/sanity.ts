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
    return builder.image(source);
}

// GROQ Queries
const LANDING_PAGE_QUERY = `*[_type == "landingPage"][0] {
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

const SETTINGS_QUERY = `*[_type == "settings"][0]`;

export async function getLandingPage() {
    return await client.fetch(LANDING_PAGE_QUERY);
}

export async function getSettings() {
    return await client.fetch(SETTINGS_QUERY);
}

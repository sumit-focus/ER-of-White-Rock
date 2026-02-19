export default {
    name: 'aboutPage',
    title: 'About Us Page',
    type: 'document',
    fields: [
        {
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                { name: 'metaTitle', type: 'string', title: 'Meta Title' },
                { name: 'metaDescription', type: 'text', title: 'Meta Description' },
            ]
        },
        {
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'missionStatement', type: 'text', title: 'Mission Statement' },
            ]
        },
        {
            name: 'ourStory',
            title: 'Our Story',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'content', type: 'array', of: [{ type: 'block' }], title: 'Content' }
            ]
        },
        {
            name: 'whyChooseUs',
            title: 'Why Choose Us',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                {
                    name: 'differentiators',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string' },
                            { name: 'description', type: 'text' },
                            { name: 'icon', type: 'string' }
                        ]
                    }]
                }
            ]
        },
        {
            name: 'facility',
            title: 'Our Facility',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'description', type: 'text', title: 'Description' },
                {
                    name: 'photos',
                    type: 'array',
                    of: [{ type: 'image', options: { hotspot: true } }]
                }
            ]
        },
        {
            name: 'accreditations',
            title: 'Accreditations',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                {
                    name: 'logos',
                    type: 'array',
                    of: [{ type: 'image', options: { hotspot: true } }]
                }
            ]
        },
        {
            name: 'cta',
            title: 'Final CTA',
            type: 'object',
            fields: [
                { name: 'title', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'buttonText', type: 'string' },
                { name: 'buttonLink', type: 'string' }
            ]
        }
    ]
}

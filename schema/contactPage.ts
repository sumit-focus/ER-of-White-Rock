export default {
    name: 'contactPage',
    title: 'Contact Us Page',
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
                { name: 'emergencyDisclaimer', type: 'string', title: 'Emergency Disclaimer' },
            ]
        },
        {
            name: 'contactMethods',
            title: 'Contact Methods',
            type: 'object',
            fields: [
                {
                    name: 'phone',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string' },
                        { name: 'number', type: 'string' },
                        { name: 'icon', type: 'string' }
                    ]
                },
                {
                    name: 'address',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string' },
                        { name: 'line1', type: 'string' },
                        { name: 'line2', type: 'string' },
                        { name: 'mapLink', type: 'string' },
                        { name: 'icon', type: 'string' }
                    ]
                },
                {
                    name: 'hours',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string' },
                        { name: 'description', type: 'string' },
                        { name: 'icon', type: 'string' }
                    ]
                }
            ]
        },
        {
            name: 'map',
            title: 'Map',
            type: 'object',
            fields: [
                { name: 'embedCode', type: 'text', title: 'Google Maps Embed Code' },
                { name: 'directionsTitle', type: 'string', title: 'Directions Title' },
                { name: 'directionsContent', type: 'array', of: [{ type: 'block' }], title: 'Directions Content' }
            ]
        },
        {
            name: 'whatToBring',
            title: 'What to Bring',
            type: 'object',
            fields: [
                { name: 'title', type: 'string' },
                { name: 'checklist', type: 'array', of: [{ type: 'string' }] }
            ]
        },
        {
            name: 'faq',
            title: 'FAQ',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string' },
                        { name: 'answer', type: 'text' }
                    ]
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

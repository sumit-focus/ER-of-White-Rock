export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'object',
    fields: [
        {
            name: 'headline',
            title: 'Headline Prefix',
            type: 'string',
            description: 'e.g., "24/7 Emergency Room in"',
        },
        {
            name: 'headlineHighlight',
            title: 'Headline Highlight',
            type: 'string',
            description: 'e.g., "White Rock, Dallas"',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
        },
        {
            name: 'backgroundImage',
            title: 'Background Image',
            description: 'Recommended dimensions: 1920x1080px',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'ctaText',
            title: 'CTA Text',
            type: 'string',
        },
        {
            name: 'ctaLink',
            title: 'CTA Link',
            type: 'string',
        },
    ],
}

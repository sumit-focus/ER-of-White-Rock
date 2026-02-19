export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Emergency Care', value: 'Emergency Care' },
                    { title: 'Pediatric Care', value: 'Pediatric Care' },
                    { title: 'Trauma & Injury', value: 'Trauma & Injury' },
                    { title: 'Diagnostics', value: 'Diagnostics' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            validation: (Rule: any) => Rule.min(50).max(160)
        },
        {
            name: 'medicalReviewer',
            title: 'Medical Reviewer',
            type: 'reference',
            to: [{ type: 'physician' }],
            description: 'Link to a physician for E-E-A-T (Expertise, Authoritativeness, Trustworthiness).'
        },
        {
            name: 'description',
            title: 'Short Description',
            type: 'text',
            description: 'Used for cards and previews.'
        },
        {
            name: 'icon',
            title: 'Icon (Emoji or SVG string)',
            type: 'string',
        },
        {
            name: 'hero',
            title: 'Hero Section',
            type: 'hero', // Using the defined hero type
        },
        {
            name: 'content',
            title: 'Page Content',
            type: 'array',
            of: [
                { type: 'whenToCome' },
                { type: 'whyChooseSection' },
                { type: 'processSection' },
                { type: 'faqSection' },
                { type: 'richTextSection' },
                { type: 'stickyCTA' },
                { type: 'insuranceBar' },
                // SEO Overhaul sections
                { type: 'symptomCheckerSection' },
                { type: 'conditionsTreatedSection' },
                { type: 'diagnosticSection' },
                { type: 'treatmentApproachSection' },
                { type: 'relatedServicesSection' },
                { type: 'mapSection' },
                // Fallback / Generic sections
                { type: 'ctaSection' },
                { type: 'trustBadges' },
                { type: 'testimonialsSection' },
            ]
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
        },
    ],
}

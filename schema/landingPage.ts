export default {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Page Sections',
            type: 'array',
            of: [
                { type: 'hero' },
                { type: 'trustBadges' },
                { type: 'insuranceBar' },
                { type: 'aboutSection' },
                { type: 'physiciansSection' },
                { type: 'whyChooseSection' },
                { type: 'servicesSection' },
                { type: 'comparisonTable' },
                { type: 'whenToCome' },
                { type: 'processSection' },
                { type: 'testimonialsSection' },
                { type: 'communitySection' },
                { type: 'faqSection' },
                { type: 'ctaSection' },
            ]
        }
    ]
}

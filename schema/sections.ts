export const trustBadges = {
    name: 'trustBadges',
    title: 'Trust Badges',
    type: 'object',
    fields: [
        {
            name: 'badges',
            title: 'Badges',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Badge Title' },
                    {
                        name: 'icon',
                        type: 'image',
                        title: 'Icon/Logo',
                        description: 'Recommended: 200x200px or SVG'
                    }
                ]
            }]
        }
    ]
}

export const insuranceBar = {
    name: 'insuranceBar',
    title: 'Insurance/Payment Bar',
    type: 'object',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            initialValue: 'We accept most major insurances'
        },
        {
            name: 'logos',
            title: 'Insurance Logos',
            type: 'array',
            of: [{
                type: 'image',
                description: 'Recommended height: 60px'
            }]
        }
    ]
}

export const aboutSection = {
    name: 'aboutSection',
    title: 'About Section',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            description: '200 words max with keyword density'
        },
        {
            name: 'image',
            title: 'Side Image',
            type: 'image',
            description: 'Recommended: 800x600px',
            options: { hotspot: true }
        },
        {
            name: 'type',
            title: 'Section Type',
            type: 'string',
            options: {
                list: [
                    { title: 'General About', value: 'general' },
                    { title: 'Why We Opened', value: 'whyOpened' },
                    { title: 'Our Commitment', value: 'commitment' }
                ]
            }
        }
    ]
}

export const physiciansSection = {
    name: 'physiciansSection',
    title: 'Physicians Grid',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Section Title' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' },
        {
            name: 'physicians',
            title: 'Physicians',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'physician' }] }]
        }
    ]
}

export const servicesSection = {
    name: 'servicesSection',
    title: 'Services Grid',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Section Title' },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'service' }] }]
        }
    ]
}

export const comparisonTable = {
    name: 'comparisonTable',
    title: 'ER vs Urgent Care Table',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        // We can make this dynamic or hardcoded logic with a simpler toggle
        {
            name: 'erFeatures',
            title: 'ER Features',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'urgentCareFeatures',
            title: 'Urgent Care Features',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}

export const whenToCome = {
    name: 'whenToCome',
    title: 'When to Come Grid',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        {
            name: 'conditions',
            title: 'Conditions',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'condition', type: 'string', title: 'Condition' },
                    { name: 'icon', type: 'string', title: 'Icon (Emoji)' }
                ]
            }]
        }
    ]
}

export const processSection = {
    name: 'processSection',
    title: 'Process / What to Expect',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        {
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Step Title' },
                    { name: 'description', type: 'text', title: 'Description' },
                    { name: 'icon', type: 'string', title: 'Icon (Emoji or SVG)' }
                ]
            }]
        }
    ]
}

export const testimonialsSection = {
    name: 'testimonialsSection',
    title: 'Testimonials',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        {
            name: 'testimonials',
            title: 'Selected Testimonials',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'testimonial' }] }]
        }
    ]
}

export const communitySection = {
    name: 'communitySection',
    title: 'Community Section',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'neighborhoods', type: 'array', of: [{ type: 'string' }], title: 'Neighborhoods Served' },
        {
            name: 'mapImage',
            type: 'image',
            title: 'Map Image',
            description: 'Recommended: 800x600px',
        }
    ]
}

export const faqSection = {
    name: 'faqSection',
    title: 'FAQ Section',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        {
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'faq' }] }]
        }
    ]
}

export const whyChooseSection = {
    name: 'whyChooseSection',
    title: 'Why Choose Us',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'text', title: 'Subtitle' },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'text', title: 'Description' },
                    { name: 'icon', type: 'string', title: 'Icon (Material Symbol)' }
                ]
            }]
        }
    ]
}

export const ctaSection = {
    name: 'ctaSection',
    title: 'CTA Section',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'text', type: 'text', title: 'Text' },
        { name: 'buttonText', type: 'string', title: 'Button Text' },
        { name: 'buttonLink', type: 'string', title: 'Button Link' }
    ]
}

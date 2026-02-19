export default {
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    groups: [
        { name: 'brand', title: 'Brand' },
        { name: 'contact', title: 'Contact Info' },
        { name: 'navigation', title: 'Navigation' },
        { name: 'footer', title: 'Footer' },
        { name: 'stickyCta', title: 'Sticky CTA' },
        { name: 'seo', title: 'SEO / Schema' },
    ],
    fields: [
        // ── Brand ──
        {
            name: 'siteName',
            title: 'Site / Brand Name',
            type: 'string',
            group: 'brand',
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            group: 'brand',
            initialValue: 'Emergency Care',
        },
        {
            name: 'logo',
            title: 'Header Logo',
            type: 'image',
            options: { hotspot: true },
            group: 'brand',
        },
        {
            name: 'footerLogo',
            title: 'Footer Logo (Dark Mode)',
            type: 'image',
            options: { hotspot: true },
            group: 'brand',
        },

        // ── Contact ──
        {
            name: 'contactPhone',
            title: 'Contact Phone',
            type: 'string',
            group: 'contact',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            group: 'contact',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            group: 'contact',
        },
        {
            name: 'googleMapsUrl',
            title: 'Google Maps URL (Directions Link)',
            type: 'url',
            group: 'contact',
            description: 'Used for "Get Directions" links across the site',
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', type: 'string', title: 'Platform (e.g. Facebook)' },
                        { name: 'url', type: 'url', title: 'URL' }
                    ],
                    preview: {
                        select: { title: 'platform', subtitle: 'url' }
                    }
                }
            ],
            group: 'contact',
            description: 'Links to social profiles. Used for Google "SameAs" schema.'
        },

        // ── Header Navigation ──
        {
            name: 'headerLinks',
            title: 'Header Navigation Links',
            type: 'array',
            of: [{ type: 'menuLink' }],
            group: 'navigation',
            description: 'Links shown in the top navigation bar. Toggle individual links on/off.',
        },

        // ── Footer ──
        {
            name: 'footerDescription',
            title: 'Footer Description',
            type: 'text',
            rows: 3,
            group: 'footer',
            description: 'Tagline text below the logo in the footer.',
        },
        {
            name: 'footerDisclaimer',
            title: 'Footer Disclaimer',
            type: 'text',
            rows: 3,
            group: 'footer',
            description: 'Medical disclaimer text shown at the bottom of the footer.',
            initialValue: 'The information on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. In case of a medical emergency, call 911 immediately.',
        },
        // ── Analytics ──
        {
            name: 'googleAnalyticsId',
            title: 'Google Analytics ID (G-XXXXXXXXXX)',
            type: 'string',
            group: 'seo',
            description: 'Your GA4 Measurement ID.',
        },
        {
            name: 'footerColumns',
            title: 'Footer Link Columns',
            type: 'array',
            of: [{ type: 'footerColumn' }],
            group: 'footer',
            description: 'Columns of links shown in the footer. Toggle individual links on/off.',
        },

        // ── Sticky CTA ──
        {
            name: 'showStickyCTA',
            title: 'Show Sticky CTA (Mobile)',
            type: 'boolean',
            initialValue: true,
            group: 'stickyCta',
        },
        {
            name: 'stickyCallText',
            title: 'Call Button Text',
            type: 'string',
            initialValue: 'Call Now',
            group: 'stickyCta',
        },
        {
            name: 'stickyDirectionsText',
            title: 'Directions Button Text',
            type: 'string',
            initialValue: 'Get Directions',
            group: 'stickyCta',
        },

        // ── SEO ──
        {
            name: 'globalSchema',
            title: 'Global JSON-LD Schema',
            type: 'text',
            rows: 10,
            group: 'seo',
            description: 'Global structured data (JSON-LD) injected on every page. Must be valid JSON.',
        },
    ],
}

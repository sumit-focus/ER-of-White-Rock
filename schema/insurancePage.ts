export default {
    name: 'insurancePage',
    title: 'Insurance & Billing Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
        },
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
                { name: 'subtitle', type: 'text', title: 'Subtitle' },
            ]
        },
        {
            name: 'facilityNotice',
            title: 'Facility Notice (HB 2041)',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'feeMasterPdf',
            title: 'Professional Fee Master (PDF)',
            type: 'file',
            options: { accept: '.pdf' }
        },
        {
            name: 'acceptedInsurance',
            title: 'Accepted Insurance',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'providers', type: 'array', of: [{ type: 'string' }], title: 'Provider List' }
            ]
        },
        {
            name: 'governmentInsurance',
            title: 'Government Insurance Notice',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'content', type: 'array', of: [{ type: 'block' }], title: 'Content' }
            ]
        },
        {
            name: 'exclusiveDiscounts',
            title: 'Exclusive Discounts',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'discounts', type: 'array', of: [{ type: 'string' }], title: 'Discount List' },
                { name: 'note', type: 'string', title: 'Note' }
            ]
        },
        {
            name: 'balanceBilling',
            title: 'No Balance Billing',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'content', type: 'array', of: [{ type: 'block' }], title: 'Content' }
            ]
        },
        {
            name: 'contactInfo',
            title: 'Verifying Insurance (Contact)',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'description', type: 'text', title: 'Description' },
                { name: 'phone', type: 'string', title: 'Phone' },
                { name: 'email', type: 'string', title: 'Email' },
                { name: 'footerText', type: 'text', title: 'Footer Text' }
            ]
        }
    ]
}

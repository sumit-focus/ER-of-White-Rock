export default {
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'footerLogo',
            title: 'Footer Logo (Dark Mode)',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'contactPhone',
            title: 'Contact Phone',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
    ],
}

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
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'icon',
            title: 'Icon (Emoji or SVG string)',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
        },
    ],
}

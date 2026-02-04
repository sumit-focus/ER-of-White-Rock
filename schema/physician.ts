export default {
    name: 'physician',
    title: 'Physician',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Bio (200 words max)',
            type: 'text',
        },
        {
            name: 'headshot',
            title: 'Headshot',
            description: 'Recommended dimensions: 400x400px',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'credentials',
            title: 'Credentials',
            type: 'string',
        },
    ],
}

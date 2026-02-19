export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        },
        {
            name: 'reviewer',
            title: 'Medical Reviewer',
            type: 'reference',
            to: { type: 'physician' },
            description: 'The physician who reviewed this article for medical accuracy (E-E-A-T).',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            description: 'Short summary for the blog listing page.'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Numbered', value: 'number' }],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean'
                                    },
                                    {
                                        title: 'Link Attribute (Rel)',
                                        name: 'rel',
                                        type: 'string',
                                        options: {
                                            list: [
                                                { title: 'None', value: '' },
                                                { title: 'Nofollow (SEO)', value: 'nofollow' },
                                                { title: 'Sponsored', value: 'sponsored' },
                                            ]
                                        }
                                    }
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                },
            ],
        },
        {
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                    description: 'Overrides the main title for SEO.'
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3
                },
                {
                    name: 'canonicalUrl',
                    title: 'Canonical URL',
                    type: 'url',
                    description: 'Leave empty to use the default URL.'
                },
                {
                    name: 'noIndex',
                    title: 'No Index',
                    type: 'boolean',
                    description: 'Hide this post from search engines.',
                    initialValue: false
                }
            ]
        },
        {
            name: 'relatedPosts',
            title: 'Related Posts',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'post' } }],
            description: 'Manually select related articles to keep users engaged.'
        }
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection: any) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}

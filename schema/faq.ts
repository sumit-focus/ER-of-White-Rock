export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'text',
        },
        {
            name: 'isLocal',
            title: 'Is Location Specific?',
            description: 'Check this if the question is specific to White Rock/Dallas location.',
            type: 'boolean',
        },
    ],
}

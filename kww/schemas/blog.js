export default {
    name : 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name:'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 90,
            }
        },
        {
            name : 'content',
            title: 'Content',
            type: 'file'
        },
        {
            name: 'reads',
            title: 'Reads',
            type: 'number',
            readOnly: true,
        }
    ],
    initialValue:{
        reads: 0
    }
}
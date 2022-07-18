export default {
    title: 'Item',
    name: 'item',
    type: 'document',
    fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string'
        },
        {
            title: 'Category',
            name: 'category',
            type: 'string'
        },
        {
          title: 'Image',
          name: 'image',
          type: 'array',
          of: [{type: 'image'}]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
        {
            title: 'Discount',
            name: 'discount',
            type: 'number',
        
        }
      ],
      initialValue: {
        discount: 0
      }
    
}
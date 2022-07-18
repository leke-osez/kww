export default {
    name: 'wavecap',
    title: 'wavecap',
    type: 'reference',
    to: [{type: 'item'}],
    options: {
        filter: 'category == $category',
        filterParams: {category: 'wavecap'}
      }
    
}
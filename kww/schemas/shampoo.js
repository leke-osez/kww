export default {
    name: 'shampoo',
    title: 'Shampoo',
    type: 'reference',
    to: [{type: 'item'}],
    options: {
        filter: 'category == $category',
        filterParams: {category: 'brush'}
      }
    
}
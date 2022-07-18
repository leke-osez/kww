export default {
    name: 'creamOil',
    title: 'Cream and Oil',
    type: 'reference',
    to: [{type: 'item'}],
    options: {
        filter: 'category == $category',
        filterParams: {category: 'creamOil'}
      }
    
}
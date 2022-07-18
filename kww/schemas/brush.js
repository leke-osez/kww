
export default {
  name: "brush",
  title: "Brush",
  type: "object",
  fields: [
      {
        name: 'item',
        title: 'item',
        type: 'reference',
        weak: true,
        to: [{ type: "item" }],

    }
  ]
};

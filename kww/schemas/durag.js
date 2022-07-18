export default {
  name: "durag",
  title: "Durag",
  type: "document",
  fields: [
    {
      name: "duragName",
      title: "Durag Name",
      type: 'reference',
      to: [{ type: "item" }],
      options: {
        filter: "category == $category",
        filterParams: { category: "durag" },
      },
    },
  ],
};

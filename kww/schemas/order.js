export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customer_name",
      title: "Customer Name",
      type: "string",
      readOnly: true,
    },
    {
      name: "reference",
      title: "Reference",
      type: "string",
      readOnly: true,
    },
    {
      title: "Ordered Items",
      name: "ordered_items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Product Name",
              name: "product_name",
              type: "string",
              readOnly: true,
            },
            {
              title: "More options",
              name: "more",
              type: "string",
              initialValue: "",
              readOnly: true,
            },
            {
              title: "Original Price",
              name: "original_price",
              type: "number",
              initialValue: 0,
              readOnly: true,
            },
            {
              title: "Price with Discount",
              name: "price_after_discount",
              type: "number",
              initialValue: 0,
              readOnly: true,
            },
            {
              title: "Discount",
              name: "discount",
              type: "number",
              readOnly: true,
            },

            {
              title: "Quantity",
              name: "quantity",
              type: "number",
              readOnly: true,
            },
          ],
        },
      ],
    },
    {
      name: "total_price",
      title: "Total Price",
      type: "number",
      readOnly: true,
    },
    {
      name: "total_quantity",
      title: "Total Quantity",
      type: "number",
      readOnly: true,
    },

    {
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      readOnly: true,
    },
    {
      name: "date_ordered",
      title: "Date Ordered",
      type: "datetime",
      readOnly: true,
    },
    {
      name: "customer_code",
      title: "Customer code",
      type: "string",
      readOnly: true,
    },
    { name: "state", title: "State", type: "string", readOnly: true },
    { name: "address", title: "Address", type: "string", readOnly: true },

    {
      name: "isDelivered",
      title: "Is Delivered",
      type: "boolean",
    },
  ],
};

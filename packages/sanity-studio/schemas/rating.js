export default {
  name: 'rating',
  title: 'Rating',
  type: 'document',
  fields: [
    {
      name: 'value',
      title: 'Value',
      type: 'string',
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: { type: 'user' },
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: { type: 'product' },
    },
  ],
};

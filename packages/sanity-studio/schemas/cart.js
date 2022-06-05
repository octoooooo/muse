export default {
  name: 'cart',
  title: 'Cart',
  type: 'document',
  fields: [
    {
      name: 'cartID',
      title: 'Cart ID',
      type: 'string',
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: { type: 'user' },
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
    },
  ],
};

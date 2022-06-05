export default {
  name: 'wishlist',
  title: 'Wishlist',
  type: 'document',
  fields: [
    {
      name: 'wishlistID',
      title: 'Wishlist ID',
      type: 'string',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: { type: 'user' },
    },
  ],
};

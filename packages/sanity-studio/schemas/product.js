export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productID',
      title: 'Product ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'availableQty',
      title: 'Available Qty',
      type: 'number',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: { type: 'brand' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'ratings',
      title: 'Ratings',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'rating' } }],
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'review' } }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
  ],
};

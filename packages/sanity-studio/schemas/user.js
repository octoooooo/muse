export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
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
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'buildingNumber', title: 'Building Number', type: 'string' },
        { name: 'street', title: 'Street', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
        { name: 'zipCode', title: 'Zip Code', type: 'string' },
      ],
    },
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'order' } }],
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'review' } }],
    },
    {
      name: 'ratings',
      title: 'Ratings',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'rating' } }],
    },
  ],
};

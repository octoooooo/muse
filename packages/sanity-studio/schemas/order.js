export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields:  [
    {
      name: 'orderID',
      title: 'Order ID',
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
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Ordered', value: 'ordered' },
          { title: 'Dispatched', value: 'dispatched' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ]
      },
    },
  ],
};

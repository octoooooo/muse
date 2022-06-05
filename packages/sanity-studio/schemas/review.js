export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'reviewID',
      title: 'Review ID',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: { type: 'user' },
    },
  ],
};

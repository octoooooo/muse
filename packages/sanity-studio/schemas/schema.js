import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import brand from './brand';
import cart from './cart';
import category from './category';
import order from './order';
import product from './product';
import rating from './rating';
import review from './review';
import tag from './tag';
import user from './user';
import wishlist from './wishlist';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    brand,
    cart,
    category,
    order,
    product,
    rating,
    review,
    tag,
    user,
    wishlist,
  ]),
});

import Cart from '../models/Cart';

import {
  CART_ADD_PRODUCT,
  CART_UPDATE_PRODUCT,
  CART_DELETE_PRODUCT,
  CART_INITIAL_STATE
} from './constants';

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch(action.type) {
    case CART_ADD_PRODUCT:
      return Cart.addProduct(action.payload);
    case CART_UPDATE_PRODUCT:
      return Cart.updateProduct(action.payload);
    case CART_DELETE_PRODUCT:
      return Cart.deleteProduct(action.payload);
    default:
      return state;
  }
}
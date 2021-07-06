import Cart from '../models/Cart';

export const CART_ADD_PRODUCT = 'ADD_PRODUCT';
export const CART_UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const CART_DELETE_PRODUCT = 'DELETE_PRODUCT';

export const CART_INITIAL_STATE = {
  products: Cart.products,
  total: Cart.total
};
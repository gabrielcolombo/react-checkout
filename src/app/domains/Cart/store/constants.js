import Cart from '../models/Cart';

export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_UPDATE_PRODUCT = 'CART_UPDATE_PRODUCT';
export const CART_DELETE_PRODUCT = 'CART_DELETE_PRODUCT';
export const CART_CLEAR_PRODUCTS = 'CART_CLEAR_PRODUCTS';

export const CART_INITIAL_STATE = {
  products: Cart.products,
  total: Cart.total
};
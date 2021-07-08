import {
  CART_ADD_PRODUCT,
  CART_UPDATE_PRODUCT,
  CART_DELETE_PRODUCT,
  CART_CLEAR_PRODUCTS,
} from './constants';

export const addProductToCart = product => ({
  type: CART_ADD_PRODUCT,
  payload: product
});

export const updateCartProduct = product => ({
  type: CART_UPDATE_PRODUCT,
  payload: product,
});

export const deleteCartProduct = id => ({
  type: CART_DELETE_PRODUCT,
  payload: id,
});

export const clearCartProducts = () => ({
  type: CART_CLEAR_PRODUCTS,
});

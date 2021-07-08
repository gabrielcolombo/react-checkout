import React from 'react';
import { store } from './../../../store';
import {
  addProductToCart,
  updateCartProduct,
  deleteCartProduct,
  clearCartProducts,
} from '../store/actions';

const useCart = (props) => {
  return {
    getState: () => store.getState().cart,
    add: (product) => store.dispatch(addProductToCart(product)),
    update: (product) => store.dispatch(updateCartProduct(product)),
    delete: (product) => store.dispatch(deleteCartProduct(product)),
    clear: (product) => store.dispatch(clearCartProducts()),
  }  
}

export default useCart;
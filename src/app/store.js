import { createStore, combineReducers } from 'redux';
import { cartReducer } from './domains/Cart/store/reducer';
import { checkoutReducer } from './domains/Checkout/store/reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
});

export const store = createStore(rootReducer);

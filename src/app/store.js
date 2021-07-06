import { createStore, combineReducers } from 'redux';
import { cartReducer } from './domains/Cart/store/reducer';

const rootReducer = combineReducers({
  cart: cartReducer
});

export const store = createStore(rootReducer);

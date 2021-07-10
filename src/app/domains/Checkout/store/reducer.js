import {
  CHECKOUT_UPDATE_STAGE,
  CHECKOUT_INITIAL_STATE
} from './constants';

export const checkoutReducer = (state = CHECKOUT_INITIAL_STATE, action) => {
  switch(action.type) {
    case CHECKOUT_UPDATE_STAGE:
      return { stage: action.payload };
    default:
      return state;
  }
}
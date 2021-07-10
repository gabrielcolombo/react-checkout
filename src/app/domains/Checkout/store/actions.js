import {
  CHECKOUT_UPDATE_STAGE,
} from './constants';

export const updateCheckoutStage = stage => ({
  type: CHECKOUT_UPDATE_STAGE,
  payload: stage
});
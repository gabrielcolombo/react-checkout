import { CheckoutStagesEnum } from '../enums';

export const CHECKOUT_UPDATE_STAGE = 'CHECKOUT_UPDATE_STAGE';

export const CHECKOUT_INITIAL_STATE = {
  stage: CheckoutStagesEnum.cart
};
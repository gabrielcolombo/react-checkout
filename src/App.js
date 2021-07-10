import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  HomePage,
  NotFoundPage,
  CheckoutPage,
} from './app/pages';

import {
  CHECKOUT_PAGE_ROUTE
} from './app/domains/Product/constants/routes';

import { CheckoutStagesEnum } from './app/domains/Checkout/enums';
import { useCheckout, usePaymentTransaction  } from './app/domains/Checkout/hooks';

const App = () => {
  const Checkout = useCheckout();
  const PaymentTransaction = usePaymentTransaction();

  useEffect(() => {
    PaymentTransaction.initPaymentStatusHandler({
      onSuccess: () => {
        Checkout.updateStage(CheckoutStagesEnum.receipt);
      },
      onFailure: () => Checkout.updateStage(CheckoutStagesEnum.failure),
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path={CHECKOUT_PAGE_ROUTE}>
          <CheckoutPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
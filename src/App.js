import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {
  HomePage,
  NotFoundPage,
  CheckoutPage,
} from './app/pages';

import {
  CHECKOUT_PAGE_ROUTE
} from './app/domains/Product/constants/routes';

const App = () => {
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
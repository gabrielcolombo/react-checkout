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
  ProductDetailsPage,
} from './app/pages';

import {
  PRODUCT_DETAILS_PAGE_ROUTE
} from './app/domains/Product/constants/routes';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={PRODUCT_DETAILS_PAGE_ROUTE}>
            <ProductDetailsPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
import React, { useState, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import useCart from '../../domains/Cart/hooks/useCart';

import { MainLayout } from '../../layouts';
import {
  Card,
  Title
} from '../../components';

import {
  CheckoutDesktop,
  CheckoutMobile,
} from '../../domains/Cart/components/Checkout';

const CheckoutPage = () => {
  const Cart = useCart();
  const history = useHistory();
  
  const [{ products, total }, setState] = useState(Cart.getState());

  return (
    <MainLayout pageTitle="Checkout">
      <Row className="d-flex d-lg-none">
        <Col>
          <Title text="Checkout" />
        </Col>
      </Row>

      {!products.length
        ? <Row>
            <Col>
              <Card variant="muted">Your cart is empty</Card>
            </Col>
          </Row>
        : <Row className="mt-2 mt-lg-4">
            <Col className="d-flex d-lg-none">
              <CheckoutMobile
                product={products[0]}
                onProductRemove={() => history.push('/')}
              />
            </Col>

            <Col className="d-none d-lg-flex">
              <CheckoutDesktop
                product={products[0]}
                onProductRemove={() => history.push('/')}
              />
            </Col>
          </Row>
      }
    </MainLayout>
  )
}

export default CheckoutPage;
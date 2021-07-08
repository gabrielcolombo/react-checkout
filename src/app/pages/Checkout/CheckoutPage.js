import React, { useState, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import useCart from '../../domains/Cart/hooks/useCart';

import { MainLayout } from '../../layouts';
import {
  Card,
  Title
} from '../../components';

const CheckoutPage = () => {
  const Cart = useCart();
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
            <Col className="d-none d-lg-flex" xs="4">
              <img src={products[0].maxresURL} />
            </Col>

            <Col lg="8">
              <Card variant="muted">
                <Row>
                  <Col lg="6">
                    <Title
                      variant="h2"
                      text="Cart total"
                      className="d-none d-lg-block mb-2"
                    />

                    <div>
                      <Title variant="h2" text={products[0].description} />

                      <div className="text-muted">
                        <div>x {products[0].amount} {products[0].color} Size {products[0].size}</div>
                        <div>Item #{products[0].id}</div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 mt-lg-0">
                    <div>Delivery details</div>

                    <div className="text-muted">
                      <div>John Smith</div>
                      <div>Phone no: 01312428200</div>
                      <div>Address: Redwood City, 2000</div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
      }
    </MainLayout>
  )
}

export default CheckoutPage;
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import {
  Button,
  Card,
  Title,
} from '../../../../../components';

const CheckoutDesktop = ({ product }) => {
  return (
    <Row>
      <Col className="d-none d-lg-flex" xs="4">
        <img src={product.maxresURL} />
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
                <Title variant="h2" text={product.description} />

                <div className="text-muted">
                  <div>x {product.quantity} {product.color} Size {product.size}</div>
                  <div>Item #{product.id}</div>
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
  )
}

export default CheckoutDesktop;


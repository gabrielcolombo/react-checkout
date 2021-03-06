import React, { useState, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import {
  Button,
  Card,
  Title,
} from '../../../../components';

import { PaymentMethods } from '../PaymentMethods';

import {
  StyledPrice,
} from '../Checkout.styles';

const CheckoutDesktop = ({
  product,
  total,
  paymentMethod,
  onPaymentMethodChange,
  onProductRemove,
  onConfirm,
}) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <img src={product.maxresURL} style={{ width: '100%' }} />
        </Col>
        <Col lg="6">
          <Card variant="muted">
            <Row>
              <Col>
                <Title variant="h2">{product.description}</Title>
                
                <div className="text-muted mt-3">
                  <div>&times; {product.quantity} {product.color} Size {product.size}</div>
                  <div>Item #{product.id}</div>
                </div>
              </Col>
              <Col>
                <Title variant="h2">Delivery details</Title>

                <div className="text-muted mt-3">
                  <div>John Smith</div>
                  <div>Phone no: 01312428200</div>
                  <div>Address: Redwood City, 2000</div>
                </div>

                <Row className="mt-4 align-items-center">
                  <Col>
                    <div>Total cost</div>
                    <div className="text-muted">Delivery included</div>
                  </Col>

                  <Col>
                    <StyledPrice>${Number(total).toFixed(0)}</StyledPrice>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mt-4 mb-3">
              <Col>
                <h5 className="mb-3">Select your payment method</h5>

                <PaymentMethods
                  method={paymentMethod}
                  onChange={onPaymentMethodChange}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col lg={{ span: 3, offset: 9 }}>
          <Button
            text="Continue"
            variant="primary"
            block={true}
            onClick={() => onConfirm({
              currency: product.currency,
              amount: total,
            })}
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default CheckoutDesktop;


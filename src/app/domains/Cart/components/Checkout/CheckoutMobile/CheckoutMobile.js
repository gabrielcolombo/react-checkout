import React, { useState, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import {
  Button,
  Card,
  Title,
} from '../../../../../components';

import { PaymentMethods } from '../PaymentMethods';

import { StyledThumbnail } from './CheckoutMobile.styles';
import { StyledPrice } from '../Checkout.styles';

const CheckoutMobile = ({
  product,
  paymentMethod,
  onPaymentMethodChange,
  onProductRemove,
}) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Card variant="muted">
            <Row>
              <Col xs="4" sm="3">
                <StyledThumbnail image={product.maxresURL} />
              </Col>

              <Col xs="8" sm="9">
                <div className="d-flex align-items-center justify-content-between">
                  <Title variant="h2" text={product.description} />

                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    className="text-muted"
                    onClick={() => onProductRemove(product)}
                  />
                </div>

                <div>
                  <div className="text-muted">
                    <div>&times; {product.quantity} {product.color} Size {product.size}</div>
                    <div>Item #{product.id}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <div>Delivery details</div>

                  <div className="text-muted">
                    <div>John Smith</div>
                    <div>Phone no: 01312428200</div>
                    <div>Address: Redwood City, 2000</div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="mt-4 align-items-center">
              <Col>
                <div>Total cost</div>
                <div className="text-muted">Delivery included</div>
              </Col>

              <Col>
                <StyledPrice>${product.price * product.quantity}</StyledPrice>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 mb-3">
        <Col>
          <h5 className="mb-3">Payment method</h5>

          <Card variant="muted">
            <Row>
              <Col>
                <PaymentMethods
                  method={paymentMethod}
                  onChange={onPaymentMethodChange}
                />
              </Col>
            </Row>

          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            text="Continue"
            variant="primary"
            block={true}
            onClick={() => {}}
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default CheckoutMobile;


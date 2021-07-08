import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import {
  Button,
  Card,
  Title,
} from '../../../../../components';

import {
  StyledPrice,
  StyledThumbnail,
} from './CheckoutMobile.styles';

const CheckoutMobile = ({ product, onProductRemove }) => {
  return (
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
      {/* <Row>
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
      </Row> */}
    </Card>
  )
}

export default CheckoutMobile;


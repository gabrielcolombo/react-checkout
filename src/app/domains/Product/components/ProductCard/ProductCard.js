import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import {
  Button,
  Card,
  Title,
} from '../../../../components';

const ProductCard = ({ product, onAddToCart }) => {
  const [size, setSize] = useState(41);
  const [quantity, setQuantity] = useState(1);

  return (
    <Card
      cover={product.thumbnailURL}
      interactive={true}
    >
      <Row>
        <Col className="text-center">
          <Title text={product.description} />
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs="6">

        </Col>
        <Col xs="6">

        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <div className="text-center h5">
            <b>$ {product.price}</b>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            text="Add to cart"
            variant="primary"
            block={true}
            onClick={() => onAddToCart({
              ...product.toObj(),
              size,
              quantity,
            })}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default ProductCard;
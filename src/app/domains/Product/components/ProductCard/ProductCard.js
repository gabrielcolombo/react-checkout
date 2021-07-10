import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import {
  Button,
  Card,
  Select,
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

      <Row className="my-3">
        <Col xs="6">
          <Select
            label="Size"
            options={new Array(10).fill(null).map((item, index) => 35 + index)}
            value={size}
            inline={true}
            onChange={setSize}
          />
        </Col>
        <Col xs="6">
          <Select
            label="Quantity"
            options={new Array(10).fill(null).map((item, index) => 1 + index)}
            value={quantity}
            inline={true}
            onChange={setQuantity}
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-2">
        <Col className="text-center">
          <h4>$ {Number(product.price).toFixed(0)}</h4>
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
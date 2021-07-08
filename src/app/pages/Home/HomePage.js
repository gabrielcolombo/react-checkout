import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Spinner } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import useCart from '../../domains/Cart/hooks/useCart';
import { useProductsQuery } from '../../domains/Product/hooks';

import { MainLayout } from '../../layouts';
import {
  Button,
  Card,
  Title,
  Input
} from '../../components';

const HomePage = () => {
  const history = useHistory();
  const Cart = useCart();
  const [fetchProducts, { data, loading, error }] = useProductsQuery();
  
  const [searchQuery, setSearchQuery] = useState('');
  const findByDescription = (comparison) => ({ description }) => comparison !== ''
    ? description
        .toLowerCase()
        .includes(comparison.toLowerCase())
    : true;

  useEffect(() => {
    Cart.clear();
    fetchProducts();
  }, []);

  return (
    <MainLayout pageTitle="Sneakers">
      {loading
        ? <div className="p-4 d-flex flex-column align-items-center justify-content-center">
            <Spinner animation="border" variant="muted" />
            <small className="mt-3 text-muted">Loading products</small>
          </div>
        : (
          <Fragment>
            <Row className="mt-4 py-4">
              <Col>
                <Input
                  icon={faSearch}
                  placeholder="Search for your sneaker"
                  onChange={setSearchQuery}
                />
              </Col>
            </Row>

            <Row className="px-4 px-lg-0">
              {!data.length
                ? <span>No products</span>
                : data
                    .filter(findByDescription(searchQuery))
                    .map((product, index) => (
                      <Col sm="6" lg="4" className="mt-4 mb-4" key={`product-${index}`}>
                        <Card
                          variant="muted"
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
                                onClick={() => {
                                  Cart.add({
                                    ...product.toObj(),
                                    amount: 1,
                                    size: 41,
                                  });
                                  history.push('checkout');
                                }}
                              />
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                  ))
              }
            </Row>
          </Fragment>
        )
      }
    </MainLayout>
  )
}

export default HomePage;
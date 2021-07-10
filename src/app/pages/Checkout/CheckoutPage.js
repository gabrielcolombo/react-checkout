import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useCart } from '../../domains/Cart/hooks';
import { CheckoutStagesEnum, PaymentMethodsEnum } from '../../domains/Checkout/enums';
import { useCheckout, usePaymentTransaction } from '../../domains/Checkout/hooks';

import { MainLayout } from '../../layouts';
import {
  Card,
  Title
} from '../../components';

import {
  CheckoutDesktop,
  CheckoutMobile,
} from '../../domains/Checkout/components';

const CheckoutPage = () => {
  const Cart = useCart();
  const Checkout = useCheckout();
  const PaymentTransaction = usePaymentTransaction();
  const history = useHistory();

  const [paymentMethod, setPaymentMethod] = useState(PaymentMethodsEnum.onlineBanking);
  
  const { stage } = Checkout.getState();
  const { products, total } = Cart.getState();

  useEffect(() => Checkout.updateStage(CheckoutStagesEnum.paymentOptions), []);
  
  useEffect(() => {
    if (stage === 'RECEIPT') {
      alert('YEA')
    }
  }, [stage]);

  return (
    <MainLayout pageTitle="Checkout">
      <Row className="d-flex d-lg-none">
        <Col>
          <Title text="Checkout" />
        </Col>
      </Row>

      {!products.length
        ? <Row className="mt-4">
            <Col>
              <Card variant="muted">Your cart is empty</Card>
            </Col>
          </Row>
        : <Row className="mt-2 mt-lg-4">
            <Col className="d-block d-lg-none">
              <CheckoutMobile
                product={products[0]}
                total={total}
                onProductRemove={() => history.push('/')}
                paymentMethod={paymentMethod}
                onPaymentMethodChange={setPaymentMethod}
                onConfirm={PaymentTransaction.establish}
              />
            </Col>

            <Col className="d-none d-lg-block">
              <CheckoutDesktop
                product={products[0]}
                total={total}
                onProductRemove={() => history.push('/')}
                paymentMethod={paymentMethod}
                onPaymentMethodChange={setPaymentMethod}
                onConfirm={PaymentTransaction.establish}
              />
            </Col>
          </Row>
      }
    </MainLayout>
  )
}

export default CheckoutPage;
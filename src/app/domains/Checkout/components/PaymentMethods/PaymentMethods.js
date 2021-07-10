import React from 'react';

import { PaymentMethodsEnum } from '../../enums';
import { StyledUl, StyledLi, StyledDiv } from './PaymentMethods.styles';

const PaymentMethods = ({ method, onChange }) => {
  const { onlineBanking, card, applePay } = PaymentMethodsEnum;

  return (
    <StyledUl>
      <StyledLi
        selected={method === onlineBanking}
        onClick={() => onChange(onlineBanking)}
      >
        <StyledDiv badge="SAVE $10">
          Online Banking
        </StyledDiv>
      </StyledLi>

      <StyledLi
        selected={method === card}
        onClick={() => onChange(card)}
      >
        <StyledDiv>
          Card Payment
        </StyledDiv>
      </StyledLi>

      <StyledLi
        selected={method === applePay}
        onClick={() => onChange(applePay)}
      >
        <StyledDiv>
          Apple Pay
        </StyledDiv>
      </StyledLi>
    </StyledUl>
  )
}

export default PaymentMethods;
import React from 'react';

import { StyledCard } from './Card.styles';

const Card = ({
  variant = 'default',
  interactive,
  cover,
  children,
  ...props
}) => {
  return (
    <StyledCard variant={variant}>
      {cover && (
        <StyledCard.Img variant="top" src={cover} />
      )}

      <StyledCard.Body>
        {children}
      </StyledCard.Body>
    </StyledCard>
  )
};

export default Card;
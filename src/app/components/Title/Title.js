import React from 'react';
import { StyledDiv } from './Title.styles';

const Title =  ({
  variant = 'h1',
  text,
  children,
  ...props
}) => {
  return (
    <StyledDiv variant={variant} {...props}>
      {text || children}
    </StyledDiv>
  );
};

export default Title;
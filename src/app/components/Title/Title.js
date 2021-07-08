import React from 'react';
import { StyledDiv } from './Title.styles';

const Title =  ({
  variant = 'h1',
  text,
  children,
  ...props
}) => {
  return (
    <StyledDiv className={`title ${props.className}`} variant={variant} {...props}>
      {text || children}
    </StyledDiv>
  );
};

export default Title;
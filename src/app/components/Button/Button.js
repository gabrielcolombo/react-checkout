import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton } from './Button.styles';

const Button = ({
  variant = 'secondary',
  text,
  icon,
  onClick,
  disabled = false,
  round = false,
  block = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      round={round}
      block={block}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} />}

      <span>{text}</span>
    </StyledButton>
  )
};

export default Button;
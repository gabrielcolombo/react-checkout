import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledInputGroup, StyledInputIcon, StyledInput } from './Input.styles';

const Input = ({ icon, value, placeholder, onChange }) => {
  return (
    <StyledInputGroup>
      {icon && (
        <StyledInputIcon>
          {<FontAwesomeIcon icon={icon} />}
        </StyledInputIcon>
      )}

      <StyledInput
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => onChange(target.value)}
      />
    </StyledInputGroup>
  )
};

export default Input;
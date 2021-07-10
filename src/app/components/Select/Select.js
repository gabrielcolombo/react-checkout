import React from 'react';
import { StyledDiv, StyledSelect } from './Select.styles';

const Select = ({
  label = '',
  inline = false,
  options = [],
  value,
  onChange
}) => {
  return (
    <StyledDiv inline={inline}>
      {label && (
        <label className={`d-block ${inline ? 'mb-0 mr-3' : 'mb-3'}`}>
          {label}
        </label>
      )}

      <StyledSelect value={value} onChange={({ target }) => onChange(target.value)}>
        {options.map((option, index) => (
          <option value={option?.value || option} key={`option-${index}`}>
            {option?.label || option}
          </option>
        ))}
      </StyledSelect>
    </StyledDiv>
  )
};

export default Select;
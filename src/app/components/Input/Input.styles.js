import styled from 'styled-components';
import { InputGroup, Form } from 'react-bootstrap';

const sharedStyles = `
  background: none;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  border-radius: 0;
  color: #787878;
  font-size: .875rem;

  @media all and (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

export const StyledInputGroup = styled(InputGroup)``;

export const StyledInputIcon = styled(InputGroup.Text)`
  ${sharedStyles}

  padding: 10px 15px;

  @media all and (min-width: 992px) {
    padding: 15px 30px;
  }
`;

export const StyledInput = styled(Form.Control)`
  ${sharedStyles};

  padding: 10px 30px 10px 0;
  
  &::placeholder {
    font-weight: 300;
    text-align: center;
  }

  &:focus {
    border-color: #bdbdbd;
    box-shadow: none;
  }

  @media all and (min-width: 992px) {
    padding: 15px 30px 15px 0;
  }
`;
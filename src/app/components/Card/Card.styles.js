import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const VARIANTS = {
  default: '#fff',
  muted: '#f7f7f7'
}

export const StyledCard = styled(Card)`
  background: ${({ variant }) => VARIANTS[variant] || VARIANTS.default};
  border: none;
  box-shadow: 0 6px 16px rgba(0, 0, 0, .05);

  &:hover {
    cursor: ${({ interactive }) => interactive ? 'pointer' : 'auto'}
  }
`;
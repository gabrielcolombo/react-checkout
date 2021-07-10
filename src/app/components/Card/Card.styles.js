import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const VARIANTS = {
  default: {
    background: '#fff',
    boxShadow: '0 6px 16px rgba(0, 0, 0, .05)',
  },
  muted: {
    background: '#f7f7f7',
    boxShadow: 'none',
  }
}

export const StyledCard = styled(Card)`
  background: ${({ variant }) => (VARIANTS[variant] || VARIANTS.default).background};
  border: none;
  box-shadow: ${({ variant }) => (VARIANTS[variant] || VARIANTS.default).boxShadow};
  width: 100%;
  
  &:hover {
    cursor: ${({ interactive }) => interactive ? 'pointer' : 'auto'}
  }
`;
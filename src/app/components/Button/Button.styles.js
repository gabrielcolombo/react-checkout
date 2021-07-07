import styled from 'styled-components';

const VARIANTS = {
  primary: {
    background: '#6b8067',
    color: '#fff',
  },
  secondary: {
    background: '#e5e5e5',
    color: '#000'
  },
};

export const StyledButton = styled.button`
  background: ${({ variant }) => VARIANTS[variant].background};
  border: none;
  border-radius: ${({ round }) => round ? '14px' : '6px'};
  color: ${({ variant }) => VARIANTS[variant].color}
  display: ${({ block }) => block ? 'block' : 'inline-block'};
  padding: 6px;

  svg,
  span {
    margin: 0 6px;
  }
`;
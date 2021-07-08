import styled from 'styled-components';

const VARIANTS = {
  primary: {
    background: '#6b8067',
    color: '#fff',
    fontSize: '.875rem',
    fontWeight: 700,
    padding: '10px'
  },
  secondary: {
    background: '#e5e5e5',
    color: '#000',
    fontSize: '1rem',
    fontWeight: 400,
    padding: '6px'
  },
};

export const StyledButton = styled.button`
  background: ${({ variant }) => VARIANTS[variant].background};
  border: none;
  border-radius: ${({ round }) => round ? '14px' : '6px'};
  color: ${({ variant }) => VARIANTS[variant].color};
  display: inline-block;
  font-size: ${({ variant }) => VARIANTS[variant].fontSize};
  font-weight: ${({ variant }) => VARIANTS[variant].fontWeight};
  padding: ${({ variant }) => VARIANTS[variant].padding};
  width: ${({ block }) => block ? '100%' : 'auto'};
  white-space: nowrap;

  svg,
  span {
    margin: 0 6px;
  }
`;
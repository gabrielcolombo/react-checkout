import styled from 'styled-components';

const getVariantStyles = (variant) => {
  const sizes = {
    'h1': {
      mobile: `
        font-size: 1.5rem;
      `,
      desktop: `
        font-size: 1.625rem;
      `
    },
    'h2': {
      mobile: `
        font-size: 1.125rem;
      `,
      desktop: `
        font-size: 1.375rem;
      `
    },
  }

  return sizes[variant] || sizes['h1'];
}

export const StyledDiv = styled.div`
  color: #000;
  display: block;
  width: 100%;

  ${({ variant }) => getVariantStyles(variant).mobile};

  @media all and (min-width: 1024px) {
    ${({ variant }) => getVariantStyles(variant).desktop};
  }
`;
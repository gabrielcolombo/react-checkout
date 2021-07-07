import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #fff;

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }

  @media all and (min-width: 1024px) {
    background: #f6f6f6;
  }
`;
import styled from 'styled-components';

export const StyledThumbnail = styled.div`
  background: ${({ image }) => `url(${image})`} no-repeat center;
  background-size: cover;
  border-radius: 9px;
  height: auto;
  min-height: 92px;
  width: 100%;
`;

export const StyledPrice = styled.div`
  font-size: 2.5rem;
  text-align: right;
`;
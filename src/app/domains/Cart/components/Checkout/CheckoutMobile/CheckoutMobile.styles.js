import styled from 'styled-components';

export const StyledThumbnail = styled.div`
  background: ${({ image }) => `url(${image})`} no-repeat center;
  background-size: cover;
  border-radius: 9px;
  height: auto;
  min-height: 92px;
  width: 100%;
`;
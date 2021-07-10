import styled from 'styled-components';

export const StyledDiv = styled.div`
  align-items: center;
  color: #808080;
  display: flex;
  flex-direction: ${({ inline }) => inline ? 'row' : 'column'};
`;

export const StyledSelect = styled.select`
  border-color: #e8e8e8;
  border-radius: 15px;
  color: #808080;
  padding: 4px 8px;
  width: 100%;
  
  &:focus {
    border-color: #bdbdbd;
    box-shadow: none;
  }
`;
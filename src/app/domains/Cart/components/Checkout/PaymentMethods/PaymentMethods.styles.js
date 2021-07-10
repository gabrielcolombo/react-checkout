import styled from 'styled-components';

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  align-items: center;
  background: #fff;
  border: 2px solid;
  border-color: ${({ selected }) => selected ? '#63b55c' : 'transparent'};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 80px;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 10px 30px;
  position: relative;
  transition: border-color .15s ease-out;
  user-select: none;
  width: 100%;

  &:not(:last-child) {
    margin: 0 0 15px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ badge }) => badge && `
    &::after {
      background: #ffcc00;
      border-radius: 5px;
      content: '${badge}';
      display: inline-block;
      font-size: .625rem;
      margin: 5px 0 0;
      padding: 5px;
    }
  `}

  @media all and (min-width: 992px) {
    &::after {
      left: 15px;
      margin: 0;
      padding: 3px 15px;
      position: absolute;
      top: 0;
      transform: translateY(-50%);
    }
  }
`;
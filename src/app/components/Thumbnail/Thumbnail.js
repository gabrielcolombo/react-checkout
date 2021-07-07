import React from 'react';

import { StyledDiv } from './Thumbnail.styles';

const Thumbnail = ({ image }) => {
  return (
    <StyledDiv>
      <img src={image} alt="Current user's thumbnail"/>
    </StyledDiv>
  )
};

export default Thumbnail;
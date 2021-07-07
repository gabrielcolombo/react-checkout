import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Button } from '../Button';
import { Title } from '../Title';
import { Thumbnail } from '../Thumbnail';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { StyledHeader } from './Header.styles';

const Header = ({
  title,
  thumbnail,
}) => {
  const history = useHistory();
  const isHomePage = useRouteMatch({ path: '/', exact: true });

  return (
    <StyledHeader>
      <Container>
        {!isHomePage && (
          <Button
            text="Back"
            round={true}
            icon={faArrowLeft}
            onClick={history.goBack}
          />
        )}

        <Title text={title} />

        <Thumbnail image={thumbnail} />
      </Container>
    </StyledHeader>
  )
};

export default Header;
import React, { Fragment } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { Button } from '../Button';
import { Title } from '../Title';
import { Thumbnail } from '../Thumbnail';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { StyledHeader } from './Header.styles';

const Header = ({
  title,
  thumbnail,
  children,
  ...props
}) => {
  const history = useHistory();
  const isHomePage = useRouteMatch({ path: '/', exact: true });

  return (
    <StyledHeader {...props}>
      <Container>
        {children || (
          <Fragment>
            <Row className="align-items-center">
              <Col xs="4">
                {!isHomePage && (
                  <Button
                    text="Back"
                    round={true}
                    icon={faArrowLeft}
                    onClick={() => history.push('/')}
                  />
                )}
              </Col>
              <Col xs="4" className="text-center">
                <Title text={title} className="d-none d-lg-block"/>
              </Col>
              <Col xs="4" className="d-flex justify-content-end">
                <Thumbnail image={thumbnail} />
              </Col>
            </Row>
          </Fragment>
        )}
      </Container>
    </StyledHeader>
  )
};

export default Header;
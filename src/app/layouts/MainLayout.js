import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

import Avatar from '../../assets/images/Avatar.png';

import {
  Header
} from '../components';

const MainLayout = ({ pageTitle, children, ...props }) => {
  return (
    <Fragment>
      <Header
        title={pageTitle}
        thumbnail={Avatar}
      />
      
      <Container>
        {children}
      </Container>
    </Fragment>
  )
};

export default MainLayout;
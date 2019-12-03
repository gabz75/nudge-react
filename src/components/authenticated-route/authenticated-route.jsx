import React from 'react';
import { Redirect } from 'react-router-dom';

import AuthenticationContext from '../../contexts/authentication';

function UnauthenticatedRoute(props) {
  return (
    <AuthenticationContext.Consumer>
      {auth => (auth.jwt ? props.children : <Redirect push to="/login" />)}
    </AuthenticationContext.Consumer>
  );
}

export default UnauthenticatedRoute;

import React from 'react';
import { Redirect } from 'react-router-dom';

import AuthenticationContext from '../../contexts/authentication';

function ProtectedRoute(props) {
  return (
    <AuthenticationContext.Consumer>
      {auth => auth.jwt ? <Redirect push to="/dashboard" /> : props.children}
    </AuthenticationContext.Consumer>
  );
}

export default ProtectedRoute;

import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

function UnauthenticatedRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();

  return(
    <Route {...rest} render={(props) => (
      isAuthenticated()
        ? <Redirect to={{ pathname: '/dashboard', state: { from: props.location }}} />
        : <Component {...props} />
    )} />
  )
}

export default UnauthenticatedRoute;

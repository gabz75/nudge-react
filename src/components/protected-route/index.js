import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

function ProtectedRoute({ component: Component, ...rest }) {
  // hooks
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated()
          ? <Component {...props} />
          // eslint-disable-next-line react/prop-types
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;

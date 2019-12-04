import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

/* eslint-disable react/jsx-props-no-spreading */

function UnauthenticatedRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated()
          // eslint-disable-next-line react/prop-types
          ? <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
          : <Component {...props} />
      )}
    />
  );
}

UnauthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default UnauthenticatedRoute;

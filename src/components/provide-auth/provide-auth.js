import React from 'react';
import PropTypes from 'prop-types';

import authContext from '../../contexts/auth';
import { useProvideAuth } from '../../hooks/use-provide-auth';

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProvideAuth;

import React from 'react';

import authContext from '../../contexts/auth';
import { useProvideAuth } from '../../hooks/use-provide-auth';

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default ProvideAuth;

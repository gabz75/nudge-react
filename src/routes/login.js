import React from 'react';

import FormLogin from 'components/form-login';
import { useAuth } from 'hooks/use-auth';
import { ResponsiveCenteredLayout } from 'components/globals';

function Login() {
  const { login } = useAuth();

  return (
    <ResponsiveCenteredLayout alignItems="center">
      <FormLogin onSubmit={login} />
    </ResponsiveCenteredLayout>
  );
}

export default Login;

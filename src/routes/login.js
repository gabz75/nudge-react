import React from 'react';

import FormLogin from '../components/form-login';
import { useAuth } from '../hooks/use-auth';
import { RouteWrapper } from './routes.styles';

export const PATH = '/login';

function Login() {
  const { login } = useAuth();

  return (
    <RouteWrapper>
      <FormLogin className="w-1/4" onSubmit={login} email="gabe@gmail.com" password="qweqweqwe" />
    </RouteWrapper>
  );
}

Login.path = PATH;

export default Login;

import React from 'react';

import FormLogin from '../components/form-login';
import { useAuth } from '../hooks/use-auth';

function Login() {
  const { login } = useAuth();

  return (
    <div className="mt-32 flex justify-center items-center">
      <FormLogin className="w-1/4" onSubmit={login} email="gabe@gmail.com" password="qweqweqwe" />
    </div>
  );
}

export default Login;

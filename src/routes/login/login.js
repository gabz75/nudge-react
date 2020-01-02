import React from 'react';
import FormLogin from 'components/form-login';
import { useAuth } from 'hooks/use-auth';
import { Flex } from 'components/globals';

export const PATH = '/login';

function Login() {
  const { login } = useAuth();

  return (
    <Flex justifyContent="center">
      <FormLogin onSubmit={login} width={[1, 1 / 2, 1 / 3, 1 / 4]} />
    </Flex>
  );
}

Login.path = PATH;

export default Login;

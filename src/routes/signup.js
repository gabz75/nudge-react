import React from 'react';

import FormSignup from '../components/form-signup';
import { useAuth } from '../hooks/use-auth';
import { RouteWrapper } from './routes.styles';

export const PATH = '/signup';

function Signup() {
  const { signup } = useAuth();

  return (
    <RouteWrapper>
      <FormSignup className="w-1/4" onSubmit={signup} />
    </RouteWrapper>
  );
}

Signup.path = PATH;

export default Signup;

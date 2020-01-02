import React from 'react';

import FormSignup from 'components/form-signup';
import { useAuth } from 'hooks/use-auth';
import { Flex } from 'components/globals';

export const PATH = '/signup';

function Signup() {
  const { signup } = useAuth();

  return (
    <Flex justifyContent="center">
      <FormSignup width={[1, 1 / 2, 1 / 3, 1 / 4]} onSubmit={signup} />
    </Flex>
  );
}

Signup.path = PATH;

export default Signup;

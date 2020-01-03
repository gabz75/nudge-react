import React from 'react';

import FormSignup from 'components/form-signup';
import { useAuth } from 'hooks/use-auth';
import { FlexCol } from 'components/globals';

export const PATH = '/signup';

function Signup() {
  const { signup } = useAuth();

  return (
    <FlexCol alignItems="center">
      <FormSignup width={[1, 1 / 2, 1 / 3, 1 / 4]} onSubmit={signup} />
    </FlexCol>
  );
}

Signup.path = PATH;

export default Signup;

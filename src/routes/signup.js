import React from 'react';

import FormSignup from 'components/form-signup';
import { useAuth } from 'hooks/use-auth';
import { ResponsiveCenteredLayout } from 'components/globals';

function Signup() {
  const { signup } = useAuth();

  return (
    <ResponsiveCenteredLayout>
      <FormSignup onSubmit={signup} />
    </ResponsiveCenteredLayout>
  );
}

export default Signup;

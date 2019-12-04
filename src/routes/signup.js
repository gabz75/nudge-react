import React from 'react';

import FormSignup from '../components/form-signup';
import { useAuth } from '../hooks/use-auth';

function Signup() {
  const { signup } = useAuth();

  return (
    <div className="mt-32 flex justify-center items-center">
      <FormSignup className="w-1/4" onSubmit={signup} />
    </div>
  );
}

export default Signup;

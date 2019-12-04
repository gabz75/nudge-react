import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../input';
import Button from '../button';
import FormError from '../form-error';

function FormSignup(props) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  const [name, setName] = useState(props.name);
  const [errorMessage, setErrorMessage] = useState(props.errorMessage);


  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ email, password, name })
         .catch((error) => setErrorMessage(error.message));
  }

  return (
    <div className={props.className}>
      <form onSubmit={onSubmit} className="flex flex-col border-2 border-gray-400 bg-white p-4 rounded">
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <hr className="my-4" />
        <Button label="Signup" />
        { errorMessage && <FormError message={errorMessage} className="mt-4" />}
      </form>

      <p className="text-xs mt-2 text-center">
        Already have an account? <Link to="/login" className="text-white underline">Log in</Link>
      </p>
    </div>
  );
}

export default FormSignup;

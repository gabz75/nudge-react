import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Input from '../input';
import Button from '../button';
import FormError from '../form-error';

const CREATE_USER = gql`
  mutation login($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name) {
      id
      email
      name
      jwt
    }
  }
`;

function FormSignup(props, state) {
  const [email, setEmail] = useState('gabe@gmail.com');
  const [name, setName] = useState('gabe');
  const [password, setPassword] = useState('qweqweqwe');
  const [errorMessage, setErrorMessage] = useState();
  const [login] = useMutation(CREATE_USER);

  const onSubmit = (e) => {
    e.preventDefault();

    login({ variables: { email, password, name }})
      .then(({ data }) => {
        setErrorMessage(null)
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <div className={props.className}>
      <form onSubmit={onSubmit} class="flex flex-col border-2 border-gray-400 bg-white p-4 rounded">
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="text" label="Nam" value={name} onChange={(e) => setName(e.target.value)} />
        <hr class="my-4" />
        <Button label="Signup" />
        { errorMessage && <FormError message={errorMessage} className="mt-4" />}
      </form>

      <p class="text-xs mt-2 text-center">Already have an account? <Link to="/login" class="text-white underline">Login</Link> instead.</p>
    </div>
  );
}

export default FormSignup;

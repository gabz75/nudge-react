import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Input from '../input';
import Button from '../button';
import FormError from '../form-error';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
      jwt
    }
  }
`;

function FormLogin(props, state) {
  const className = props.className.concat(" flex flex-col border-2 border-gray-400 bg-white p-4 rounded");
  const [email, setEmail] = useState('gabe@gmail.com');
  const [password, setPassword] = useState('qweqweqwe');
  const [jwt, setJwt] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [login] = useMutation(LOGIN_MUTATION);

  const onSubmit = (e) => {
    e.preventDefault();

    login({ variables: { email, password }})
      .then(({ data }) => {
        setJwt(data.login.jwt)
        setErrorMessage(null)
      })
      .catch((error) => {
        setJwt(null);
        setErrorMessage(error.message);
      });
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      <Input type="text" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <hr class="my-4" />
      <Button label="Login" />
      { errorMessage && <FormError message={errorMessage} className="mt-4" />}
      { jwt && <p>JWT: ${jwt} </p> }
    </form>
  );
}

export default FormLogin;

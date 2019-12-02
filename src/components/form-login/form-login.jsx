import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Input from '../input';
import Button from '../button';

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
    <form onSubmit={onSubmit}>
      <Input type="text" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" label="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button label="Submit"/>
      { errorMessage && <p>${errorMessage}</p> }
      { jwt && <p>JWT: ${jwt} </p> }
    </form>
  );
}

export default FormLogin;

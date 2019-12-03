import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Input from '../input';
import Button from '../button';
import FormError from '../form-error';

import AuthenticationContext from '../../contexts/authentication';

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
  const [errorMessage, setErrorMessage] = useState();
  const [login] = useMutation(LOGIN_MUTATION);
  const history = useHistory();
  const authenticationContext = useContext(AuthenticationContext);

  const onSubmit = (e) => {
    e.preventDefault();

    login({ variables: { email, password }})
      .then(({ data }) => {
        setErrorMessage(null)
        authenticationContext.setJWT(data);
        history.push('/dashboard');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <div className={props.className}>
      <form onSubmit={onSubmit} className="flex flex-col border-2 border-gray-400 bg-white p-4 rounded">
        <Input type="text" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <hr className="my-4" />
        <Button label="Login" />
        { errorMessage && <FormError message={errorMessage} className="mt-4" />}
      </form>

      <p className="text-xs mt-2 text-center">
        Don't have an account yet? <Link to="/signup" className="text-white underline">Sign up</Link>
      </p>
    </div>
  );
}

export default FormLogin;

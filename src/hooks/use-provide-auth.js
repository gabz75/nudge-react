import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const STORAGE_KEY = 'nudge_authentication_jwt';

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

const CREATE_USER_MUTATION = gql`
  mutation login($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name) {
      id
      email
      name
      jwt
    }
  }
`;

export const useProvideAuth = () => {
  const localStorageJWT = window.localStorage.getItem(STORAGE_KEY);

  const [jwt, setJWT] = useState(localStorageJWT);

  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const [createUserMutation] = useMutation(CREATE_USER_MUTATION);
  const history = useHistory();

  const login = (variables) => {
    return loginMutation({ variables })
      .then(({ data }) => {
        window.localStorage.setItem(STORAGE_KEY, data.login.jwt);
        setJWT(data.login.jwt);
        history.push('/dashboard');
      });
  };

  const logout = () => {
    setJWT(null);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const signup = (variables) => {
    return createUserMutation({ variables })
      .then(({ data }) => {
        window.localStorage.setItem(STORAGE_KEY, data.createUser.jwt);
        setJWT(data.createUser.jwt);
        history.push('/dashboard');
      })
  }

  const isAuthenticated = () => {
    return jwt;
  }

  return {
    jwt,
    isAuthenticated,
    login,
    logout,
    signup,
  };
};

export default useProvideAuth;

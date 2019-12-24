import { useHistory } from 'react-router-dom';

import { DashboardPath } from '../routes';
import { useNudgeApi } from './use-nudge-api';

export const STORAGE_AUTH_KEY = 'nudge_authentication_jwt';

export const useProvideAuth = () => {
  const { login: loginMutation, createUser: createUserMutation } = useNudgeApi();
  const history = useHistory();

  /**
   * Login and stores the JWT in localStorage.
   */
  const login = (args) => (
    loginMutation(args)
      .then(({ data }) => {
        window.localStorage.setItem(STORAGE_AUTH_KEY, data.login.jwt);
        history.push(DashboardPath);
      })
  );

  /**
   * Clear JWT in localStorage and logs out the user.
   */
  const logout = () => {
    window.localStorage.removeItem(STORAGE_AUTH_KEY);
  };

  /**
   * Create a user and stores the JWT in localStorage.
   */
  const signup = (args) => (
    createUserMutation(args)
      .then(({ data }) => {
        window.localStorage.setItem(STORAGE_AUTH_KEY, data.createUser.jwt);
        history.push(DashboardPath);
      })
  );

  /**
   * @return {boolean} whether there is a JWT in localStorage
   */
  const isAuthenticated = () => window.localStorage.getItem(STORAGE_AUTH_KEY);

  return {
    isAuthenticated,
    login,
    logout,
    signup,
  };
};

export default useProvideAuth;

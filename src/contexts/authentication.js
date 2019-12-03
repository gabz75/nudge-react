import { createContext } from 'react';

const STORAGE_KEY = 'nudge_authentication_jwt';

export default createContext({
  jwt: null,

  init() {
    if (localStorage.getItem(STORAGE_KEY)) {
      this.jwt = localStorage.getItem(STORAGE_KEY);
    }
  },

  setJWT(data) {
    const jwt = data.login.jwt;
    this.jwt = jwt;
    localStorage.setItem(STORAGE_KEY, jwt);
  },

  clearJWT() {
    localStorage.removeItem(STORAGE_KEY);
    this.jwt = null;
  }
});

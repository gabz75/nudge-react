import React, { useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import FormLogin from './form-login';
import FormSignup from './form-signup';
import Dashboard from './dashboard';
import AuthenticatedRoute from './authenticated-route';
import UnauthenticatedRoute from './unauthenticated-route';

import AuthenticationContext from '../contexts/authentication';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
  });

  const authentication = useContext(AuthenticationContext);

  authentication.init();

  return (
    <ApolloProvider client={client}>
      <p>{authentication.data}</p>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {authentication.jwt ? <Redirect push to="/dashboard" /> : <Redirect push to="/login" />}
          </Route>
          <Route path="/login">
            <UnauthenticatedRoute>
              <div className="mt-32 flex justify-center items-center">
                <FormLogin className="w-1/4" />
              </div>
            </UnauthenticatedRoute>
          </Route>
          <Route path="/signup">
            <UnauthenticatedRoute>
              <div className="mt-32 flex justify-center items-center">
                <FormSignup className="w-1/4" />
              </div>
            </UnauthenticatedRoute>
          </Route>
          <Route path="/dashboard">
            <AuthenticatedRoute>
              <div className="mt-32 flex justify-center items-center">
                <Dashboard className="w-1/4" />
              </div>
            </AuthenticatedRoute>
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

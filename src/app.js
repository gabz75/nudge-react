import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import ProvideAuth from './components/provide-auth';

import UnauthenticatedRoute from './components/unauthenticated-route';
import ProtectedRoute from './components/protected-route';
import LoginRoute from './routes/login';
import SignupRoute from './routes/signup';
import DashboardRoute from './routes/dashboard';

import NudgeNewRoute from './routes/nudge/new';
import NudgeUpdateRoute from './routes/nudge/update';

import { STORAGE_AUTH_KEY } from './hooks/use-provide-auth';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    request: (operation) => {
      const token = localStorage.getItem(STORAGE_AUTH_KEY);
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      });
    },
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <ProvideAuth>
            <Route exact path="/">
              <Redirect push to={LoginRoute.path} />
            </Route>
            <UnauthenticatedRoute path={LoginRoute.path} component={LoginRoute} />
            <UnauthenticatedRoute path={SignupRoute.path} component={SignupRoute} />
            <ProtectedRoute path={DashboardRoute.path} component={DashboardRoute} />
            <ProtectedRoute path={NudgeNewRoute.path} component={NudgeNewRoute} />
            <ProtectedRoute path={NudgeUpdateRoute.path} component={NudgeUpdateRoute} />
          </ProvideAuth>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

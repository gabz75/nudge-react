import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import ProvideAuth from './components/provide-auth';

import UnauthenticatedRoute from './components/unauthenticated-route';
import ProtectedRoute from './components/protected-route';
import LoginRoute from './routes/login';
import SignupRoute from './routes/signup';
import DashboardRoute from './routes/dashboard';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
  });

  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <ProvideAuth>
              <Route exact path="/">
                <Redirect push to="/login" />
              </Route>
              <UnauthenticatedRoute path="/login" component={LoginRoute} />
              <UnauthenticatedRoute path="/signup" component={SignupRoute} />
              <ProtectedRoute path="/dashboard" component={DashboardRoute} />
            </ProvideAuth>
          </Switch>
        </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

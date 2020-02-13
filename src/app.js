import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ApolloClient, { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import ProvideAuth from 'components/provide-auth';
import Navbar from 'components/navbar';
import UnauthenticatedRoute from 'components/unauthenticated-route';
import ProtectedRoute from 'components/protected-route';

import LoginRoute from 'routes/login';
import SignupRoute from 'routes/signup';
import DashboardRoute from 'routes/dashboard';
import ReportsRoute from 'routes/reports';
import ReportNewRoute from 'routes/reports/new';
import ReportUpdateRoute from 'routes/reports/update';
import GoalNewRoute from 'routes/goal/new';
import GoalUpdateRoute from 'routes/goal/update';

import {
  DashboardPath,
  GoalNewPath,
  GoalUpdatePath,
  LoginPath,
  ReportsPath,
  ReportNewPath,
  ReportUpdatePath,
  SignupPath,
} from 'routes';

import { STORAGE_AUTH_KEY } from 'hooks/use-provide-auth';

import theme from './theme';

function App() {
  // unsure why that's needed but fixes:
  // eslint-disable-next-line max-len
  // https://spectrum.chat/apollo/apollo-client/simple-heuristic-fragment-matcher-but-your-queries-contain-union-or-interface-types~8537e840-f75e-445f-bc1f-31e316984891
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
      __schema: {
        types: [],
      },
    },
  });
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
    cache: new InMemoryCache({ fragmentMatcher }),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <ProvideAuth>
            <ThemeProvider theme={theme}>
              <Navbar />
              <Route exact path="/">
                <Redirect push to={LoginPath} />
              </Route>
              <UnauthenticatedRoute exact path={LoginPath} component={LoginRoute} />
              <UnauthenticatedRoute exact path={SignupPath} component={SignupRoute} />
              <ProtectedRoute exact path={DashboardPath} component={DashboardRoute} />
              <ProtectedRoute exact path={ReportsPath} component={ReportsRoute} />
              <ProtectedRoute exact path={ReportNewPath} component={ReportNewRoute} />
              <ProtectedRoute exact path={ReportUpdatePath} component={ReportUpdateRoute} />
              <ProtectedRoute exact path={GoalNewPath} component={GoalNewRoute} />
              <ProtectedRoute exact path={GoalUpdatePath} component={GoalUpdateRoute} />
            </ThemeProvider>
          </ProvideAuth>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

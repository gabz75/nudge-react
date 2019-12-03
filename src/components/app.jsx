import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import FormLogin from './form-login';
import FormSignup from './form-signup';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
  });
  const [jwt, setJwt] = useState();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/login">
            <div class="mt-32 flex justify-center items-center">
              <FormLogin className="w-1/4" />
            </div>
          </Route>
          <Route path="/signup">
            <div class="mt-32 flex justify-center items-center">
              <FormSignup className="w-1/4" />
            </div>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

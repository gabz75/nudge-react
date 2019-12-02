import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import FormLogin from './form-login';

import './app.css';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
  });

  const [jwt, setJwt] = useState();

  return (
    <ApolloProvider client={client}>
      <FormLogin />
      {jwt && <p>JWT: ${jwt} </p>}
    </ApolloProvider>
  );
}

export default App;

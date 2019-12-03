import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import FormLogin from './form-login';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
  });

  return (
    <ApolloProvider client={client}>
      <div class="mt-32 flex justify-center items-center">
        <FormLogin className="w-1/4"/>
      </div>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../config/gql_config'
import Students from './Students';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      
      <Students />
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import { ApolloProvider } from 'react-apollo';

import AppNavigator from './src/AppNavigator/AppNavigator'
import makeApolloClient from './src/Static/Functions/apollo';

const client = makeApolloClient("token");

class App extends React.Component {

  constructor(props) {
    super(props)
  }



  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    )
  }

}


export default App;

// import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
const makeApolloClient = (token) => {

    //   const link = new HttpLink({
    //     uri: `https://learn.hasura.io/graphql`,
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   });

    const link = new WebSocketLink({
        uri: `ws:10.120.110.114:4000/graphql`,
        options: {
            reconnect: true,
            connectionParams: {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        }
    })

    const cache = new InMemoryCache()

    const client = new ApolloClient({
        link,
        cache
    });
    return client;
}
export default makeApolloClient;
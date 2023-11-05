import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tailormeapi.azurewebsites.net/graphql",
  cache: new InMemoryCache(),
});

export const ApolloContainer = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

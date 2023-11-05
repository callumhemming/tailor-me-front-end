import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tailormeapi.azurewebsites.net/graphql/",
  cache: new InMemoryCache(),
});

const ApolloContainer = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export const useApolloClient = () => ({ ApolloContainer });

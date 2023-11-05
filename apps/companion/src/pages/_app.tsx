import "@/styles/globals.css";
import { useApolloClient } from "components/hooks";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  const { ApolloContainer } = useApolloClient();
  return (
    <ApolloContainer>
      <Component {...pageProps} />
    </ApolloContainer>
  );
}

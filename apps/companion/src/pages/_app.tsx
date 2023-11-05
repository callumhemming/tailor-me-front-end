import "@/styles/globals.css";
import { ApolloContainer } from "components/atoms";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloContainer>
      <Component {...pageProps} />
    </ApolloContainer>
  );
}

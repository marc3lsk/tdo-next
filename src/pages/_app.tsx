import "../styles/globals.css";
import "../styles/gutenberg/common.css";
import "../styles/gutenberg/style.css";
import "../styles/gutenberg/theme.css";
import "../styles/gutenberg-custom.scss";
import type { AppProps } from "next/app";
import Layout from "../components/_layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

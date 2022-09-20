import "../styles/gutenberg/common.css";
import "../styles/gutenberg/style.css";
import "../styles/gutenberg/theme.css";
import "../styles/gutenberg-custom.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";
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

import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, ReactElement, ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
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

// paths
/*

home: "/"
search: "/explore"
create: "/create/select" , "/create/style"
accounts-activity: "/accounts/activity"
Inbox: "/direct/inbox"
profile: "/slug"
Tagprofile: "/explore/tags/slug"
Post: "/p/slug"

*/

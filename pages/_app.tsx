import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "../components";
import { Nav } from "../components/navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <section className="min-h-screen overflow-hidden flex flex-col">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!pathname.startsWith("/accounts") && <Nav />}
      <main className="flex flex-col flex-grow bg-zinc-50">
        <Component {...pageProps} />
      </main>
      <Footer />
    </section>
  );
}

export default MyApp;

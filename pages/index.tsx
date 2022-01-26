import type { NextPage } from "next";
import Head from "next/head";
import { Wrapper } from "../components";

const Home: NextPage = () => {
  return (
    <Wrapper showNavbar hideFooter>
      <Head>
        <title>Instagram</title>
      </Head>
      <section className="max-w-screen-sm1 sm2:max-w-screen-lg1 mx-auto sm2:px-5 w-full sm2:pt-7.5 flex flex-grow">
        home
      </section>
    </Wrapper>
  );
};

export default Home;

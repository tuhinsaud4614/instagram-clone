import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "../../components";
import { Nav } from "../../components/navigation";

const PageNotFound: NextPage = () => {
  return (
    <section className="min-h-screen overflow-hidden flex flex-col">
      <Head>
        <title>Page Not Found • Instagram</title>
      </Head>
      <Nav />
      <main className="flex flex-col flex-grow bg-zinc-50">
        <div className="flex flex-col h-full p-10">
          <h1 className="text-1.5xl font-semibold text-center">
            Sorry, this page isn{"'"}t available.
          </h1>
          <div className="mt-10 mb-5">
            <div className="text-center -my-1.5">
              The link you followed may be broken, or the page may have been
              removed.
              <br />
              <Link href="/">
                <a className="no-underline" style={{ color: "rgba(0,55,107)" }}>
                  Go back to Instagram.
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default PageNotFound;

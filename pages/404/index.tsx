import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { Wrapper } from "../../components";

PageNotFound.getLayout = function (page: ReactElement) {
  return (
    <Wrapper classes={{ footer: { root: "hidden sm2:block" } }} showNavbar>
      <Head>
        <title>Page Not Found • Instagram</title>
      </Head>
      {page}
    </Wrapper>
  );
};

export default function PageNotFound() {
  return (
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
  );
}

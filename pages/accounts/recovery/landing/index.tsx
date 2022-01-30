import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AccountWrapper } from "../../../../components/accounts";
import RecoveryLanding from "../../../../components/recovery-landing/form";

const RecoveryLandingPage: NextPage = () => {
  return (
    <AccountWrapper showNavbar hideFooter>
      <Head>
        <title>Instagram</title>
      </Head>
      <section className="mb-11 flex flex-col justify-center items-center flex-grow">
        <div
          className="overflow-hidden mx-auto mt-[3.75rem] border rounded-sm bg-white"
          style={{ maxWidth: 935 }}
        >
          <div className="mt-5 mx-auto px-11 flex flex-col md1:p-11 md1:w-[22.5rem] md1:m-auto">
            <div className="flex justify-center items-center pb-2.5">
              <Image
                className="rounded-full"
                width={74}
                height={74}
                src="/avatar.jpeg"
                alt="Avatar"
              />
            </div>
            <div className="flex justify-center items-center pb-5">
              <h4 className="text-neutral-800 font-semibold">your.username</h4>
            </div>
            <RecoveryLanding />
            <div className="mt-5">
              <Link href="/">
                <a className="btn-text-primary block w-full">Skip</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AccountWrapper>
  );
};

export default RecoveryLandingPage;

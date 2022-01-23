import Head from "next/head";
import Link from "next/link";
import { VscLock } from "react-icons/vsc";
import { AccountWrapper, OrDivider } from "../../../../components/accounts";
import ResetPasswordForm from "../../../../components/reset-password/form";

const PasswordReset = () => {
  return (
    <AccountWrapper showNavbar>
      <Head>
        <title>Reset Password • Instagram</title>
      </Head>
      <div className="flex justify-center mb-11 mt-9">
        <div style={{ maxWidth: 388 }}>
          <section className="account-form-container items-center mb-2.5">
            <div className="flex flex-col w-full">
              {/* Header Lock Icon start */}
              <div className="flex items-center justify-center pt-6 pb-4">
                <div className="w-24 h-24 flex justify-center items-center rounded-full border-2 border-black">
                  <VscLock size={60} />
                </div>
              </div>
              {/* Header Lock Icon end */}
              <h4 className="font-semibold text-center px-11 pb-4">
                Trouble Logging In?
              </h4>
              <p
                className="px-11 pb-4 text-center text-silver text-sm font-normal"
                style={{ lineHeight: "1.125rem" }}
              >
                Enter your email, phone, or username and we{"'"}ll send you a
                link to get back into your account.
              </p>
              <ResetPasswordForm />
              <OrDivider />
              <div className="mx-11 pb-4 -mt-0.5">
                <Link href="/accounts/register">
                  <a className="back-link">Create New Account</a>
                </Link>
              </div>
              <div style={{ marginTop: "4.25rem" }}>
                <div className="h-11 flex items-center bg-neutral-50 border">
                  <Link href="/accounts/login">
                    <a className="back-link w-full">Back To Login</a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AccountWrapper>
  );
};

export default PasswordReset;

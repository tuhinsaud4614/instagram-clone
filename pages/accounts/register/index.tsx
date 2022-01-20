import type { NextPage } from "next";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import {
  AccountFormHeader,
  GetTheApp,
  OrDivider,
  SwitchAuthType,
} from "../../../components/accounts";
import { RegisterForm } from "../../../components/register";

const Register: NextPage = () => {
  return (
    <div className="flex justify-center mb-11 mt-9">
      <div style={{ maxWidth: 350 }}>
        <section className="account-form-container items-center mb-2.5">
          <AccountFormHeader />
          <div className="flex flex-col w-full mb-5">
            <h2
              className="px-10 pb-2.5 text-silver leading-5 font-semibold text-center"
              style={{ fontSize: "1.0625rem" }}
            >
              Sign up to see photos and videos from your friends.
            </h2>
            <div className="px-10 pt-3">
              <button className="btn-primary w-full flex items-center justify-center">
                <IoLogoFacebook size={20} className="mr-2" />
                Log in with Facebook
              </button>
            </div>
            <OrDivider />
            <RegisterForm />
            <p className="mx-10 py-2.5 text-silver text-xs text-center">
              By signing up, you agree to our{" "}
              <Link href="https://help.instagram.com/581066165581870" passHref>
                <a target="_blank" className="font-semibold">
                  Terms
                </a>
              </Link>
              {" , "}
              <Link href="https://help.instagram.com/581066165581870" passHref>
                <a target="_blank" className="font-semibold">
                  Data Policy
                </a>
              </Link>{" "}
              and{" "}
              <Link href="https://help.instagram.com/581066165581870" passHref>
                <a target="_blank" className="font-semibold">
                  Cookies Policy
                </a>
              </Link>{" "}
              .
            </p>
          </div>
        </section>
        <SwitchAuthType to="Log in" />
        <GetTheApp />
      </div>
    </div>
  );
};

export default Register;

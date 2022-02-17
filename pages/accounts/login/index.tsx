import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  AccountWrapper,
  GetTheApp,
  SwitchAuthType,
} from "../../../components/accounts";
import { LoginForm, Slide } from "../../../components/login";

const slides = [
  "slide-1.jpg",
  "slide-2.jpg",
  "slide-3.jpg",
  "slide-4.jpg",
  "slide-5.jpg",
  "slide-6.jpg",
];

const Login: NextPage = () => {
  return (
    <AccountWrapper>
      <section className="flex max-w-screen-lg mx-auto md:mt-8">
        <Head>
          <title>Login • Instagram</title>
        </Head>
        <div className={"basis-[28.375rem] h-[38.625rem] hidden md2:block"}>
          <div className={"h-[inherit] w-[28.375rem] relative"}>
            <Image
              src="/login-image.png"
              alt="login-page"
              width={454}
              height={618}
              className="w-full h-full"
            />
            <div className="absolute inset-0">
              <Slide data={slides} />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-center mt-3 min-w-[21.875rem]">
          <LoginForm />
          <SwitchAuthType to="Sign up" />
          <GetTheApp />
        </div>
      </section>
    </AccountWrapper>
  );
};

export default Login;

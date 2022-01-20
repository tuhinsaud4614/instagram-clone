import classNames from "classnames";
import type { NextPage } from "next";
import Image from "next/image";
import { GetTheApp, SwitchAuthType } from "../../../components/accounts";
import { LoginForm, Slide } from "../../../components/login";
import styles from "../../../styles/Login.module.css";

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
    <section className="flex max-w-screen-lg mx-auto md:mt-8">
      <div className={classNames(styles.Left)}>
        <div className={classNames(styles.LeftWrapper, "relative")}>
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
      <div
        className={classNames(
          "flex flex-col flex-grow justify-center mt-3",
          styles.Right
        )}
      >
        <LoginForm />
        <SwitchAuthType to="Sign up" />
        <GetTheApp />
      </div>
    </section>
  );
};

export default Login;

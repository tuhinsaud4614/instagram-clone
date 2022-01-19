import type { NextPage } from "next";
import { LoginLeftBox, LoginRightBox } from "../../../components/login";

const Login: NextPage = () => {
  return (
    <section className="flex max-w-screen-lg mx-auto md:mt-8">
      <LoginLeftBox />
      <LoginRightBox />
    </section>
  );
};

export default Login;

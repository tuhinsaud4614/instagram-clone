import Link from "next/link";
import { useState } from "react";
import { FbButton } from ".";
import { AccountFormHeader, OrDivider } from "../accounts";
import { Input } from "../ui";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="account-form-container w-full pt-2.5 mb-2.5">
      <AccountFormHeader />
      <section className="flex flex-col w-full mb-2.5">
        <form className="mt-6">
          <div className="mx-10 mb-1.5">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Phone number, username, or email"
            />
          </div>
          <div className="mx-10 mb-1.5">
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              secureText
            />
          </div>
          <div className="mx-10 mt-4">
            <button className="btn-primary block w-full">Log In</button>
          </div>
          <OrDivider />
          <div className="mx-10 mt-2">
            <FbButton />
          </div>
          <Link href="/accounts/password/reset/">
            <a className="block mt-5 mb-2 text-my-blue-100 active:opacity-50 text-center text-xs">
              Forgot password?
            </a>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;

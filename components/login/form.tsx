import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FbButton } from ".";
import { Input } from "../ui";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="md:bg-white md:border rounded-sm w-full pt-2.5 mb-2.5 flex flex-col">
      <div className="mt-5 mb-3 mx-auto">
        <Image src="/text-logo.png" alt="instagram" width={175} height={51} />
      </div>
      <section className="flex flex-col w-full mb-2.5">
        <form>
          <div className="mt-6">
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
            <div className="mx-10 mt-4.5 flex items-center">
              <div className="h-px bg-sliver-200 flex-grow" />
              <span className="text-silver mx-4.5 text-xs">OR</span>
              <div className="h-px bg-sliver-200 flex-grow" />
            </div>
            <div className="mx-10 mt-6.5">
              <FbButton />
            </div>

            <Link href="/accounts/password/reset/">
              <a className="block mt-5 mb-2 text-my-blue-100 active:opacity-50 text-center text-xs">
                Forgot password?
              </a>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;

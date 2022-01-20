import { useState } from "react";
import { Input } from "../ui";

const RegisterForm = () => {
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <div className="mx-10 mb-1.5">
        <Input
          type="email"
          value={mobileOrEmail}
          onChange={(e) => setMobileOrEmail(e.target.value)}
          label="Mobile Number or Email"
          aria-label="Mobile Number or Email"
        />
      </div>
      <div className="mx-10 mb-1.5">
        <Input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          label="Full Name"
          aria-label="Full Name"
        />
      </div>
      <div className="mx-10 mb-1.5">
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          label="User Name"
          aria-label="User Name"
        />
      </div>
      <div className="mx-10 mb-1.5">
        <Input
          type="password"
          label="Password"
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoCapitalize="off"
          autoComplete="new-password"
          autoCorrect="off"
          secureText
          touched
          valid
        />
      </div>
      <div className="mx-10 py-2">
        <button className="btn-primary block w-full">Sign Up</button>
      </div>
    </form>
  );
};

export default RegisterForm;

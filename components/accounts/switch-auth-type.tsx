import Link from "next/link";

interface Props {
  to: "Log in" | "Sign up";
}

const SwitchAuthType = ({ to }: Props) => {
  let text =
    to === "Sign up" ? "Don't have an account?" : "Already have an account?";

  return (
    <div className="md:bg-white py-2.5 md:border flex justify-center">
      <p className="text-sm my-2.5 mx-4">
        {text}{" "}
        <Link href={`/accounts/${to === "Sign up" ? "register" : "login"}`}>
          <a className="btn-text-primary">{to}</a>
        </Link>
      </p>
    </div>
  );
};

export default SwitchAuthType;

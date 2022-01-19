import { IoLogoFacebook } from "react-icons/io";

const FbButton = () => {
  return (
    <button
      type="button"
      className="flex justify-center items-center w-full active:opacity-70"
    >
      <IoLogoFacebook size={20} className="mr-1 text-fb" />
      <span className="text-fb text-sm font-semibold">
        Log in with Facebook
      </span>
    </button>
  );
};
export default FbButton;

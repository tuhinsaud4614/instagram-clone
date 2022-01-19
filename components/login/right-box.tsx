import classNames from "classnames";
import Link from "next/link";
import { GetFromOtherApp, LoginForm } from ".";
import styles from "../../styles/Login.module.css";

const RightBox = () => {
  return (
    <div
      className={classNames(
        "flex flex-col flex-grow justify-center mt-3",
        styles.Right
      )}
    >
      <LoginForm />
      <div className="md:bg-white py-2.5 md:border flex justify-center">
        <p className="text-sm m-4">
          Don{"'t"} have an account?{" "}
          <Link href="/accounts/register">
            <a className="btn-text-primary">Sign up</a>
          </Link>
        </p>
      </div>
      <div className="mt-2.5">
        <p className="text-center text-sm py-2.5 px-5">Get the app.</p>
        <div className="flex justify-center py-2.5">
          <GetFromOtherApp
            alt="Available on the App Store"
            src="/app-store.png"
            to="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
            className="mr-2"
          />
          <GetFromOtherApp
            alt="Available on Google Play"
            src="/play-store.png"
            to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D075A1F3A-24F5-4DD8-B19E-416860074DE0%26utm_content%3Dlo%26utm_medium%3Dbadge"
          />
        </div>
      </div>
    </div>
  );
};

export default RightBox;

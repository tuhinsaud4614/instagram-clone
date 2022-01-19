import classNames from "classnames";
import Image from "next/image";
import { Slides } from "..";
import styles from "../../styles/Login.module.css";

const LeftBox = () => {
  return (
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
          <Slides />
        </div>
      </div>
    </div>
  );
};

export default LeftBox;

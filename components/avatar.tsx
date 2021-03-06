import classNames from "classnames";
import Image from "next/image";
import { ReactNode } from "react";
import { AiOutlineUser } from "react-icons/ai";

interface Props {
  active?: boolean;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  icon?: ReactNode;
  activeStyle?: "border" | "gradient";
  classes?: {
    root?: string;
    container?: string;
  };
}

const Avatar = ({
  active = false,
  activeStyle = "gradient",
  alt,
  height = 44,
  src,
  width = 44,
  icon,
  classes,
}: Props) => {
  return (
    <div
      className={classNames(
        "relative flex items-center justify-center",
        classes?.container
      )}
    >
      {active && (
        <span
          className={classNames(
            activeStyle === "border"
              ? "border border-neutral-800"
              : "inst-ring",
            "rounded-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
          )}
          style={{
            height: `${(height + 8) / 16}rem`,
            width: `${(width + 8) / 16}rem`,
          }}
        />
      )}
      <span
        className={classNames(
          "rounded-full z-10 relative flex items-center justify-center bg-white",
          (icon || !src) && "border",
          active && "p-0.5",
          classes?.root
        )}
        style={
          active
            ? {
                height: `${(height + 4) / 16}rem`,
                width: `${(width + 4) / 16}rem`,
              }
            : { height: `${height / 16}rem`, width: `${width / 16}rem` }
        }
      >
        {icon ? (
          icon
        ) : src ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-full"
          />
        ) : (
          <AiOutlineUser size={24} className="text-neutral-800" />
        )}
      </span>
    </div>
  );
};

export default Avatar;

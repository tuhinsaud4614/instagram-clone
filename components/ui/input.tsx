import classNames from "classnames";
import { InputHTMLAttributes, useState } from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  secureText?: boolean;
  valid?: boolean;
  touched?: boolean;
}

const Input = ({
  label,
  type,
  value,
  valid = false,
  touched = false,
  secureText = false,
  ...rest
}: Props) => {
  const [isHidden, setIsHidden] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={classNames(
        focus && "border-sliver-300",
        "border rounded-sm flex"
      )}
    >
      <label className="h-9 relative flex-grow">
        <span
          onMouseDown={(e) => e.preventDefault()}
          className={classNames(
            value && "scale-83 -translate-y-2.5 origin-left",
            "text-silver text-xs absolute left-2 right-0 h-9 leading-9"
          )}
        >
          {label}
        </span>
        <input
          {...rest}
          className={classNames(
            "outline-0 w-full flex-grow basis-auto bg-zinc-50 h-9 py-2 pl-2",
            value && "text-xs pt-3.5 pb-0.5 pl-2"
          )}
          value={value}
          type={
            secureText && type === "password"
              ? !isHidden
                ? "password"
                : "text"
              : type
          }
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </label>
      <div className={classNames("pr-2 bg-zinc-50 flex items-center")}>
        {touched &&
          (valid ? (
            <IoIosCheckmarkCircleOutline
              size={24}
              className="text-silver ml-2"
            />
          ) : (
            <IoIosCloseCircleOutline size={24} className="text-red-500  ml-2" />
          ))}
        {secureText && value && (
          <span
            className="ml-2 cursor-pointer"
            role="button"
            onClick={() => {
              setIsHidden((prev) => !prev);
            }}
          >
            {!isHidden ? "Show" : "Hide"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;

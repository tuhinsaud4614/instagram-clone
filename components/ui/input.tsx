import classNames from "classnames";
import { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  secureText?: boolean;
}

const Input = ({ label, type, value, secureText = false, ...rest }: Props) => {
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

import classNames from "classnames";
import { CSSProperties, InputHTMLAttributes, useState } from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  secureText?: boolean;
  valid?: boolean;
  touched?: boolean;
  focus?: boolean;
  classes?: {
    root?: string;
    label?: string;
    labelText?: string;
    right?: string;
    valid?: string;
    btn?: string;
  };
  styles?: {
    root?: CSSProperties;
    label?: CSSProperties;
    labelText?: CSSProperties;
    right?: CSSProperties;
    valid?: CSSProperties;
    btn?: CSSProperties;
  };
}

const Input = ({
  classes,
  styles,
  style,
  label,
  type,
  value,
  valid = false,
  touched = false,
  secureText = false,
  className,
  onFocus,
  onBlur,
  ...rest
}: Props) => {
  const [isHidden, setIsHidden] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <div
      style={styles?.root}
      className={classNames(
        focus && "border-sliver-300",
        "border rounded-sm flex overflow-hidden",
        classes?.root
      )}
    >
      <label
        style={styles?.label}
        className={classNames("h-9 relative flex-grow", classes?.label)}
      >
        <span
          onMouseDown={(e) => e.preventDefault()}
          style={styles?.labelText}
          className={classNames(
            value && "scale-83 -translate-y-2.5 origin-left",
            "text-silver text-xs absolute left-2 right-0 h-9 leading-9",
            classes?.labelText
          )}
        >
          {label}
        </span>
        <input
          {...rest}
          className={classNames(
            "outline-0 w-full flex-grow basis-auto bg-zinc-50 h-9 py-2 pl-2",
            value && "text-xs pt-3.5 pb-0.5 pl-2",
            className
          )}
          style={style}
          value={value}
          type={
            secureText && type === "password"
              ? !isHidden
                ? "password"
                : "text"
              : type
          }
          onFocus={(e) => {
            setFocus(true);
            !!onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            !!onBlur && onBlur(e);
          }}
        />
      </label>
      <div
        className={classNames(
          "pr-2 bg-zinc-50 flex items-center",
          classes?.right
        )}
        style={styles?.right}
      >
        {touched &&
          (valid ? (
            <IoIosCheckmarkCircleOutline
              size={24}
              className={classNames("text-silver ml-2", classes?.valid)}
              style={styles?.valid}
            />
          ) : (
            <IoIosCloseCircleOutline
              size={24}
              className={classNames("text-red-500  ml-2", classes?.valid)}
              style={styles?.valid}
            />
          ))}
        {secureText && value && (
          <span
            className={classNames("ml-2 cursor-pointer", classes?.btn)}
            role="button"
            onClick={() => {
              setIsHidden((prev) => !prev);
            }}
            style={styles?.btn}
          >
            {!isHidden ? "Show" : "Hide"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;

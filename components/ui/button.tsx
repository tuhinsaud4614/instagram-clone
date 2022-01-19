import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children }: Props) => {
  return <button className="">{children}</button>;
};

export default Button;

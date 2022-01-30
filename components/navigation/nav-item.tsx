import classNames from "classnames";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  to?: string;
  after?: boolean;
}

const NavItem = ({
  children,
  to,
  after = false,
  className,
  ...rest
}: Props) => {
  const cls = classNames(
    "text-neutral-800 relative flex items-center justify-center cursor-pointer",
    after &&
      "after:content-[''] after:bg-accent-alt after:mx-auto after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-1 after:w-1 after:rounded-sm"
  );
  return (
    <li
      className={classNames(className, "flex items-center justify-center")}
      {...rest}
    >
      {to ? (
        <Link href={to}>
          <a className={cls}>{children}</a>
        </Link>
      ) : (
        <div className={cls}>{children}</div>
      )}
    </li>
  );
};

export default NavItem;

import classNames from "classnames";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  to?: string;
  after?: boolean;
}

const NavItem = ({ children, to, after = false, ...rest }: Props) => {
  const cls = classNames(
    "text-neutral-800 relative flex items-center justify-center",
    after &&
      "after:content-[''] after:bg-accent-alt after:mx-auto after:absolute after:left-0 after:right-0 after:-bottom-2.5 after:h-1 after:w-1 after:rounded-sm"
  );
  return (
    <div
      className="ml-5.5 first:ml-0 flex items-center justify-center"
      {...rest}
    >
      {to ? (
        <Link href={to}>
          <a className={cls}>{children}</a>
        </Link>
      ) : (
        <div className={cls}>{children}</div>
      )}
    </div>
  );
};

export default NavItem;

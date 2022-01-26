import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  icon?: ReactNode;
  to?: string;
}

const NavUserAvatarItem = ({ icon, to, children, ...rest }: Props) => {
  const element = to ? (
    <Link href={to}>
      <a className="px-4 py-2 flex items-center" {...rest}>
        {icon && icon}
        <div className="h-7 w-44 text-sm font-normal flex items-center">
          {children}
        </div>
      </a>
    </Link>
  ) : (
    <button className="px-4 py-2 flex items-center" {...rest}>
      {icon && icon}
      <div className="h-7 w-44 text-sm font-normal flex items-center">
        {children}
      </div>
    </button>
  );

  return (
    <li className="hover:bg-zinc-50 focus:bg-sliver-100" {...rest}>
      {element}
    </li>
  );
};

export default NavUserAvatarItem;

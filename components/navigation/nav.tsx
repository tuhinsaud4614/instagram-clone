import Link from "next/link";
import { Logo, SearchBox } from "..";

interface Props {
  hideSearch?: boolean;
  hideLinks?: boolean;
}

const Nav = ({ hideLinks = false, hideSearch = false }: Props) => {
  return (
    <nav className="flex items-center border border-col bg-white h-16">
      <div className="flex justify-center flex-grow items-center px-5 max-w-screen-lg1 mx-auto">
        <div className="flex items-center flex-grow basis-32">
          <Logo />
        </div>
        {!hideSearch && <SearchBox />}
        {!hideLinks && (
          <div className="flex items-baseline justify-end flex-grow basis-32 pl-6">
            <Link href="/accounts/login">
              <a className="btn-primary">Log In</a>
            </Link>
            <Link href="/accounts/register">
              <a className="btn-text-primary leading-7 ml-4">Sign Up</a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

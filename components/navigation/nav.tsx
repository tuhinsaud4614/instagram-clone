import { useRouter } from "next/router";
import { NavFavorite, NavItem, NavUserAvatar, SearchBox } from ".";
import { Logo } from "..";
import { AddIcon, ExploreIcon, HomeIcon, MessengerIcon } from "../icons";

interface Props {
  hideSearch?: boolean;
  hideLinks?: boolean;
}

const Nav = ({ hideLinks = false, hideSearch = false }: Props) => {
  const { pathname } = useRouter();
  // console.log(pathname);

  return (
    <nav className="hidden sm2:flex items-center h-[3.75rem]">
      <div className="bg-white border-b z-100 fixed top-0 left-0 right-0 mx-auto h-15 flex items-center justify-center">
        <div className="max-w-screen-lg1 w-full flex justify-center flex-grow items-center px-5">
          <div className="flex items-center flex-grow basis-32">
            <Logo />
          </div>
          {!hideSearch && <SearchBox />}
          {/* {!hideLinks && (
          <div className="flex items-baseline justify-end flex-grow basis-32 pl-6">
            <Link href="/accounts/login">
              <a className="btn-primary">Log In</a>
            </Link>
            <Link href="/accounts/register">
              <a className="btn-text-primary leading-7 ml-4">Sign Up</a>
            </Link>
          </div>
        )} */}
          {!hideLinks && (
            <ul className="flex items-center justify-end flex-grow basis-32 pl-6 list-none m-0">
              <NavItem to="/" className="ml-5.5 first:ml-0" after>
                <HomeIcon
                  className="text-neutral-800"
                  height={24}
                  width={24}
                  active={pathname === "/"}
                />
              </NavItem>

              <NavItem to="/direct/inbox" className="ml-5.5 first:ml-0">
                <MessengerIcon
                  className="text-neutral-800"
                  height={24}
                  width={24}
                  active={pathname === "/direct/inbox"}
                />
              </NavItem>
              <NavItem to="/create/select" className="ml-5.5 first:ml-0">
                <AddIcon className="text-neutral-800" height={24} width={24} />
              </NavItem>
              <NavItem to="/explore" className="ml-5.5 first:ml-0">
                <ExploreIcon
                  className="text-neutral-800"
                  height={24}
                  width={24}
                  active={pathname === "/explore"}
                />
              </NavItem>
              {/* <NavItem to="/accounts/activity">
              {pathname === "/accounts/activity" ? (
                <AiFillHeart className="text-inherit" size={24} />
              ) : (
                <AiOutlineHeart className="text-inherit" size={24} />
              )}
            </NavItem> */}
              <NavFavorite />
              <NavItem className="ml-5.5 first:ml-0">
                <NavUserAvatar />
              </NavItem>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

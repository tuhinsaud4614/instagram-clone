import { useRouter } from "next/router";
import {
  AiFillHome,
  AiFillPlusSquare,
  AiOutlineHome,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { BsChatDots, BsChatDotsFill } from "react-icons/bs";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { NavFavorite, NavItem, NavUserAvatar, SearchBox } from ".";
import { Logo } from "..";

interface Props {
  hideSearch?: boolean;
  hideLinks?: boolean;
}

const Nav = ({ hideLinks = false, hideSearch = false }: Props) => {
  const { pathname } = useRouter();
  // console.log(pathname);

  return (
    <nav className="hidden sm2:flex items-center border border-col bg-white h-16">
      <div className="flex justify-center flex-grow items-center px-5 max-w-screen-lg1 mx-auto">
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
              {pathname === "/" ? (
                <AiFillHome className="text-inherit" size={24} />
              ) : (
                <AiOutlineHome className="text-inherit" size={24} />
              )}
            </NavItem>

            <NavItem to="/direct/inbox" className="ml-5.5 first:ml-0">
              {pathname === "/direct/inbox" ? (
                <BsChatDotsFill className="text-inherit" size={24} />
              ) : (
                <BsChatDots className="text-inherit" size={24} />
              )}
            </NavItem>
            <NavItem to="/create/select" className="ml-5.5 first:ml-0">
              {pathname === "/create/inbox" ? (
                <AiFillPlusSquare className="text-inherit" size={24} />
              ) : (
                <AiOutlinePlusSquare className="text-inherit" size={24} />
              )}
            </NavItem>
            <NavItem to="/explore" className="ml-5.5 first:ml-0">
              {pathname === "/explore" ? (
                <MdExplore className="text-inherit" size={24} />
              ) : (
                <MdOutlineExplore className="text-inherit" size={24} />
              )}
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
    </nav>
  );
};

export default Nav;

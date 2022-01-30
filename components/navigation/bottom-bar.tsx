import { useRouter } from "next/router";
import {
  AiFillHeart,
  AiFillHome,
  AiOutlineHeart,
  AiOutlineHome,
} from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { IoSearch, IoSearchOutline } from "react-icons/io5";
import { NavItem } from ".";
import { Avatar } from "..";

const BottomBar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="sm2:hidden fixed bottom-0 left-0 right-0 bg-white h-11">
      <ul className="flex items-center list-none m-0 h-full">
        <NavItem to="/" className="flex-auto h-full active:opacity-50" after>
          {pathname === "/" ? (
            <AiFillHome className="text-inherit" size={24} />
          ) : (
            <AiOutlineHome className="text-inherit" size={24} />
          )}
        </NavItem>
        <NavItem className="flex-auto h-full active:opacity-50" to="/explore">
          {pathname === "/explore" ? (
            <IoSearch className="text-inherit" size={24} />
          ) : (
            <IoSearchOutline className="text-inherit" size={24} />
          )}
        </NavItem>
        <NavItem className="flex-auto h-full active:opacity-50">
          <BsPlusSquare className="text-inherit" size={24} />
        </NavItem>
        <NavItem
          className="flex-auto h-full active:opacity-50"
          to="/accounts/activity"
        >
          {pathname === "/accounts/activity" ? (
            <AiFillHeart className="text-inherit" size={24} />
          ) : (
            <AiOutlineHeart className="text-inherit" size={24} />
          )}
        </NavItem>
        <NavItem className="flex-auto h-full active:opacity-50" to="/the_spicy">
          <Avatar
            src="/avatar.jpeg"
            alt="Profile Picture"
            activeStyle="border"
            height={24}
            width={24}
            active
          />
        </NavItem>
      </ul>
    </nav>
  );
};

export default BottomBar;

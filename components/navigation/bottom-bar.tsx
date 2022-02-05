import { useRouter } from "next/router";
import { NavItem } from ".";
import { Avatar } from "..";
import { AddIcon, HeartIcon, HomeIcon, SearchIcon } from "../icons";

const BottomBar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="sm2:hidden h-11 relative">
      <ul className="fixed z-100 bottom-0 left-0 right-0 bg-white h-11 border-t flex items-center list-none m-0">
        <NavItem to="/" className="flex-auto h-full active:opacity-50" after>
          <HomeIcon
            className="text-neutral-800"
            height={24}
            width={24}
            active={pathname === "/"}
          />
        </NavItem>
        <NavItem className="flex-auto h-full active:opacity-50" to="/explore">
          <SearchIcon
            className="text-neutral-800"
            height={24}
            width={24}
            active={pathname === "/explore"}
          />
        </NavItem>
        <NavItem className="flex-auto h-full active:opacity-50">
          <AddIcon className="text-neutral-800" height={24} width={24} />
        </NavItem>
        <NavItem
          className="flex-auto h-full active:opacity-50"
          to="/accounts/activity"
        >
          <HeartIcon
            className="text-neutral-800"
            height={24}
            width={24}
            active={pathname === "/accounts/activity"}
          />
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

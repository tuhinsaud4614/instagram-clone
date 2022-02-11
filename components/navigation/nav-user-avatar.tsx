import classNames from "classnames";
import Image from "next/image";
import { Fragment, useState } from "react";
import { BsArrowRepeat, BsGearWide } from "react-icons/bs";
import { CgBookmark } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { NavUserAvatarItem } from ".";
import { Menu } from "..";

const NavUserAvatar = () => {
  const [anchorEle, setAnchorEle] = useState<null | HTMLElement>(null);

  return (
    <Fragment>
      <span
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          setAnchorEle(event.currentTarget);
        }}
        onMouseDown={(e) => e.stopPropagation()}
        className={classNames(
          "rounded-full border  h-6 w-6 relative",
          Boolean(anchorEle) ? "border-black" : "border-transparent"
        )}
        style={{ height: 25, width: 25 }}
      >
        <Image
          src="/avatar.jpeg"
          alt="Avatar"
          height={25}
          width={25}
          className="rounded-full"
        />
      </span>
      <Menu
        open={Boolean(anchorEle)}
        onClose={() => {
          setAnchorEle(null);
        }}
        anchorEle={anchorEle}
        fraction
      >
        <ul className="list-none m-0 p-0">
          <NavUserAvatarItem
            to="xyz"
            icon={
              <FaRegUserCircle size={20} className="text-neutral-800 mr-3" />
            }
            onClick={() => {
              setAnchorEle(null);
            }}
          >
            Profile
          </NavUserAvatarItem>
          <NavUserAvatarItem
            to="/xyz/saved"
            icon={<CgBookmark size={20} className="text-neutral-800 mr-3" />}
            onClick={() => {
              setAnchorEle(null);
            }}
          >
            Saved
          </NavUserAvatarItem>
          <NavUserAvatarItem
            to="/accounts/edit"
            icon={<BsGearWide size={20} className="text-neutral-800 mr-3" />}
            onClick={() => {
              setAnchorEle(null);
            }}
          >
            Settings
          </NavUserAvatarItem>
          <NavUserAvatarItem
            icon={<BsArrowRepeat size={20} className="text-neutral-800 mr-3" />}
            onClick={() => {
              setAnchorEle(null);
            }}
          >
            Switch Account
          </NavUserAvatarItem>
          <hr className="border w-full mt-1" />
          <NavUserAvatarItem
            onClick={() => {
              setAnchorEle(null);
            }}
          >
            Logout
          </NavUserAvatarItem>
        </ul>
      </Menu>
    </Fragment>
  );
};

export default NavUserAvatar;

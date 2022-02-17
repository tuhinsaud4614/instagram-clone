import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Avatar, ListTile, Menu } from ".";
import { IAnchorOrigin } from "../utils";

interface Props {
  followed?: boolean;
  anchorEle?: null | Element;
  contentHover(): void;
  contentHoverOut(): void;
  anchorOrigin?: IAnchorOrigin;
}

const ShortProfile = ({
  anchorEle,
  contentHover,
  contentHoverOut,
  anchorOrigin,
  followed = false,
}: Props) => {
  return (
    <Menu
      open={Boolean(anchorEle)}
      anchorEle={anchorEle}
      anchorOrigin={anchorOrigin}
      hideArrow
    >
      <div
        className="w-[24.375rem] max-h-[24.375rem] flex flex-col"
        onMouseEnter={contentHover}
        onMouseLeave={contentHoverOut}
      >
        <ListTile
          classes={{ root: "p-4", title: "text-sm", subtitle: "text-sm" }}
          avatar={
            <Link href="/the_spicy">
              <a>
                <Avatar
                  src="/avatar.jpeg"
                  alt="Profile Picture"
                  height={56}
                  width={56}
                  active
                />
              </a>
            </Link>
          }
          title={
            <Link href="/the_spicy">
              <a className="active:opacity-50">the_spicy</a>
            </Link>
          }
          subtitle="The Spicy"
          body={
            <div className="pt-2">
              <p className="text-sm font-normal text-silver overflow-hidden text-ellipsis whitespace-nowrap">
                Followed by mr.spicy and 2 others
              </p>
            </div>
          }
        />
        <div className="flex p-4 border-t border-b">
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <span className="text-sm text-neutral-800 font-semibold">2</span>
            <span className="text-sm text-silver">posts</span>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <span className="text-sm text-neutral-800 font-semibold">18</span>
            <span className="text-sm text-silver">followers</span>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <span className="text-sm text-neutral-800 font-semibold">18</span>
            <span className="text-sm text-silver">followings</span>
          </div>
        </div>
        <div className="flex">
          <Link href="/p/12345">
            <a className="active:opacity-50 hover:opacity-50 ">
              <Image width={130} height={130} src="/avatar.jpeg" alt="avatar" />
            </a>
          </Link>
          <Link href="/p/12345">
            <a className="active:opacity-50 hover:opacity-50 ">
              <Image width={130} height={130} src="/avatar.jpeg" alt="avatar" />
            </a>
          </Link>
          <Link href="/p/12345">
            <a className="active:opacity-50 hover:opacity-50 ">
              <Image width={130} height={130} src="/avatar.jpeg" alt="avatar" />
            </a>
          </Link>
        </div>
        <div className="p-4 flex justify-between">
          {followed ? (
            <Fragment>
              <button className="btn-outline flex-grow mr-1">Message</button>
              <button className="btn-outline flex-grow ml-2">Following</button>
            </Fragment>
          ) : (
            <button className="btn-primary flex-grow">Follow</button>
          )}
        </div>
      </div>
    </Menu>
  );
};
export default ShortProfile;

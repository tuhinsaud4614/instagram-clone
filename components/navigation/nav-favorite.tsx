import { Fragment, useState } from "react";
import { NavFavoriteItems, NavItem } from ".";
import { Menu } from "..";
import { HeartIcon } from "../icons";

const list = [
  {
    id: "1",
    from: {
      avatar: "avatar.jpeg",
      slug: "abc",
      userName: "the_spicy",
    },
    post: { img: "avatar.jpeg", uri: "1234" },
    when: "3d",
  },
  {
    id: "2",
    from: {
      avatar: "avatar.jpeg",
      slug: "abc",
      userName: "the_spicy",
    },
    post: { img: "avatar.jpeg", uri: "1234" },
    when: "3d",
  },
  {
    id: "3",
    from: {
      avatar: "avatar.jpeg",
      slug: "abc",
      userName: "the_spicy",
    },
    post: { img: "avatar.jpeg", uri: "1234" },
    when: "3d",
  },
  {
    id: "4",
    from: {
      avatar: "avatar.jpeg",
      slug: "abc",
      userName: "the_spicy",
    },
    post: { img: "avatar.jpeg", uri: "1234" },
    when: "3d",
  },
  {
    id: "5",
    from: {
      avatar: "avatar.jpeg",
      slug: "abc",
      userName: "the_spicy",
    },
    post: { img: "avatar.jpeg", uri: "1234" },
    when: "3d",
  },
];

const NavFavorite = () => {
  const [anchorEle, setAnchorEle] = useState<null | HTMLElement>(null);
  return (
    <Fragment>
      <NavItem
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          setAnchorEle(event.currentTarget);
        }}
        className="ml-5.5 first:ml-0"
      >
        <HeartIcon
          className="text-neutral-800"
          height={24}
          width={24}
          active={Boolean(anchorEle)}
        />
      </NavItem>
      <Menu
        open={Boolean(anchorEle)}
        onClose={() => {
          setAnchorEle(null);
        }}
        anchorEle={anchorEle}
      >
        <div className="overflow-y-auto w-[31.25rem] min-h-[6.25rem] max-h-[22.625rem]">
          <NavFavoriteItems title="This Week" list={[list[0]]} />
          <hr className="border w-full" />
          <NavFavoriteItems title="This Month" list={list} />
        </div>
      </Menu>
    </Fragment>
  );
};

export default NavFavorite;

import Link from "next/link";
import { Avatar, ListTile, MoreButton, ShortProfile } from "../..";
import { useShortProfile } from "../../../hooks";

const PostCardHeader = () => {
  const {
    anchorEle,
    anchorHover,
    anchorHoverOut,
    contentHover,
    contentHoverOut,
  } = useShortProfile<HTMLAnchorElement>();

  return (
    <header className=" bg-white border-b-[0.03125rem] flex justify-between items-center">
      <ListTile
        classes={{
          root: "flex-1 py-3 pl-4 pr-1",
          title: "text-sm",
          subtitle: "text-xs",
        }}
        avatar={
          <Link href="/the_spicy">
            <a onMouseEnter={anchorHover} onMouseLeave={anchorHoverOut}>
              <Avatar
                src="/avatar.jpeg"
                alt="Profile Picture"
                height={32}
                width={32}
                active
              />
            </a>
          </Link>
        }
        title={
          <Link href="/the_spicy">
            <a
              className="active:opacity-50 "
              onMouseEnter={anchorHover}
              onMouseLeave={anchorHoverOut}
            >
              the_spicy
            </a>
          </Link>
        }
      />
      <ShortProfile
        contentHover={contentHover}
        contentHoverOut={contentHoverOut}
        anchorEle={anchorEle}
        anchorOrigin="left"
        followed
      />
      <span className="pr-2 flex items-center justify-center">
        <MoreButton />
      </span>
    </header>
  );
};

export default PostCardHeader;

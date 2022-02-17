import Link from "next/link";
import { Avatar, ListTile, ShortProfile } from "..";
import { useShortProfile } from "../../hooks/dom-hooks";

const SuggestionItem = () => {
  const {
    anchorEle,
    anchorHover,
    anchorHoverOut,
    contentHover,
    contentHoverOut,
  } = useShortProfile<HTMLAnchorElement>();

  return (
    <li className="py-2 px-4">
      <ListTile
        classes={{ title: "text-sm", subtitle: "text-xs" }}
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
              className="active:opacity-50"
              onMouseEnter={anchorHover}
              onMouseLeave={anchorHoverOut}
            >
              the_spicy
            </a>
          </Link>
        }
        subtitle="New to Instagram"
        tail={<button className="btn-text-primary text-xs">Follow</button>}
      />
      <ShortProfile
        contentHover={contentHover}
        contentHoverOut={contentHoverOut}
        anchorEle={anchorEle}
        anchorOrigin={{ horizontal: "left" }}
      />
    </li>
  );
};

export default SuggestionItem;

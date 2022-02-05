import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Avatar, ListTile, MoreButton, ShortProfile } from "..";
import { useShortProfile } from "../../hooks";
import {
  CommentIcon,
  EmojiIcon,
  HeartIcon,
  SaveIcon,
  ShareIcon,
} from "../icons";

const PostCard = () => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [more, setMore] = useState(false);
  const {
    anchorEle,
    anchorHover,
    anchorHoverOut,
    contentHover,
    contentHoverOut,
  } = useShortProfile<HTMLAnchorElement>();

  return (
    <article className="mb-[0.9375rem] last-of-type:mb-0 sm2:mb-15 sm2:border sm2:rounded-[0.1875rem]">
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
      <section className="w-full bg-silver-100">
        <div className="relative pb-[125%]">
          <div className="absolute left-0 top-0 w-full h-full">
            <div className="w-full h-full relative">
              <Image
                src="/avatar.jpeg"
                alt="Post"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col bg-white">
        <div className="px-4 mt-1 pb-2 pt-1.5 flex items-center">
          <span className="inline-block -ml-2">
            <button
              aria-label="Like"
              className={classNames(
                "flex items-center justify-center p-2",
                !like && "hover:opacity-50"
              )}
              onClick={() => setLike((prev) => !prev)}
            >
              <HeartIcon
                className={classNames(like && "animate-like")}
                color={like ? "rgb(237, 73, 86)" : "rgb(38, 38, 38)"}
                fill={like ? "rgb(237, 73, 86)" : "rgb(38, 38, 38)"}
                height={24}
                width={24}
                active={like}
              />
            </button>
          </span>
          <span className="inline-block">
            <button
              aria-label="Like"
              className="flex items-center justify-center p-2 hover:opacity-50"
            >
              <CommentIcon
                className="text-neutral-800"
                height={24}
                width={24}
              />
            </button>
          </span>
          <span className="inline-block">
            <button
              aria-label="Like"
              className="flex items-center justify-center p-2 hover:opacity-50"
            >
              <ShareIcon className="text-neutral-800" height={24} width={24} />
            </button>
          </span>
          <div className="flex-auto flex items-center justify-end">
            <button
              aria-label="Like"
              className={classNames(
                "flex items-center justify-center p-2",
                !save && "hover:opacity-50"
              )}
              onClick={() => setSave((prev) => !prev)}
            >
              <SaveIcon
                color={"rgb(38, 38, 38)"}
                fill={"rgb(38, 38, 38)"}
                height={24}
                width={24}
                className="text-neutral-800"
                active={save}
              />
            </button>
          </div>
        </div>

        <div className="flex items-center px-4 mb-2">
          <button className="text-sm font-semibold text-neutral-800">
            10,300 likes
          </button>
        </div>
        {/* description start */}
        <div className="px-4 mb-1 flex">
          <div className="flex-auto">
            <span className="relative">
              <Link href="/abcd">
                <a className="active:opacity-50 text-sm text-neutral-800 font-semibold">
                  the_spicy
                </a>
              </Link>
            </span>
            <span>&nbsp;</span>
            <span className="text-sm text-neutral-800 font-normal">
              Lorem ipsum dolor{" "}
              <Link href="/the_spicy">
                <a className="text-[#00376b] text-inherit active:opacity-50">
                  @the_spicy
                </a>
              </Link>{" "}
              Lorem ipsum
              {!more && (
                <span>
                  ....&nbsp;
                  <button
                    onClick={() => setMore(true)}
                    className="flex items-center justify-center text-silver cursor-pointer"
                  >
                    more
                  </button>
                </span>
              )}
              {more && (
                <Fragment>
                  <Link href="/explore/tags/abc">
                    <a className="text-[#00376b] text-inherit active:opacity-50">
                      #FerrariF8Tributo
                    </a>
                  </Link>{" "}
                  <Link href="/explore/tags/abc">
                    <a className="text-[#00376b] text-inherit active:opacity-50">
                      #FerrariF8Tributo
                    </a>
                  </Link>{" "}
                  <Link href="/explore/tags/abc">
                    <a className="text-[#00376b] text-inherit active:opacity-50">
                      #FerrariF8Tributo
                    </a>
                  </Link>{" "}
                  <Link href="/explore/tags/abc">
                    <a className="text-[#00376b] text-inherit active:opacity-50">
                      #FerrariF8Tributo
                    </a>
                  </Link>{" "}
                </Fragment>
              )}
            </span>
          </div>
        </div>
        {/* description end */}
        {/* comments button start */}
        <div className="px-4 mb-1 flex">
          <Link href="/p/abc">
            <a className="text-sm text-silver font-normal">
              View all 212 comments
            </a>
          </Link>
        </div>
        {/* comments button end */}
        {/* Your And Your friend Comment start */}
        <div className="px-4 mb-1 flex items-center">
          <div className="flex-auto">
            <span className="relative">
              <Link href="/abcd">
                <a className="active:opacity-50 text-sm text-neutral-800 font-semibold">
                  the_spicy
                </a>
              </Link>
            </span>
            <span>&nbsp;</span>
            <span className="text-sm text-neutral-800 font-normal">
              Lorem ipsum dolor{" "}
              <Link href="/the_spicy">
                <a className="text-[#00376b] text-inherit active:opacity-50">
                  @the_spicy
                </a>
              </Link>{" "}
              Lorem ipsum
              <span>....&nbsp;</span>
            </span>
          </div>
          <button
            aria-label="Like"
            className={classNames(
              "flex items-center justify-center w-3 h-3",
              !like && "hover:opacity-50"
            )}
            onClick={() => setLike((prev) => !prev)}
          >
            <HeartIcon
              className={classNames(like && "animate-like")}
              color={like ? "rgb(237, 73, 86)" : "rgb(38, 38, 38)"}
              fill={like ? "rgb(237, 73, 86)" : "rgb(38, 38, 38)"}
              height={12}
              width={12}
              active={like}
            />
          </button>
        </div>
        {/* Your And Your friend Comment end */}
        {/* time start */}
        <div className="px-4 mb-4">
          <time
            className="text-silver text-[0.625rem] leading-[1.125rem]"
            style={{ letterSpacing: "0.2px" }}
          >
            2 HOURS AGO
          </time>
        </div>
        {/* time end */}
        <section className="hidden px-4 py-1.5 border-t md1:flex items-center">
          <form className="flex items-center w-full">
            <span className="flex items-center justify-center py-2 pr-4">
              <button>
                <EmojiIcon
                  color={"rgb(38, 38, 38)"}
                  fill={"rgb(38, 38, 38)"}
                  height={24}
                  width={24}
                />
              </button>
            </span>
            <textarea
              className="h-4.5 max-h-20 outline-0 border-0 p-0 text-neutral-800 flex flex-grow text-sm resize-none bg-transparent"
              placeholder="Add a comment..."
            ></textarea>
            <button type="submit" className="btn-text-primary">
              Post
            </button>
          </form>
        </section>
      </footer>
    </article>
  );
};

export default PostCard;

import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { IPost } from "../../../utils/interfaces";
import { CommentIcon, HeartIcon, SaveIcon, ShareIcon } from "../../icons";
import PostCardCaption from "./post-card-caption";
import PostCardHeader from "./post-card-header";
import PostCarousel from "./post-carousel";
import PostCommentBox from "./post-comment-box";
import PostLikeBox from "./post-like-box";

interface Props {
  post: IPost;
}

const PostCard = ({ post }: Props) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <article className="mb-[0.9375rem] last-of-type:mb-0 sm2:mb-6 sm2:border sm2:rounded-[0.1875rem]">
      <PostCardHeader owner={post.owner} />
      <section className="w-full bg-silver-100">
        <PostCarousel
          resources={post.resources}
          thumbnailSrc={post.thumbnailSrc}
        />
      </section>
      <footer className="flex flex-col bg-white -mt-9 relative z-10">
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

        <PostLikeBox post={post} />
        <PostCardCaption caption={post.caption} />
        {/* comments button start */}
        <div className="px-4 mb-1 flex">
          <Link href={`/p/${post.slug}/comments`}>
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
        <PostCommentBox />
      </footer>
    </article>
  );
};

export default PostCard;

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { IPost } from "../../../utils/interfaces";

interface Props {
  post: IPost;
}

const PostLikeBox = ({ post }: Props) => {
  const likersLen = post.likers.length;

  if (likersLen === 0) {
    return (
      <div className="flex items-center px-4 mb-2">
        <Link href="/p/abc/liked_by">
          <a className="text-sm font-semibold text-neutral-800">
            {post.numLikes} likes
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center px-4 mb-2">
      <div className="flex mr-1">
        <Link href={`/p/${post.slug}/liked_by`}>
          <a className="block overflow-hidden text-ellipsis whitespace-nowrap">
            <div className="flex items-center">
              {post.likers.map((liker, index) => (
                <span
                  key={liker.id}
                  className={classNames(
                    "block relative rounded-full",
                    index === 0
                      ? "h-5 w-5"
                      : "border-2 h-6 w-6 border-white -ml-[0.3125rem]"
                  )}
                >
                  <Image
                    src={`/${post.likers[index].profilePictureUrl}`}
                    alt="Avatar"
                    height={20}
                    width={20}
                    className="rounded-full"
                  />
                </span>
              ))}
            </div>
          </a>
        </Link>
      </div>
      <div className="flex items-center flex-wrap text-sm text-neutral-800">
        Liked by&nbsp;
        <Link href={`/${post.likers[likersLen - 1].id}`}>
          <a className="active:opacity-50 font-semibold">
            {post.likers[likersLen - 1].username}
          </a>
        </Link>
        &nbsp;and&nbsp;
        <Link href={`/p/${post.slug}/liked_by`}>
          <a className="font-semibold">{post.numLikes - 1} others</a>
        </Link>
      </div>
    </div>
  );
};

export default PostLikeBox;

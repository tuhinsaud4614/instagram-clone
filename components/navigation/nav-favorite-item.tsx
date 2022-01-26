import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  from: {
    userName: string;
    slug: string;
    avatar: string;
  };
  when: string;
  post: {
    img: string;
    uri: string;
  };
}

const NavFavoriteItem = ({ from, post, when }: Props) => {
  const { push } = useRouter();
  return (
    <li
      className="px-4 py-2 flex items-center cursor-pointer"
      onClick={() => push(`/p${post.uri}`)}
    >
      <Image
        src={`/${from.avatar}`}
        alt={`${from.userName}'s Profile Picture`}
        height={44}
        width={44}
        className="rounded-full"
      />
      <div className="flex-shrink-0 flex-grow mx-3">
        <span className="font-normal text-sm text-neutral-800">
          <Link href={`/${from.slug}`}>
            <a className="text-ellipsis whitespace-nowrap font-semibold pl-1">
              {from.userName}
            </a>
          </Link>
          <span> liked your photo.</span>
        </span>
        <time className="text-silver ml-1 text-base">{when}</time>
      </div>
      <Link href={`/p${post.uri}`}>
        <a>
          <Image
            src={`/${post.img}`}
            alt="Post"
            height={40}
            width={44}
            className="flex-grow-0 flex-shrink-0 basis-auto"
          />
        </a>
      </Link>
    </li>
  );
};

export default NavFavoriteItem;

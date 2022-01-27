import Link from "next/link";
import { useRef } from "react";
import { BsHash } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { Avatar } from "../..";

interface Props {
  data: {
    id: string;
    slug: string;
    avatar?: string;
    text: string;
    title: string;
    type: "user" | "tag";
    active?: boolean;
    verified?: boolean;
  };
  onClose?(): void;
}

const SearchItem = ({
  data: {
    id,
    text,
    title,
    slug,
    avatar,
    type,
    active = false,
    verified = false,
  },
  onClose,
}: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <li aria-labelledby={id}>
      <Link href={type === "tag" ? `/explore/tags/${slug}` : `/${slug}`}>
        <a className="flex items-center px-4 py-2 hover:bg-neutral-50 focus:bg-sliver-100">
          <span className="mr-3">
            <Avatar
              active={active}
              alt="Profile Picture"
              src={avatar && `/${avatar}`}
              height={44}
              width={44}
              icon={
                type === "tag" && (
                  <BsHash size={24} className="text-neutral-800" />
                )
              }
            />
          </span>
          <div className="flex-1 basis-auto flex flex-col overflow-hidden">
            <div className="flex items-center text-ellipsis whitespace-nowrap overflow-hidden text-neutral-800 font-semibold text-sm">
              {type === "tag" && "#"}
              {title}
              {verified && <MdVerified className="text-accent ml-1" />}
            </div>
            <p className="-mt-[0.1875rem] -mb-1 block text-ellipsis whitespace-nowrap overflow-hidden text-silver font-normal text-sm">
              {text}
            </p>
          </div>
          {!!onClose && (
            <button
              ref={ref}
              type="button"
              className="flex items-center justify-center ml-2 p-2"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                return;
              }}
            >
              <IoCloseOutline size={24} className="text-silver" />
            </button>
          )}
        </a>
      </Link>
    </li>
  );
};

export default SearchItem;

import Link from "next/link";
import { HomeSuggestionBox } from ".";
import { Avatar, ListTile } from "..";

interface Props {
  left?: string;
}

const RightBox = ({ left }: Props) => {
  return (
    <aside
      className="hidden lg2:block fixed top-[5.875rem] h-screen w-full max-w-[18.3125rem]"
      style={{ left: left }}
    >
      <div className="mt-[1.125rem] mb-2.5">
        <ListTile
          classes={{ title: "text-sm", subtitle: "text-sm" }}
          avatar={
            <Avatar
              src="/avatar.jpeg"
              alt="Profile Picture"
              height={56}
              width={56}
            />
          }
          title={
            <Link href="/the_spicy">
              <a className="active:opacity-50">the_spicy</a>
            </Link>
          }
          subtitle="The Most Spicy"
        />
      </div>
      <HomeSuggestionBox />
      <div className="pb-[2.375rem]">
        <nav className="max-w-full mb-4">
          <ul className="list-none flex flex-wrap">
            <li className="after:content-['\00B7'] after:mx-[0.25em] text-silver font-normal text-[0.6875rem] leading-[0.8125rem]">
              <Link href="https://about.instagram.com">
                <a
                  className="active:opacity-50"
                  rel="noreferrer"
                  target="_blank"
                >
                  About
                </a>
              </Link>
            </li>
            <li className="after:content-['\00B7'] text-silver after:mx-[0.25em] font-normal text-[0.6875rem] leading-[0.8125rem]">
              <Link href="https://about.instagram.com">
                <a
                  className="active:opacity-50"
                  rel="noreferrer"
                  target="_blank"
                >
                  Help
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <span className="text-silver font-normal text-[0.6875rem] leading-[0.8125rem]">
          © {new Date().getFullYear()} INSTAGRAM FROM META
        </span>
      </div>
    </aside>
  );
};

export default RightBox;

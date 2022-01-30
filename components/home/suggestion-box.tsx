import Link from "next/link";
import { Avatar, ListTile } from "..";

const SuggestionBox = () => {
  return (
    <section className="bg-neutral-50 w-[calc(100%+2rem)] mb-3 -ml-4">
      <div className="py-1 px-4 mt-3 flex items-center">
        <h5 className="flex-auto text-sm font-semibold text-silver">
          Suggestions For You
        </h5>
        <Link href="/explore/people">
          <a className="text-neutral-800 text-xs font-semibold">See All</a>
        </Link>
      </div>
      <ul className="py-2 flex flex-col list-none">
        <li className="py-2 px-4">
          <ListTile
            classes={{ title: "text-sm", subtitle: "text-xs" }}
            avatar={
              <Link href="/the_spicy">
                <a>
                  <Avatar
                    src="/avatar.jpeg"
                    alt="Profile Picture"
                    height={32}
                    width={32}
                  />
                </a>
              </Link>
            }
            title={
              <Link href="/the_spicy">
                <a className="active:opacity-50">the_spicy</a>
              </Link>
            }
            subtitle="Suggested for you"
            tail={<button className="btn-text-primary text-xs">Follow</button>}
          />
        </li>
        <li className="py-2 px-4">
          <ListTile
            classes={{ title: "text-sm", subtitle: "text-xs" }}
            avatar={
              <Link href="/the_spicy">
                <a>
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
                <a className="active:opacity-50">the_spicy</a>
              </Link>
            }
            subtitle="New to Instagram"
            tail={<button className="btn-text-primary text-xs">Follow</button>}
          />
        </li>
      </ul>
    </section>
  );
};

export default SuggestionBox;

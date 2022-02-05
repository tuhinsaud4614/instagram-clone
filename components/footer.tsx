import classNames from "classnames";
import Link from "next/link";
import { IFooterClasses } from "../utils/interfaces";

const list = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Top Accounts",
  "Hashtags",
  "Locations",
  "Instagram Lite",
];

interface Props {
  classes?: IFooterClasses;
}

const Footer = ({ classes }: Props) => {
  return (
    <footer className={classNames("px-4 bg-zinc-50", classes?.root)}>
      <div className={classNames("mt-6 mb-12", classes?.container)}>
        <ul
          className={classNames(
            "list-none flex flex-wrap basis-auto justify-center",
            classes?.list
          )}
        >
          {list.map((item) => (
            <li
              className={classNames("mx-2 mb-3 flex", classes?.item)}
              key={item}
            >
              <Link href={`/${encodeURIComponent(item)}`}>
                <a className="text-silver text-xs active:opacity-50 capitalize -mt-0.5 -mb-0.5">
                  {item}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="my-3 flex basis-auto justify-center">
          <p
            className={classNames(
              "text-silver text-xs",
              classes?.copyrightText
            )}
          >
            © {new Date().getFullYear()} Instagram from Meta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

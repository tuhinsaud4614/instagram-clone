import Link from "next/link";

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

const Footer = () => {
  return (
    <footer className="hidden sm2:block px-4 bg-zinc-50">
      <div className="mt-6 mb-12">
        <ul className="list-none flex flex-wrap basis-auto justify-center">
          {list.map((item) => (
            <li className="mx-2 mb-3 flex" key={item}>
              <Link href={`/${encodeURIComponent(item)}`}>
                <a className="text-silver text-xs active:opacity-50 capitalize -mt-0.5 -mb-0.5">
                  {item}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="my-3 flex basis-auto justify-center">
          <p className="text-silver text-xs">
            © {new Date().getFullYear()} Instagram from Meta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

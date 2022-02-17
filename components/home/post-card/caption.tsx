import Link from "next/link";
import { Fragment, useMemo, useState } from "react";

interface Props {
  caption: string;
}

const SplitElement = ({ text }: { text: string }) => {
  if (/\#[a-zA-Z0-9._]+/g.test(text)) {
    return (
      <Link href={`/explore/tags/${encodeURI(text.replace("#", ""))}`}>
        <a className="text-[#00376b] text-inherit active:opacity-50 break-words">
          {text}
        </a>
      </Link>
    );
  } else if (/\@[a-zA-Z._0-9]+/g.test(text)) {
    return (
      <Link href={`/${encodeURI(text.replace("@", ""))}`}>
        <a className="text-[#00376b] text-inherit active:opacity-50">{text}</a>
      </Link>
    );
  } else if (text === "\n") {
    return <br />;
  } else {
    return <Fragment>{text}</Fragment>;
  }
};

const PostCardCaption = ({ caption }: Props) => {
  const [more, setMore] = useState(false);

  const [before, after] = useMemo(() => {
    const before: string[] = [];
    const after: string[] = [];

    let found = false;
    caption.split(/(\#[a-zA-Z0-9._]+|\@[a-zA-Z._0-9]+|\n)/g).forEach((item) => {
      if (item === "\n") {
        found = true;
      }

      if (!found) {
        before.push(item);
      } else {
        after.push(item);
      }
    });

    return [before, after] as const;
  }, [caption]);

  return (
    <div className="px-4 mb-1 flex">
      <div className="flex-auto text-sm">
        <span className="relative">
          <Link href="/abcd">
            <a className="active:opacity-50 text-sm text-neutral-800 font-semibold">
              the_spicy
            </a>
          </Link>
        </span>
        <span>&nbsp;</span>
        {before.map((item, index) => (
          <SplitElement key={index} text={item} />
        ))}
        {more ? (
          after.map((item, index) => <SplitElement key={index} text={item} />)
        ) : (
          <Fragment>
            ....&nbsp;
            <button
              onClick={() => setMore(true)}
              className="flex items-center justify-center text-silver cursor-pointer"
            >
              more
            </button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default PostCardCaption;

import { useEffect, useLayoutEffect } from "react";

const canUseDOM = typeof window !== "undefined";
export const useIsomorphicLayoutEffect = canUseDOM
  ? useLayoutEffect
  : useEffect;

export const convertPlainToHtml = (text: string) => {
  let newText = "";
  text.split(/(\#\w+|\@.*?(?=\s)|\n)/g).forEach((item) => {
    if (/#\w+/g.test(item)) {
      newText += `<Link href="/tags/${item.replace(
        "#",
        ""
      )}"><a className="text-[#00376b] text-inherit active:opacity-50">${item}</a></Link>`;
    } else if (/\@.*/g.test(item)) {
      newText += `<a className="text-[#00376b] text-inherit active:opacity-50" href="/${item.replace(
        "@",
        ""
      )}">${item}</a>`;
    } else if (item === "\n") {
      newText += "<br/>";
    } else {
      newText += item;
    }
  });
  return newText;
};

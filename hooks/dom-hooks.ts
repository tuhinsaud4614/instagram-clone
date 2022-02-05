import { MouseEvent, useEffect, useRef, useState } from "react";

export function useShortProfile<T extends Element>() {
  const [anchorEle, setAnchorEle] = useState<null | T>(null);
  const timer = useRef<number>();
  const appear = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const anchorHover = (e: MouseEvent<T>) => {
    let ele = e.currentTarget;
    appear.current = false;
    if (Boolean(anchorEle)) {
      return;
    }

    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      setAnchorEle(ele);
    }, 500);
  };

  const anchorHoverOut = (_: MouseEvent<T>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      if (!appear.current) {
        setAnchorEle(null);
      }
    }, 500);
  };

  const contentHover = () => {
    appear.current = true;
  };

  const contentHoverOut = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      appear.current = false;
      setAnchorEle(null);
    }, 500);
  };

  return {
    anchorEle,
    anchorHover,
    anchorHoverOut,
    contentHover,
    contentHoverOut,
  } as const;
}

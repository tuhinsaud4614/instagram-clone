import Link from "next/link";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { Avatar, ListTile, Menu, ShortProfile } from "..";

const SuggestionItem = () => {
  const [anchorEle, setAnchorEle] = useState<null | HTMLElement>(null);
  const timer = useRef<number>();
  const appear = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const mouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
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

  const mouseLeave = (_: MouseEvent<HTMLAnchorElement>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      if (!appear.current) {
        setAnchorEle(null);
      }
    }, 500);
  };

  return (
    <li className="py-2 px-4">
      <ListTile
        classes={{ title: "text-sm", subtitle: "text-xs" }}
        avatar={
          <Link href="/the_spicy">
            <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
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
            <a
              className="active:opacity-50"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              the_spicy
            </a>
          </Link>
        }
        subtitle="New to Instagram"
        tail={<button className="btn-text-primary text-xs">Follow</button>}
      />
      <Menu
        open={Boolean(anchorEle)}
        anchorEle={anchorEle}
        anchorOrigin="center"
        hideArrow
      >
        <div
          className="w-[24.375rem] max-h-[24.375rem] flex flex-col"
          onMouseEnter={() => {
            appear.current = true;
          }}
          onMouseLeave={() => {
            if (timer.current) {
              clearTimeout(timer.current);
            }

            timer.current = window.setTimeout(() => {
              appear.current = false;
              setAnchorEle(null);
            }, 500);
          }}
        >
          <ShortProfile onHover={mouseEnter} onHoverOut={mouseLeave} />
        </div>
      </Menu>
    </li>
  );
};

export default SuggestionItem;

import classNames from "classnames";
import { Fragment, ReactNode, useLayoutEffect, useRef, useState } from "react";

interface Props {
  open: boolean;
  anchorEle?: null | Element;
  children?: ReactNode;
  onClose?(): void;
}

const Menu = ({ open = false, anchorEle, onClose, children }: Props) => {
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const [menuRect, setMenuRect] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handler = () => {
      if (ref.current) {
        setMenuRect(ref.current.getBoundingClientRect());
      }

      if (anchorEle) {
        setAnchorRect(anchorEle.getBoundingClientRect());
      }
    };

    handler();
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, [anchorEle]);

  if (!open) {
    return null;
  }

  return (
    <Fragment>
      <div onClick={onClose} className="fixed z-50 inset-0" />
      <div
        ref={ref}
        className={classNames("fixed z-100 bg-white shadow-menu rounded-md")}
        style={{
          ...(anchorRect &&
            menuRect && {
              left: anchorRect.right - menuRect.width * 0.89,
              top: anchorRect.bottom + anchorRect.width / 2,
            }),
        }}
      >
        <span
          className="fixed block bg-white transform rotate-45 shadow-menu w-3.5 h-3.5"
          style={{
            ...(anchorRect && {
              left: anchorRect.left + 7,
              top: anchorRect.bottom + anchorRect.width / 4,
            }),
          }}
        />
        <section className="relative z-10 w-full h-full bg-white rounded-md overflow-hidden">
          {children}
        </section>
      </div>
    </Fragment>
  );
};

export default Menu;

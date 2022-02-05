import classNames from "classnames";
import { ReactNode, useRef, useState } from "react";
import { Portal } from ".";
import { useIsomorphicLayoutEffect } from "../utils";

interface Props {
  open: boolean;
  anchorEle?: null | Element;
  children?: ReactNode;
  onClose?(): void;
  anchorOrigin?: "center" | "right" | "left";
  hideArrow?: boolean;
}

const Menu = ({
  open = false,
  anchorEle,
  onClose,
  anchorOrigin = "right",
  hideArrow = false,
  children,
}: Props) => {
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const [menuRect, setMenuRect] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
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

  let rootLeft =
    anchorRect && menuRect ? anchorRect.right - menuRect.width * 0.89 : 0;
  let arrowLeft = anchorRect ? anchorRect.left + 7 : 0;

  if (!open) {
    return null;
  }

  if (anchorOrigin === "center") {
    rootLeft =
      anchorRect && menuRect
        ? anchorRect.left - (menuRect.width - anchorRect.width) / 2
        : 0;
    arrowLeft =
      anchorRect && menuRect ? anchorRect.left + (anchorRect.width / 2 - 7) : 0;
  } else if (anchorOrigin === "left") {
    rootLeft = anchorRect && menuRect ? anchorRect.left : 0;
    arrowLeft =
      anchorRect && menuRect ? anchorRect.left + (anchorRect.width / 2 - 7) : 0;
  }

  return (
    <Portal>
      {!!onClose && <div onClick={onClose} className="fixed z-50 inset-0" />}
      <div
        ref={ref}
        className={classNames("fixed z-100 bg-white shadow-menu rounded-md")}
        style={{
          ...(anchorRect &&
            menuRect && {
              left: rootLeft,
              top: hideArrow ? anchorRect.bottom : anchorRect.bottom + 14,
            }),
        }}
      >
        {!hideArrow && (
          <span
            className="fixed block bg-white transform rotate-45 shadow-menu w-3.5 h-3.5"
            style={{
              ...(anchorRect && {
                left: arrowLeft,
                top: anchorRect.bottom + 7,
              }),
            }}
          />
        )}
        <section className="relative z-10 w-full h-full bg-white rounded-md overflow-hidden">
          {children}
        </section>
      </div>
    </Portal>
  );
};

export default Menu;

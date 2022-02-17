import classNames from "classnames";
import { Fragment, useState } from "react";
import { Dialog } from ".";
import { CloseIcon, ShareIcon } from "./icons";

const ShareButton = () => {
  const [show, setShow] = useState(false);
  const [tap, setTap] = useState(false);
  const [showPill, setShowPill] = useState(true);
  // console.log("tap", tap);
  // console.log("showPill", showPill);

  return (
    <Fragment>
      <button
        aria-label="Like"
        className="flex items-center justify-center p-2 hover:opacity-50"
        onClick={() => setShow(true)}
      >
        <ShareIcon className="text-neutral-800" height={24} width={24} />
      </button>
      <Dialog
        show={show}
        onClose={() => setShow(false)}
        classes={{
          backdrop: "flex-col",
          container:
            "flex-grow md1:flex-grow-0 w-full max-h-full md1:w-[34.25rem] md1:m-5 md1:max-h-[calc(100%-40px)]",
          root: "rounded-0 md1:rounded-xl",
        }}
        header={
          <header className="flex items-center justify-between px-4 border-b h-11">
            <span className="basis-8" />
            <h1 className="font-semibold text-neutral-800 flex-1 text-center text-ellipsis whitespace-nowrap">
              Share
            </h1>
            <span className="flex items-center justify-end">
              <button className="basis-8" onClick={() => setShow(false)}>
                <CloseIcon
                  color={"rgb(38, 38, 38)"}
                  fill={"rgb(38, 38, 38)"}
                  height={24}
                  width={24}
                />
              </button>
            </span>
          </header>
        }
      >
        <section className="flex flex-col">
          <div className="my-2 flex items-center flex-wrap max-h-[15.625rem]">
            <span className="px-3 py-1 text-center text-base text-neutral-800 font-semibold">
              To:
            </span>
            <div className="flex shrink-0">
              {showPill && (
                <span
                  className={classNames(
                    "rounded flex items-center justify-center m-1 px-3 h-[2.1875rem] bg-[#e0f1ff] text-sm text-accent",
                    tap && "bg-accent text-white"
                  )}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <button
                    className="inline-block text-inherit text-ellipsis text-center"
                    onClick={() => {
                      setTap((prev) => !prev);
                      console.log(tap);

                      if (tap) {
                        setShowPill(false);
                      }
                    }}
                    onBlur={() => setTap(false)}
                  >
                    the_spicy
                  </button>
                  {tap && (
                    <button
                      className="flex items-center ml-2"
                      onClick={() => setShowPill(false)}
                    >
                      <CloseIcon
                        fill="rgb(255, 255, 255)"
                        color="rgb(255, 255, 255)"
                        height={12}
                        width={12}
                      />
                    </button>
                  )}
                </span>
              )}
              <input
                className="py-1 px-3 text-sm text-neutral-800 leading-[1.875rem] bg-transparent border-0 outline-0"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex-auto"></div>
        </section>
      </Dialog>
    </Fragment>
  );
};

export default ShareButton;

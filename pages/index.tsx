import Link from "next/link";
import { Fragment, ReactElement, useRef, useState } from "react";
import { Logo, Wrapper } from "../components";
import { HomePostsBox, HomeRightBox, StoryBox } from "../components/home";
import { CameraIcon, MessengerIcon } from "../components/icons";
import { AppBar } from "../components/navigation";
import { useIsomorphicLayoutEffect } from "../utils";

Home.getLayout = (page: ReactElement) => {
  return (
    <Wrapper
      showNavbar
      appBar={
        <AppBar
          leading={
            <button className="text-neutral-800 text-sm">
              <CameraIcon className="text-neutral-800" height={24} width={24} />
            </button>
          }
          title={<Logo />}
          actions={
            <Link href="/direct/inbox">
              <a>
                <MessengerIcon
                  className="text-neutral-800"
                  height={24}
                  width={24}
                />
              </a>
            </Link>
          }
        />
      }
      classes={{ footer: { container: "hidden sm2:block lg2:hidden" } }}
    >
      {page}
    </Wrapper>
  );
};

export default function Home() {
  const [leftRect, setLeftRect] = useState<DOMRect | null>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const handler = () => {
      if (leftRef.current) {
        setLeftRect(leftRef.current.getBoundingClientRect());
      }
    };

    handler();
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <Fragment>
      <section className="max-w-screen-sm1 lg2:max-w-[58.4375rem] mx-auto w-full sm2:pt-7.5 flex flex-grow flex-nowrap">
        <div ref={leftRef} className="lg2:mr-7 max-w-[38.375rem] w-full">
          <StoryBox />
          <HomePostsBox />
        </div>
        <HomeRightBox
          left={leftRect ? `${leftRect.right / 16 + 1.75}rem` : undefined}
        />
      </section>
    </Fragment>
  );
}

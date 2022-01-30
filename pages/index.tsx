import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { Logo, Wrapper } from "../components";
import { HomeRightBox } from "../components/home";
import { AppBar } from "../components/navigation";

const Home: NextPage = () => {
  const [leftRect, setLeftRect] = useState<DOMRect | null>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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
    <Wrapper
      showNavbar
      hideFooter
      appBar={
        <AppBar
          leading={
            <button className="text-neutral-800 text-sm">
              <FiCamera size={24} className="text-inherit" />
            </button>
          }
          title={<Logo />}
          actions={
            <Link href="/direct/inbox">
              <a>
                <BsChatDots className="text-inherit" size={24} />
              </a>
            </Link>
          }
        />
      }
    >
      <Head>
        <title>Instagram</title>
      </Head>
      <section className="max-w-screen-sm1 lg2:max-w-[58.4375rem] mx-auto w-full sm2:pt-7.5 flex flex-grow flex-nowrap">
        <div ref={leftRef} className="lg2:mr-7 max-w-[38.375rem] w-full">
          Left
        </div>
        <HomeRightBox
          left={leftRect ? `${leftRect.right / 16 + 1.75}rem` : undefined}
        />
      </section>
    </Wrapper>
  );
};

export default Home;

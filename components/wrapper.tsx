import { ReactNode } from "react";
import { Footer } from ".";
import { Nav } from "./navigation";
import BottomBar from "./navigation/bottom-bar";

interface Props {
  children?: ReactNode;
  showNavbar?: boolean;
  hideFooter?: boolean;
  hideBottomBar?: boolean;
  appBar?: ReactNode;
}

const Wrapper = ({
  showNavbar = false,
  hideFooter = false,
  hideBottomBar = false,
  appBar,
  children,
}: Props) => {
  return (
    <section className="min-h-screen overflow-hidden flex flex-col">
      {!!appBar && appBar}
      {showNavbar && <Nav />}
      <main className="flex flex-col flex-grow bg-zinc-50">{children}</main>
      {!hideBottomBar && <BottomBar />}
      {!hideFooter && <Footer />}
    </section>
  );
};

export default Wrapper;

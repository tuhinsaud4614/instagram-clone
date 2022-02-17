import { ReactNode } from "react";
import { Footer } from ".";
import { IFooterClasses } from "../utils";
import { BottomBar, Nav } from "./navigation";

interface Props {
  children?: ReactNode;
  showNavbar?: boolean;
  hideFooter?: boolean;
  hideBottomBar?: boolean;
  appBar?: ReactNode;
  classes?: { footer?: IFooterClasses };
}

const Wrapper = ({
  showNavbar = false,
  hideFooter = false,
  hideBottomBar = false,
  appBar,
  children,
  classes,
}: Props) => {
  return (
    <section className="min-h-screen overflow-hidden flex flex-col">
      {!!appBar && appBar}
      {showNavbar && <Nav />}
      <main className="flex flex-col flex-grow bg-zinc-50">{children}</main>
      {!hideBottomBar && <BottomBar />}
      {!hideFooter && <Footer classes={classes?.footer} />}
    </section>
  );
};

export default Wrapper;

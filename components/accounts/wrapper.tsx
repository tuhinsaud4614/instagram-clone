import { ReactNode } from "react";
import { Footer } from "..";
import { Nav } from "../navigation";

interface Props {
  children?: ReactNode;
  showNavbar?: boolean;
}

const Wrapper = ({ showNavbar = false, children }: Props) => {
  return (
    <section className="min-h-screen overflow-hidden flex flex-col">
      {showNavbar && <Nav hideLinks hideSearch />}
      <main className="flex flex-col flex-grow bg-zinc-50">{children}</main>
      <Footer />
    </section>
  );
};

export default Wrapper;

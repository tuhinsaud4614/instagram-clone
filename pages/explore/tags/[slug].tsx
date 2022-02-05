import Link from "next/link";
import { ReactElement } from "react";
import { BsChatDots } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { Logo, Wrapper } from "../../../components";
import { AppBar } from "../../../components/navigation";

TagProfile.getLayout = (page: ReactElement) => {
  return (
    <Wrapper
      showNavbar
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
      classes={{ footer: { container: "hidden sm2:block lg2:hidden" } }}
    >
      {page}
    </Wrapper>
  );
};

export default function TagProfile() {
  return <div>Tag Profile</div>;
}

import Link from "next/link";
import { Fragment, ReactElement } from "react";
import { Logo, Wrapper } from "../../../../components";
import { CameraIcon, MessengerIcon } from "../../../../components/icons";
import { AppBar } from "../../../../components/navigation";

Comments.getLayout = (page: ReactElement) => {
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

export default function Comments() {
  return <Fragment>Comments</Fragment>;
}

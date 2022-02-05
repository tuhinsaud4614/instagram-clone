import { ReactNode } from "react";

interface Props {
  leading?: ReactNode;
  actions?: ReactNode;
  title?: ReactNode;
}

const AppBar = ({ leading, actions, title }: Props) => {
  return (
    <header className="sm2:hidden relative h-[2.8125rem]">
      <div className="bg-white border-b z-100 fixed top-0 left-0 right-0 px-4 flex justify-between items-center h-11 w-full">
        {leading && <div className="basis-8 flex">{leading}</div>}
        {title && (
          <h1 className="flex-1 text-neutral-800 text-center text-ellipsis whitespace-nowrap flex justify-center items-center overflow-hidden">
            {title}
          </h1>
        )}
        {actions && <div className="basis-8 flex justify-end">{actions}</div>}
      </div>
    </header>
  );
};

export default AppBar;

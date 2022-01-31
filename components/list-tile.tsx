import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  avatar?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  tail?: ReactNode;
  body?: ReactNode;
  classes?: {
    root?: string;
    avatar?: string;
    main?: string;
    title?: string;
    subtitle?: string;
    tail?: string;
  };
}

const ListTile = ({ title, avatar, subtitle, tail, body, classes }: Props) => {
  return (
    <div className={classNames("flex items-center", classes?.root)}>
      {avatar && (
        <div className={classNames("mr-3 flex-shrink-0", classes?.avatar)}>
          {avatar}
        </div>
      )}
      <div
        className={classNames(
          "flex-1 flex flex-col justify-center",
          classes?.main
        )}
      >
        <h3
          className={classNames(
            "text-ellipsis text-neutral-800 font-semibold overflow-x-hidden",
            classes?.title
          )}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className={classNames(
              "font-normal text-silver overflow-hidden text-ellipsis whitespace-nowrap",
              classes?.subtitle
            )}
          >
            {subtitle}
          </p>
        )}
        {body}
      </div>
      {tail && (
        <div className={classNames("ml-2 flex-shrink-0", classes?.tail)}>
          {tail}
        </div>
      )}
    </div>
  );
};

export default ListTile;

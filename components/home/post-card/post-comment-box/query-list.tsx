import classNames from "classnames";
import { demoTags, demoUsers } from "../../../../utils/demo-data";
import { ITag, IUser } from "../../../../utils/interfaces";
import { Spinner } from "../../../icons";
import PostCommentQueryItem from "./query-item";

interface Props {
  query: { value: string; type: "#" | "@" } | null;
  onSelect: (type: ITag | IUser) => void;
}

const PostCommentQueryList = ({ query, onSelect }: Props) => {
  return (
    <ul
      className={classNames(
        "h-[12.5rem] w-[16.875rem] list-none m-0",
        query
          ? "overflow-x-hidden overflow-y-auto"
          : "flex items-center justify-center"
      )}
    >
      {query ? (
        query.type === "#" ? (
          demoTags.map((tag) => (
            <li
              className="block border-b last-of-type:border-b-0 active:opacity-50 cursor-pointer"
              key={tag.id}
              onClick={() => onSelect(tag)}
            >
              <PostCommentQueryItem type={tag} />
            </li>
          ))
        ) : (
          demoUsers.map((user) => (
            <li
              className="block border-b last-of-type:border-b-0 active:opacity-50 cursor-pointer"
              key={user.id}
              onClick={() => onSelect(user)}
            >
              <PostCommentQueryItem key={user.id} type={user} />
            </li>
          ))
        )
      ) : (
        <Spinner />
      )}
    </ul>
  );
};

export default PostCommentQueryList;

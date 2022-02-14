import { MdVerified } from "react-icons/md";
import { Avatar, ListTile } from "../../..";
import { ITag, IUser } from "../../../../utils/interfaces";

interface Props {
  type: ITag | IUser;
}

const PostCommentQueryItem = ({ type }: Props) => {
  if ("username" in type) {
    return (
      <ListTile
        classes={{
          title: "text-sm",
          subtitle: "text-sm",
          root: "py-1.5 px-4",
        }}
        avatar={
          <Avatar
            src={`/${type.profilePictureUrl}`}
            alt="Profile Picture"
            height={28}
            width={28}
          />
        }
        title={
          <div className="flex items-center">
            <span className="text-inherit">{type.username}</span>
            {type.isVerified && (
              <MdVerified size={12} className="text-accent ml-1" />
            )}
          </div>
        }
        subtitle={type.fullName}
      />
    );
  }

  return (
    <ListTile
      classes={{
        title: "text-sm font-semibold",
        subtitle: "text-base",
        root: "py-1.5 px-4",
      }}
      title={`#${type.title}`}
      subtitle={`${type.posts} post${type.posts > 1 ? "s" : ""}`}
    />
  );
};

export default PostCommentQueryItem;

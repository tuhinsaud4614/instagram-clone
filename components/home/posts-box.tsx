import { demoPosts } from "../../utils/demo-data";
import { Spinner } from "../icons";
import PostCard from "./post-card/index";

const PostsBox = () => {
  return (
    <div className="flex flex-col">
      {demoPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <div className="h-12 mt-10 flex items-center justify-center">
        <span className="block h-8 w-8">
          <Spinner />
        </span>
      </div>
    </div>
  );
};

export default PostsBox;

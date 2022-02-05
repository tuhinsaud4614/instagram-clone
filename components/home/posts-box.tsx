import { HomePostCard } from ".";
import { Spinner } from "../icons";

const PostsBox = () => {
  return (
    <div className="flex flex-col">
      <HomePostCard />
      <HomePostCard />
      <div className="h-12 mt-10 flex items-center justify-center">
        <span className="block h-8 w-8">
          <Spinner />
        </span>
      </div>
    </div>
  );
};

export default PostsBox;

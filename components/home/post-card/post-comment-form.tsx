import { EmojiIcon } from "../../icons";

const PostCommentForm = () => {
  return (
    <section className="hidden px-4 py-1.5 border-t md1:flex items-center">
      <form className="flex items-center w-full">
        <span className="flex items-center justify-center py-2 pr-4">
          <button type="button">
            <EmojiIcon
              color={"rgb(38, 38, 38)"}
              fill={"rgb(38, 38, 38)"}
              height={24}
              width={24}
            />
          </button>
        </span>
        <textarea
          className="h-4.5 max-h-20 outline-0 border-0 p-0 text-neutral-800 flex flex-grow text-sm resize-none bg-transparent"
          placeholder="Add a comment..."
        ></textarea>
        <button type="submit" className="btn-text-primary">
          Post
        </button>
      </form>
    </section>
  );
};

export default PostCommentForm;

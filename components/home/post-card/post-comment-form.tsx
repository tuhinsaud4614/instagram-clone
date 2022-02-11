import { FC, Fragment, memo, useState } from "react";
import { Menu } from "../..";
import { emojis } from "../../../utils/demo-data";
import { EmojiIcon } from "../../icons";

const EmojiButton: FC<{ onChange?: (value: string) => void }> = memo(
  ({ onChange }) => {
    const [anchorEle, setAnchorEle] = useState<null | HTMLButtonElement>(null);

    return (
      <Fragment>
        <button
          type="button"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEle(event.currentTarget);
          }}
        >
          <EmojiIcon
            color={"rgb(38, 38, 38)"}
            fill={"rgb(38, 38, 38)"}
            height={24}
            width={24}
          />
        </button>
        <Menu
          open={Boolean(anchorEle)}
          anchorEle={anchorEle}
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
          onClose={() => {
            setAnchorEle(null);
          }}
          fraction={0.05}
        >
          <section className="w-[18.4375rem] h-[19.3125rem] overflow-y-auto overflow-x-hidden">
            {Object.entries(emojis).map((item) => {
              return (
                <Fragment key={item[0]}>
                  <h3 className="p-2 text-sm font-semibold text-silver capitalize">
                    {item[0]}
                  </h3>
                  <div className="flex flex-wrap">
                    {item[1].map((emoji, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          onChange && onChange(emoji);
                        }}
                        className="h-[1.5625rem] text-[1.5625rem] flex items-center justify-center m-2"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </Fragment>
              );
            })}
          </section>
        </Menu>
      </Fragment>
    );
  },
  () => true
);
EmojiButton.displayName = "EmojiButton";

const PostCommentForm = () => {
  const [value, setValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(18);

  return (
    <section className="hidden px-4 py-1.5 border-t md1:flex items-center">
      <form className="flex items-center w-full">
        <span className="flex items-center justify-center py-2 pr-4">
          <EmojiButton
            onChange={(emojiValue) => setValue((prev) => prev + emojiValue)}
          />
        </span>
        <textarea
          className="max-h-20 outline-0 border-0 p-0 text-neutral-800 flex flex-grow text-sm resize-none bg-transparent"
          placeholder="Add a comment..."
          value={value}
          style={{ height: textareaHeight }}
          onChange={(e) => {
            const value = e.target.value;
            const lines = value.split(/\r*\n/).length;
            setTextareaHeight(lines * 18);
            setValue(value);
          }}
        ></textarea>
        <button type="submit" className="btn-text-primary">
          Post
        </button>
      </form>
    </section>
  );
};

export default PostCommentForm;

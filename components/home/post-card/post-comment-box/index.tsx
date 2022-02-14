import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Menu } from "../../..";
import { ITag, IUser } from "../../../../utils/interfaces";
import EmojiButton from "./emoji-button";
import PostCommentQueryList from "./query-list";

const getValue = (
  value: string,
  position: number
): { value: string; type: "#" | "@" } | null => {
  let newValue = value[position];

  while (position > 0) {
    if (!/[a-zA-Z0-9._]/g.test(value[position])) {
      newValue = "";
      break;
    }
    newValue = value[--position] + newValue;
    if (value[position] === "@" || value[position] === "#") {
      break;
    }
  }

  if (newValue && newValue[0] === "#") {
    return { type: "#", value: newValue.replace("#", "") };
  }

  if (newValue && newValue[0] === "@") {
    return { type: "@", value: newValue.replace("@", "") };
  }

  return null;
};

const replaceQuery = (
  prevValue: string,
  replaceValue: string,
  position: number
) => {
  let temp = "";
  let found = false;
  let left = prevValue.slice(0, position);
  prevValue = prevValue.slice(position);
  position -= 1;
  while (position >= 0) {
    if (left[position] === "@" || left[position] === "#") {
      found = true;
    }
    if (found) {
      temp = left[position] + temp;
    }
    position--;
  }

  left = (temp + replaceValue).replace(/[\" \"]+/g, " ");
  return [
    `${left} ${prevValue.replace(/[\" \"]+/g, " ")}`,
    left.length,
  ] as const;
};
// tuhin @sau saud @tt rayhan

const PostCommentBox = () => {
  const ref = useRef<HTMLElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const textareaSelection = useRef(0);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState<{ value: string; type: "#" | "@" } | null>(
    null
  );

  const valueLength = value.split(/\r*\n/).length;

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  const selectHandler = (type: ITag | IUser) => {
    if (textareaRef.current) {
      const result = replaceQuery(
        textareaRef.current.value,
        "username" in type ? type.username : type.title,
        textareaSelection.current
      );
      textareaRef.current.focus();
      setValue(result[0]);
      setQuery(null);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = result[1] + 1;
          textareaRef.current.selectionEnd = result[1] + 1;
        }
      });
    }
  };

  return (
    <section
      ref={ref}
      className="hidden px-4 py-1.5 border-t md1:flex items-center"
    >
      <form className="flex items-center w-full">
        <span className="flex items-center justify-center py-2 pr-4">
          <EmojiButton
            onChange={(emojiValue) => setValue((prev) => prev + emojiValue)}
          />
        </span>
        <textarea
          ref={textareaRef}
          className={classNames(
            "max-h-20 outline-0 border-0 p-0 text-neutral-800 flex flex-grow text-sm resize-none bg-transparent",
            valueLength === 1 && "overflow-y-hidden"
          )}
          placeholder="Add a comment..."
          value={value}
          style={{ height: valueLength * 18 }}
          onChange={(e) => {
            setValue(e.target.value);
            const queryValue = getValue(
              e.target.value,
              e.target.selectionStart - 1
            );
            textareaSelection.current = e.target.selectionStart;
            setQuery(queryValue);
          }}
        />
        <button type="submit" className="btn-text-primary">
          Post
        </button>
      </form>
      <Menu
        open={!!query?.value}
        anchorEle={ref.current}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        onClose={() => setQuery(null)}
        fraction={-0.045}
        hideArrow
      >
        {!!query?.value && (
          <PostCommentQueryList query={query} onSelect={selectHandler} />
        )}
      </Menu>
    </section>
  );
};

export default PostCommentBox;

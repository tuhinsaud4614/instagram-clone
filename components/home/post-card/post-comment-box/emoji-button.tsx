import { Fragment, memo, useState } from "react";
import { Menu } from "../../..";
import { emojis } from "../../../../utils";
import { EmojiIcon } from "../../../icons";

const EmojiButton = ({ onChange }: { onChange?: (value: string) => void }) => {
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
                <div className="flex flex-wrap justify-center">
                  {item[1].map((emoji, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onChange && onChange(emoji);
                      }}
                      className="h-[1.5625rem] w-[1.5625rem] text-[1.5625rem] flex items-center justify-center m-2"
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
};

export default memo(EmojiButton, () => true);

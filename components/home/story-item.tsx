import { AiFillPlusCircle } from "react-icons/ai";
import { Avatar } from "..";

interface Props {
  own?: boolean;
}

const StoryItem = ({ own = false }: Props) => {
  return (
    <button className="px-2 pt-1 w-20 flex flex-col justify-center items-center relative select-none">
      <Avatar
        height={56}
        width={56}
        src="/avatar.jpeg"
        alt="Profile Picture"
        active={!own}
      />
      {own && (
        <span className="absolute top-[2.25rem] right-1 bg-white rounded-full p-[0.0625rem] z-50">
          <AiFillPlusCircle size={20} className="text-accent" />
        </span>
      )}
      <span className="text-neutral-800 text-xs tracking-[.01em] text-ellipsis whitespace-nowrap inline-block mt-2 max-w-[4.625rem] overflow-hidden">
        {own ? "Your Story" : "the_spicyggggg"}
      </span>
    </button>
  );
};

export default StoryItem;

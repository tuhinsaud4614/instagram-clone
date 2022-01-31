import { Avatar } from "..";

const StoryBox = () => {
  return (
    <div className="p-4 rounded-[0.1875rem] mb-6 border bg-white overflow-hidden">
      <div className="flex items-center">
        <ul className="list-none">
          <li>
            <button className="flex flex-col">
              <Avatar
                height={56}
                width={56}
                src="/avatar.jpeg"
                alt="Profile Picture"
                active
              />
              <span className="text-neutral-800 text-xs tracking-[.01em] text-ellipsis whitespace-nowrap inline-block mt-2 max-w-[4.625rem] overflow-hidden">
                the_spicyggggg
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StoryBox;

import SearchItem from "./search-item";

const histories: {
  id: string;
  slug: string;
  avatar?: string;
  text: string;
  title: string;
  type: "user" | "tag";
  active?: boolean;
  verified?: boolean;
}[] = [
  {
    id: "1",
    slug: "abc",
    text: "444,444,444 posts",
    title: "abc",
    type: "tag",
  },
  {
    id: "2",
    slug: "the_spicy",
    text: "ABC • Followed by the_spicy + 31 more",
    title: "the_spicy",
    type: "user",
    avatar: "avatar.jpeg",
    active: true,
    verified: true,
  },
  {
    id: "3",
    slug: "abc",
    text: "444,444,444 posts",
    title: "abc",
    type: "tag",
  },
  {
    id: "4",
    slug: "the_spicy",
    text: "ABC • Followed by the_spicy + 31 more",
    title: "the_spicy",
    type: "user",
    avatar: "avatar.jpeg",
  },
  {
    id: "5",
    slug: "the_spicy",
    text: "ABC • Followed by the_spicy + 31 more",
    title: "the_spicy",
    type: "user",
  },
  {
    id: "6",
    slug: "the_spicy",
    text: "ABC • Followed by the_spicy + 31 more",
    title: "the_spicy",
    type: "user",
    verified: true,
  },
];

const SearchResultBox = () => {
  let hasHistory = true;
  return (
    <section className="flex flex-col w-full h-full">
      <div className="mx-4 mt-1 flex items-center justify-between">
        <h4 className="text-neutral-800 font-semibold">Recent</h4>
        <button type="button" className="btn-text-primary inline-block">
          Clear All
        </button>
      </div>
      {!hasHistory ? (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-sm text-sliver-300 font-semibold">
            No recent searches
          </p>
        </div>
      ) : (
        <ul className="list-none mt-2">
          {histories.map((history, index) => (
            <SearchItem
              key={history.id}
              data={history}
              onClose={
                index % 2 === 0
                  ? () => {
                      console.log("hello");
                    }
                  : undefined
              }
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default SearchResultBox;

import { NavFavoriteItem } from ".";

interface Props {
  title: string;
  list: {
    id: string;
    from: {
      avatar: string;
      slug: string;
      userName: string;
    };
    post: {
      img: string;
      uri: string;
    };
    when: string;
  }[];
}
const NavFavoriteItems = ({ title, list }: Props) => {
  return (
    <section className="flex flex-col">
      <p className="px-3 pt-2 pb-1 font-semibold text-sm text-neutral-800">
        {title}
      </p>
      <ul className="list-none m-0 p-0">
        {list.map((li) => (
          <NavFavoriteItem
            key={li.id}
            from={li.from}
            when={li.when}
            post={li.post}
          />
        ))}
      </ul>
    </section>
  );
};

export default NavFavoriteItems;

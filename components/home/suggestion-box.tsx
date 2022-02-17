import Link from "next/link";
import { HomeSuggestionItem } from ".";

const SuggestionBox = () => {
  return (
    <section className="bg-neutral-50 w-[calc(100%+2rem)] mb-3 -ml-4">
      <div className="py-1 px-4 mt-3 flex items-center">
        <h5 className="flex-auto text-sm font-semibold text-silver">
          Suggestions For You
        </h5>
        <Link href="/explore/people">
          <a className="text-neutral-800 text-xs font-semibold">See All</a>
        </Link>
      </div>
      <ul className="py-2 flex flex-col list-none">
        <HomeSuggestionItem />
        <HomeSuggestionItem />
      </ul>
    </section>
  );
};

export default SuggestionBox;

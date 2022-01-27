import {
  ChangeEvent,
  FocusEvent,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { SearchResultBox } from "..";
import { Menu, Spinner } from "../..";

const fakePromise = new Promise((res, _) => {
  setTimeout(() => {
    res("");
  }, 2000);
});

const SearchBox = () => {
  const [focus, setFocus] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [value, setValue] = useState("");
  const [anchorEle, setAnchorEle] = useState<null | HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      setFetching(true);
      await fakePromise;
      setFetching(false);
    })();
  }, [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    setAnchorEle(anchorRef.current);
    setFocus(true);
  };

  const onBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(false);
  };

  return (
    <Fragment>
      <Menu
        open={Boolean(anchorEle)}
        onClose={() => {
          setAnchorEle(null);
        }}
        anchorEle={anchorEle}
        anchorOrigin="center"
      >
        <div className="w-[375px] h-[362px] pt-3 overflow-x-hidden overflow-y-auto">
          <SearchResultBox />
        </div>
      </Menu>
      <div
        ref={anchorRef}
        className={
          "hidden sm:block relative h-9 flex-shrink flex-grow-0 basis-auto bg-sliver-100 rounded-lg overflow-hidden w-[16.75rem] min-w-[7.8125rem]"
        }
      >
        <input
          ref={inputRef}
          className="absolute z-20 h-full w-full text-base bg-transparent px-4 py-0.75 outline-0 placeholder:text-base placeholder:text-silver placeholder:font-light"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={focus ? "Search" : ""}
          value={focus ? value : ""}
        />
        {!focus && (
          <div className="absolute inset-0 px-4 py-0.75 flex items-center z-10">
            <FiSearch className="text-silver mr-3" />
            <span className={"text-silver text-base font-light"}>
              {value || "Search"}
            </span>
          </div>
        )}
        {focus && (
          <div
            onMouseDown={(e) => e.preventDefault()}
            className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center z-30 cursor-pointer"
          >
            {fetching && <Spinner />}
            {!fetching && (
              <IoIosCloseCircle
                onClick={(e) => {
                  setValue("");
                  setFocus(false);
                  inputRef.current && inputRef.current.blur();
                }}
                className="text-silver"
              />
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default SearchBox;

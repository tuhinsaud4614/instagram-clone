import classNames from "classnames";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { Spinner } from ".";
import styles from "../styles/SearchBox.module.css";

const fakePromise = new Promise((res, _) => {
  setTimeout(() => {
    res("");
  }, 2000);
});

const SearchBox = () => {
  const [focus, setFocus] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // console.log("hello");

    (async () => {
      setFetching(true);
      await fakePromise;
      setFetching(false);
    })();
  }, [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div
      className={classNames(
        "hidden sm:block relative h-9 flex-shrink flex-grow-0 basis-auto bg-sliver-100 rounded-lg overflow-hidden",
        styles.Root
      )}
    >
      <input
        ref={inputRef}
        className="absolute z-20 h-full w-full text-base bg-transparent px-4 py-0.75 outline-0 placeholder:text-base placeholder:text-silver placeholder:font-light"
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={(e) => setFocus(false)}
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
  );
};

export default SearchBox;

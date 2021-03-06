import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slides = ({ data }: { data: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let timer: number | null = null;
    timer = window.setTimeout(() => {
      if (current === data.length - 1) {
        setCurrent(0);
      } else {
        setCurrent((prev) => ++prev);
      }
    }, 5000);
    return () => {
      timer && clearTimeout(timer);
    };
  }, [current, data]);

  return (
    <ul
      className="list-none flex relative"
      style={{ marginTop: 99, marginLeft: 151 }}
    >
      {data.map((li, index) => (
        <li
          key={li}
          style={{ width: 240, height: 427, transitionDuration: "2.5s" }}
          className={classNames(
            "absolute top-0 left-0",
            current === index ? "visible opacity-100" : "invisible opacity-0"
          )}
        >
          <Image src={`/${li}`} alt={li} width={240} height={427} />
        </li>
      ))}
    </ul>
  );
};

export default Slides;

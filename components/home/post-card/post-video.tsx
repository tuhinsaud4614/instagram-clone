import { MouseEvent, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IResource } from "../../../utils/interfaces";
import { AudioIcon } from "../../icons";

interface Props {
  video: Omit<IResource, "type">;
  thumbnailSrc?: string;
}

const PostVideo = ({ video, thumbnailSrc }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [played, setPlayed] = useState(false);
  const [muted, setMuted] = useState(false);

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    setPlayed((prev) => {
      if (videoRef.current) {
        if (prev) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
      return !prev;
    });
  };

  const audioHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setMuted((prev) => {
      if (videoRef.current) {
        videoRef.current.muted = !prev;
      }
      return !prev;
    });
  };

  return (
    <div
      className="relative"
      style={{ paddingBottom: `${(video.height / video.width) * 100}%` }}
    >
      <div
        className="absolute z-10 inset-0 cursor-pointer"
        role="button"
        onClick={clickHandler}
        aria-label="Control"
      ></div>
      {played && (
        <span
          className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
          onClick={clickHandler}
          role="button"
          aria-label="Play"
        >
          <FaPlay className="text-neutral-50/70" size={80} />
        </span>
      )}
      <span
        className="absolute bottom-0 right-0 z-30 cursor-pointer"
        onClick={clickHandler}
      >
        <button
          className="mb-4 mr-4 p-2 flex items-center justify-center bg-neutral-800 rounded-[50%]"
          onClick={audioHandler}
        >
          <AudioIcon
            fill="#ffffff"
            color="#ffffff"
            height={12}
            width={12}
            active={!muted}
          />
        </button>
      </span>
      <div className="absolute left-0 top-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full block bg-black"
          poster={thumbnailSrc && `/${thumbnailSrc}`}
          playsInline
          loop
        >
          <source src={`/${video.src}`} />
        </video>
      </div>
    </div>
  );
};

export default PostVideo;

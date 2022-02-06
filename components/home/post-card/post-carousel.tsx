import { useRef } from "react";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IResource } from "../../../utils/interfaces";
import PostImage from "./post-image";
import PostVideo from "./post-video";

interface Props {
  resources: IResource[];
  thumbnailSrc?: string;
}

const PostCarousel = ({ thumbnailSrc, resources }: Props) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  if (resources.length === 1) {
    if (resources[0].type === "image") {
      return (
        <div className="pb-9">
          <PostImage image={resources[0]} />
        </div>
      );
    }
    return (
      <div className="pb-9">
        <PostVideo video={resources[0]} />
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Virtual, Pagination]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: "hidden",
      }}
      pagination
      slidesPerView="auto"
      className="w-full overflow-y-visible pb-9"
    >
      <button
        ref={prevRef}
        className="w-[45px] h-[45px] absolute top-2/4 left-0 -translate-y-1/2 z-10 flex items-center justify-center"
      >
        <IoChevronBackCircle size={30} className="text-white drop-shadow-md" />
      </button>
      <button
        ref={nextRef}
        className="w-[45px] h-[45px] absolute top-2/4 right-0 -translate-y-1/2 z-10 flex items-center justify-center"
      >
        <IoChevronForwardCircle
          size={30}
          className="text-white drop-shadow-md"
        />
      </button>
      {resources.map((resource, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          {resource.type === "image" ? (
            <PostImage image={resource} />
          ) : (
            <PostVideo video={resource} thumbnailSrc={thumbnailSrc} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PostCarousel;

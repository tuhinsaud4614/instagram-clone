import { useRef } from "react";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StoryItem } from ".";

const StoryBox = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Swiper
      modules={[Navigation, Virtual]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: "hidden",
      }}
      slidesPerGroup={3}
      slidesPerView="auto"
      className="bg-white px-2.5 py-4 rounded-[0.1875rem] sm2:mb-6 border-b sm2:border-x sm2:border-t"
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
      {Array.from({ length: 21 }).map((_, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <StoryItem own={index === 0} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StoryBox;

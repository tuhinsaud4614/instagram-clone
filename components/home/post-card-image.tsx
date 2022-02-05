import Image from "next/image";
import { useRef } from "react";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  images: { id: string; src: string; alt: string }[];
}

const ImageContainer = ({
  image,
}: {
  image: { id: string; src: string; alt: string };
}) => {
  return (
    <div className="relative pb-[125%]">
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="w-full h-full relative">
          <Image
            src={`/${image.src}`}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

const PostCardImage = ({ images }: Props) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  if (images.length === 1) {
    return (
      <div className="pb-9">
        <ImageContainer image={images[0]} />
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
      {images.map((img, index) => (
        <SwiperSlide key={img.id} virtualIndex={index}>
          <ImageContainer image={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PostCardImage;

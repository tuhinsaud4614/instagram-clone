import Image from "next/image";
import { IResource } from "../utils";

interface Props {
  image: Omit<IResource, "type">;
}

const PostImage = ({ image }: Props) => {
  return (
    <div
      className="relative"
      style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}
    >
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="w-full h-full relative">
          <Image
            src={`/${image.src}`}
            alt="Post"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PostImage;

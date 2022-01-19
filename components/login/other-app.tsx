import Image from "next/image";
import Link from "next/link";

interface Props {
  to: string;
  src: string;
  alt: string;
  className?: string;
}

const OtherApp = ({ alt, src, to, className }: Props) => {
  return (
    <Link href={to} passHref>
      <a className="mr-2" target="_blank" rel="noreferrer">
        <Image src={src} alt={alt} width={136} height={40} />
      </a>
    </Link>
  );
};

export default OtherApp;

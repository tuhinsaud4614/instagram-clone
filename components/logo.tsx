import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center no-underline">
        <Image src="/text-logo.png" alt="instagram" width={103} height={29} />
      </a>
    </Link>
  );
};

export default Logo;

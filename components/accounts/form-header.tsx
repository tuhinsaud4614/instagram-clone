import Image from "next/image";

const FormHeader = () => {
  return (
    <div className="pt-5.5 pb-3 mx-auto">
      <Image src="/text-logo.png" alt="instagram" width={175} height={51} />
    </div>
  );
};

export default FormHeader;

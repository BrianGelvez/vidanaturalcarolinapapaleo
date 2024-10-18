import Image from "next/image";

export default function Shipments() {
  return (
    <div className="w-full lg:w-[65%] h-auto px-4">
      <div className="w-full">
        <Image
          src="/correoArgentinoTransparente.webp"
          width={1000}
          height={1000}
          alt="correoAgentino"
          className="w-full"
        />
      </div>
    </div>
  );
}

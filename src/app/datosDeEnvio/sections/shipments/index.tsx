import Image from "next/image";

export default function Shipments() {
  return (
    <div className="w-full h-auto px-4">
      <div className="w-full">
        <Image
          src="/correoArgentinotransparente.webp"
          width={1000}
          height={1000}
          alt="correoAgentino"
          className="w-full"
        />
      </div>
    </div>
  );
}

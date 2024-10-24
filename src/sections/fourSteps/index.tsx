import Image from "next/image";

export default function FourSteps() {
  return (
    <div className="w-full flex flex-col h-auto bg-white">
      <div className="h-36" />
      <div className="w-full">
        <div className="w-full">
          <h2 className="text-[#DA0000] text-[30px] font-[700] text-center leading-none">
            Qué es <br />
            <span className="text-black">Vitaly</span> Plus?
          </h2>
        </div>
        <div className="">
          <Image
            src="/texto.webp"
            width={1000}
            height={1000}
            alt="Vitaly Plus"
            className="pt-8"
          />
        </div>
      </div>
    </div>
  );
}
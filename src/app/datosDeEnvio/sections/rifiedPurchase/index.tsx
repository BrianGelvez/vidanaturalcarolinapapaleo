import Image from "next/image";

export default function RifiedPurchase() {
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-center items-center">
        <div className="bg-[#AAC67B] lg:bg-white w-full flex flex-row justify-center items-center gap-3">
          <h1 className="text-black font-semibold text-[11px]">
            COMPRA SEGURA
          </h1>
          <Image
            src="/padlock.webp"
            width={25}
            height={25}
            alt="compra segura"
          />
          <h2 className="text-black text-[11px]">100% PROTEGIDO</h2>
        </div>
        <div className="w-full flex justify-center items-center py-4">
          <Image
            src="/LogoVidanatural.webp"
            width={300}
            height={300}
            alt="LogoVidaNatural"
          />
        </div>
      </div>
    </div>
  );
}

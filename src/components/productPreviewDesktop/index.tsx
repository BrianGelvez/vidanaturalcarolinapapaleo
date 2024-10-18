import Image from "next/image";

export default function ProductPreviewDesktop() {
  return (
    <div className="hidden lg:w-[35%] shadow-light rounded-md py-3 px-5 lg:block">
      <div className="w-full h-auto">
        <div className="w-full flex flex-row justify-between items-center py-4">
          <span className="w-[70%] flex flex-row justify-start items-center gap-3">
            <Image
              src="/VitalyPlus.webp"
              width={50}
              height={50}
              alt="VitalyPlus"
            />
            <p className="text-[12px] text-black">
              VitalyPlus © Colageno (doble Hidrolizado) A. Hialurónico,
              Vitaminas, Zinc
            </p>
          </span>
          <p className="text-[12px] text-black">$39.900,00</p>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="w-full h-[1px] bg-green-primary" />
      </div>
      <div className="w-full flex flex-col gap-2 py-4">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-black">Subtotal</p>
          <p className="text-[12px] text-black">$39.900,00</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-black text-[22px]">Total</p>
          <p className="text-black">$39.900,00</p>
        </div>
      </div>
    </div>
  );
}

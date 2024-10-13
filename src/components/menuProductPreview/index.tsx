import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MenuProductPreview() {
  return (
    <div
      className="
              absolute left-0 w-full
              z-10 px-6
              max-h-0
              peer-checked/menu:max-h-96 /* Mantiene el efecto desplegable */
              transition-all duration-300 
              overflow-hidden
              bg-white /* Aseguramos que el fondo sea visible */
              shadow-lg /* Agregamos una sombra si lo deseas */
              rounded-5
              "
    >
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

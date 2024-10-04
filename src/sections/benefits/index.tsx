import Image from "next/image";

export default function Benefits() {
  return (
    <div className="relative w-full h-auto flex flex-col lg:flex-row gap-12 py-12 px-4 md:px-8 lg:px-10 xl:px-16">
      {/* Div blanco que sobresale un poco en la parte inferior */}
      <div className="absolute bottom-[-20px] left-0 w-full h-[15vh] bg-white z-10" />

      <div className="w-full flex flex-col lg:flex-row justify-start 2xl:items-center items-start gap-10 z-20 relative">
        <div className="flex flex-col gap-7 lg:gap-12 xl:gap-24">
          <div className="w-full flex flex-col justify-center lg:items-start items-center lg:justify-start">
            <Image
              src="/vector1.webp"
              width={40}
              height={40}
              alt="icono saludable"
            />
            <p className="font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[27px] pt-4">
              Alimentación.
            </p>
            <p className="text-[17px] xl:text-[21px] text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center lg:items-start items-center lg:justify-start">
            <Image
              src="/vector2.webp"
              width={40}
              height={40}
              alt="icono saludable"
            />
            <p className="font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[27px] pt-4">
              Deportismo.
            </p>
            <p className="text-[17px] xl:text-[21px] text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7 lg:gap-12 xl:gap-24">
          <div className="w-full flex flex-col justify-center lg:items-start items-center lg:justify-start">
            <Image
              src="/vector3.webp"
              width={40}
              height={40}
              alt="icono saludable"
            />
            <p className="font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[27px] pt-4">
              Vitaminas.
            </p>
            <p className="text-[17px] xl:text-[21px] text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center lg:items-start items-center lg:justify-start">
            <Image
              src="/vector4.webp"
              width={40}
              height={40}
              alt="icono saludable"
            />
            <p className="font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[27px] pt-4">
              Concentracion.
            </p>
            <p className="text-[17px] xl:text-[21px] text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center lg:items-start z-20 relative">
        <h1 className="text-[40px] lg:text-[45px] font-[700] leading-tight">
          Una vida más saludable.
        </h1>
        <p className="py-4 text-[17px]">For digestive health and support</p>
        <Image
          src="/adultoSaludable.webp"
          width={400}
          height={400}
          alt="icono saludable"
          className="w-full"
        />
      </div>
    </div>
  );
}

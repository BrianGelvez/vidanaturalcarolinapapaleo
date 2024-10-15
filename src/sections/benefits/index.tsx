import Image from "next/image";

export default function Benefits() {
  return (
    <div id="beneficios" className="relative w-full h-auto flex flex-col lg:flex-row gap-12 py-24 px-4 md:px-8 lg:px-10 xl:px-16 2xl:px-48">
      <div className="absolute bottom-[-20px] left-0 w-full h-[20vh] lg:h-[15vh] bg-white z-10" />

      <div className="w-full flex flex-col lg:flex-row justify-start 2xl:items-center items-start gap-10 relative">
        <div className="flex flex-col gap-7 lg:gap-12 xl:gap-24">
          <div className="w-full flex flex-col justify-center lg:items-start items-center lg:justify-start gap-2">
            <Image
              src="/vector1.webp"
              width={40}
              height={40}
              alt="icono saludable"
              className="py-2"
            />
            <p className="text-white font-bold text-[20px] md:text-[22px]">
              Alimentación.
            </p>
            <p className="text-[18px] font-[200] text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center lg:items-start items-center lg:justify-start gap-2">
            <Image
              src="/vector2.webp"
              width={40}
              height={40}
              alt="icono saludable"
            />
            <p className="text-white font-bold text-[20px] md:text-[22px]">
              Deportismo.
            </p>
            <p className="text-[18px] font-[200] text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7 lg:gap-12 xl:gap-24">
          <div className="w-full flex flex-col justify-center lg:items-start items-center lg:justify-start gap-2">
            <Image
              src="/vector3.webp"
              width={40}
              height={40}
              alt="icono saludable"
            />
            <p className="text-white font-bold text-[20px] md:text-[22px]">
              Vitaminas.
            </p>
            <p className="text-[18px] font-[200] text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center lg:items-start items-center lg:justify-start gap-2">
            <Image
              src="/vector4.webp"
              width={40}
              height={40}
              alt="icono saludable"
            />
            <p className="text-white font-bold text-[20px] md:text-[22px]">
              Concentracion.
            </p>
            <p className="text-[18px] font-[200] text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[60%] flex flex-col justify-center items-center lg:items-start z-10 relative">
        <h1 className="text-white text-[40px] md:text-[45px] leading-tight font-[800] text-center lg:text-start pb-3">
          Una vida <br /> más saludable.
        </h1>
        {/* <p className="pb-4 text-[17px]">For digestive health and support</p> */}
        <Image
          src="/adultoSaludable.webp"
          width={200}
          height={200}
          alt="icono saludable"
          className="w-full rounded-sm"
        />
      </div>
    </div>
  );
}

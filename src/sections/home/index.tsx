'use client'

import Image from "next/image";

export default function Home() {

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
<div id="inicio" className="relative w-full h-[90vh] lg:h-[600px]">
  <div className="hidden lg:block absolute bottom-0 w-full h-[15vh] bg-white z-10" />
  <Image
    src="/FondoRedHome.webp"
    layout="fill"
    objectFit="cover"
    alt="imagen fondo"
    className="hidden lg:block"
  />
  <Image
    src="/FondoRedHomeMobile.webp"
    layout="fill"
    objectFit="cover"
    alt="imagen fondo"
    className="flex lg:hidden"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="absolute lg:top-14 w-full flex flex-col lg:flex-row-reverse lg:gap-6 lg:justify-center lg:items-start lg:pt-8">
    <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:mt-16">
      <h1 className="text-[30px] md:text-[35px] text-center lg:text-start text-white font-[700] leading-none">
        SER VIDA <br />
        SER NATURALEZA <br />
        SER <span className="text-red-600">VITALIDAD</span>
      </h1>

      <div className="w-full flex flex-col py-3 justify-center items-center lg:items-start gap-2">
        <button 
          onClick={() => handleScroll("#vitalyplus")}
          className="bg-[#484848]/60 backdrop-blur-sm w-[150px] lg:w-[200px] p-4 md:text-[16px] font-semibold rounded-sm">
          Descubri la magia
        </button>
      </div>
    </div>

    <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-6">
      <Image
        src="/VitalyPlus.webp"
        width={800}
        height={800}
        alt="Vitaly Plus"
        className="mt-8 w-[200px] md:w-[250px] lg:w-[300px] z-30"
      />
    </div>
  </div>
</div>

  );
}

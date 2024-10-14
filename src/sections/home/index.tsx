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
    <div id="inicio" className="relative w-full h-screen lg:h-[600px]">
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

      {/* Contenedor para el contenido */}
      <div className="absolute lg:top-14 w-full flex flex-col lg:flex-row-reverse lg:gap-6 lg:justify-center lg:items-start lg:pt-8">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:mt-16">
          {/* <p className="text-[15px] font-light">100% Natural</p> */}
          <h1 className="text-[40px] md:text-[45px] text-center lg:text-start text-white font-[700] leading-none">
            SER VIDA <br />
            SER NATURALEZA <br />
            SER <span className="text-red-600">VITALIDAD</span>
          </h1>

          <div className="w-full flex flex-col py-3 justify-center items-center lg:items-start gap-2">
            <button 
            onClick={() => handleScroll("#vitalyplus")}
             className="bg-[#484848]/60 backdrop-blur-sm lg:w-[200px] p-4 md:text-[16px] font-semibold rounded-sm">
              Descubri la magia
            </button>
            {/* <p className="text-[10px] md:text-[12px] lg:text-[14px] py-1 text-[#8b8b8b]">
              20% de descuento usando este botón
            </p> */}
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-6">
          <Image
            src="/VitalyPlus.webp"
            width={1000}
            height={1000}
            alt="Vitaly Plus"
            className="mt-8 min0:w-[250px] min1:w-[330px] md:w-[300px] z-30"
          />
        </div>
      </div>

      {/* Banner de Envío Gratis */}
      {/* <div className="absolute top-[110px] left-0 w-full h-auto p-2 backdrop-blur-md bg-white/20 flex flex-col justify-center items-center italic">
        <p className="text-white text-xl lg:text-2xl xl:text-3xl">
          📦Envio{" "}
          <span className="text-brown-secundary font-semibold text-red-600">
            gratis
          </span>{" "}
          a todo el pais!📦
        </p>
      </div> */}
    </div>
  );
}

"use client";

import Image from "next/image";

export default function Home() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="inicio"
      className="relative w-full h-[50vh] flex justify-center items-center bg-red-600"
    >
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="z-10 flex flex-col justify-center gap-5 mt-56 items-center">
        <h1 className="text-[30px] md:text-[55px] text-center lg:text-start text-white font-[700] leading-[0.9] tracking-[-0.5px]">
          SER VIDA <br />
          SER NATURALEZA <br />
          SER <span className="text-red-600">VITALIDAD</span>
        </h1>
        <div className="w-full flex flex-col justify-center items-center lg:items-start gap-2">
          <button
            onClick={() => handleScroll("#vitalyplus")}
            className="bg-[#DA0000]/80 backdrop-blur-sm w-auto px-16 py-2 md:text-[18px] font-semibold rounded-full"
          >
            Comprar
          </button>
        </div>
        <div className=" lg:w-1/2 flex justify-center lg:justify-end lg:pr-6">
          <Image
            src="/productoHome.webp"
            width={1000}
            height={1000}
            alt="Vitaly Plus"
            className="w-[300px] mt-6"
          />
        </div>
      </div>
    </div>
  );
}

// min0:w-[250px] min1:w-[330px] md:w-[330px]
{
  /* <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[12vh] bg-white z-10" /> */
}

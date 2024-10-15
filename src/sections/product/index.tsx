"use client";

import Image from "next/image";

export default function Product() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="vitalyplus"
      className="w-full h-auto bg-white px-4 md:px-8 lg:px-10 xl:px-16 2xl:px-48"
    >
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:gap-10">
        <div className="w-full lg:w-1/2 py-4 lg:py-0 flex flex-col justify-center items-center lg:items-start">
          <h3 className="text-black text-[40px] md:text-[45px] leading-tight font-[700] text-center lg:text-left">
            <span className="text-red-600">Qué es</span> <br /> Vitaly{" "}
            <span className="text-red-600">Plus?</span>
          </h3>
          <p className="text-black font-extralight text-[20px] md:text-[22px] text-center lg:text-left">
            The leading health and beauty product
          </p>

          <p className="text-black text-center lg:text-left py-6 text-[18px] md:text-[20px] lg:text-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-black text-center lg:text-left py-5 text-[18px] md:text-[20px] lg:text-[21px]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <span className="py-2">
            <button
              onClick={() => handleScroll("#comprar")}
              className="bg-red-600/80 backdrop-blur-md  p-4 md:text-[20px] font-semibold rounded-sm"
            >
              Comprar Ahora
            </button>
          </span>
        </div>

        <div className="relative lg:flex lg:justify-end lg:items-center">
          <Image
            src="/personaSaludable2.webp"
            width={400}
            height={400}
            alt="mujer saludable"
            className="lg:w-[500px] object-cover pt-5"
          />

          {/* <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" /> */}
        </div>
      </div>
    </div>
  );
}

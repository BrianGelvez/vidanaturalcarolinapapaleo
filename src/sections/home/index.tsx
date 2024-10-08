import Image from "next/image";

export default function Home() {

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="inicio" className="relative w-full h-screen lg:h-[800px]">
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
      <div className="absolute top-[190px] lg:top-14 w-full flex flex-col lg:flex-row-reverse lg:gap-16 lg:justify-center lg:items-start lg:pt-48">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:mt-20">
          <p className="text-[15px] font-light">100% Natural</p>
          <h1 className="text-[40px] md:text-[45px] text-center lg:text-start text-white font-[1000] leading-tight">
            SER VIDA <br />
            SER NATURALEZA <br />
            SER <span className="text-red-600">VITALIDAD</span>
          </h1>

          <div className="w-full flex flex-col py-6 justify-center items-center lg:items-start gap-2">
            <button 
            onClick={() => handleScroll("#comprar")}
             className="bg-[#484848]/60 backdrop-blur-sm lg:w-[262px] p-4 md:text-[18px] font-semibold rounded-sm">
              Comprar Ahora
            </button>
            {/* <p className="text-[10px] md:text-[12px] lg:text-[14px] py-1 text-[#8b8b8b]">
              20% de descuento usando este botón
            </p> */}
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-6">
          <Image
            src="/VitalyPlus.webp"
            width={300}
            height={300}
            alt="Vitaly Plus"
            className="mt-8 min0:w-[250px] min1:w-[300px] md:w-[340px]"
          />
        </div>
      </div>

      {/* Banner de Envío Gratis */}
      <div className="absolute top-[110px] left-0 w-full h-auto p-2 backdrop-blur-md bg-white/20 flex flex-col justify-center items-center italic">
        {/* <p className="text-slate-200 underline">Ventas por mayor y menor</p> */}
        <p className="text-white text-xl lg:text-2xl xl:text-3xl">
          📦Envio{" "}
          <span className="text-brown-secundary font-semibold text-red-600">
            gratis
          </span>{" "}
          a todo el pais!📦
        </p>
      </div>
    </div>
  );
}

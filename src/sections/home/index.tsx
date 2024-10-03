import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen lg:h-[800px]">
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
     <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-white" />

      
      {/* Contenedor para el contenido */}
      <div className="absolute top-[150px] lg:top-0 w-full flex flex-col lg:flex-row-reverse lg:gap-6 lg:justify-center lg:items-start lg:pt-48"> 
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:mt-14">
          <p className="text-[15px] font-light">100% Natural</p>
          <h1 className="text-[35px] md:text-[50px] text-center lg:text-start text-white font-[1000] leading-tight">
            SER VIDA <br />
            SER NATURALEZA <br />
            SER <span className="text-red-600">VITALIDAD</span>
          </h1>
          <div className="w-full flex flex-col py-6 justify-center items-center lg:items-start">
            <button className="bg-[#484848] p-2 md:text-[20px] font-semibold rounded-sm">
              Comprar Ahora
            </button>
            <p className="text-[10px] md:text-[12px] py-1 text-[#8b8b8b]">
              20% de descuento usando este botón
            </p>
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
    </div>
  );
}

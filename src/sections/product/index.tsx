import Image from "next/image";

export default function Product() {
  return (
    <div className="w-full h-auto bg-white py-5 px-4 md:px-8 lg:px-10 xl:px-16">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:gap-10">
        {/* Contenedor del título y texto */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
          <h3 className="text-black text-[40px] md:text-[60px] font-[800] text-center lg:text-left">
            <span className="text-red-600">Qué es</span> <br /> Vitaly{" "}
            <span className="text-red-600">Plus?</span>
          </h3>
          <p className="text-black font-bold text-center lg:text-left">
            The leading health and beauty product
          </p>

          {/* Descripciones */}
          <p className="text-black text-center lg:text-left py-6 text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-black text-center lg:text-left py-5 text-[17px]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Botón */}
          <span className="py-2">
            <button className="bg-red-600 p-4 md:text-[20px] font-semibold rounded-sm">
              Comprar Ahora
            </button>
          </span>
        </div>

        {/* Contenedor de la imagen */}
        <div className="relative py-5 lg:w-1/2">
          <Image
            src="/personaSaludable.webp"
            width={400}
            height={400}
            alt="mujer saludable"
            className="lg:w-[500px]"
          />
          {/* Gradiente blanco en la parte inferior */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </div>
  );
}

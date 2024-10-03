import Image from "next/image";

export default function Product() {
  return (
    <div className="px-3 py-4 flex flex-col items-center relative">
      <div
        className="w-full h-[500px] flex flex-col lg:flex-row
                     justify-start items-center lg:items-start bg-gradient-to-b from-white
                    to-orange-500 rounded-2xl relative lg:px-24"
      >
        <div className="w-full flex flex-col gap-5 px-4 mt-16 lg:mt-24">
          <h1 className="text-[45px] font-semibold text-center text-green-primary">
            Vitaly Plus AR
          </h1>
          <div className="w-full h-24 border-solid flex justify-center items-center bg-white/60 backdrop-blur-md border-[#777777] border-[1px] rounded-lg">
            <p className="text-[#555555] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, est
              et soluta ipsum nostrum quae consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          {/* Imagen del producto */}
          <div className="absolute lg:relative lg:-bottom-0 -bottom-32 flex justify-center w-full z-10">
            <Image
              src="/VitalyPlus.webp"
              width={400}
              height={400}
              alt="Vitaly Plus"
              className="drop-shadow-xl"
            />
          </div>
          {/* Botones */}
          <div className="lg:flex justify-center gap-4 mt-32 lg:mt-0 hidden">
            <button className="bg-green-primary text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300">
              Comprar Ahora
            </button>
            <button className="bg-orange-primary text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-32 lg:hidden">
        <button className="bg-green-primary text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300">
          Comprar Ahora
        </button>
        <button className="bg-orange-primary text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300">
          Ver Detalles
        </button>
      </div>
      <div className="w-full h-[1px] bg-green-primary mt-5" />
    </div>
  );
}

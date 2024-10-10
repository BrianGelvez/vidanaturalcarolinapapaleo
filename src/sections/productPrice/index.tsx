import Image from "next/image";

export default function ProductPrice() {
  return (
    <div
    id="comprar"
      className="bg-white w-full h-auto flex flex-col lg:flex-row
                    gap-12 py-24 px-4 md:px-8 lg:px-10 xl:px-16 2xl:px-48"
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center py-4">
          <Image
            src="/VitalyPlus.webp"
            width={300}
            height={300}
            alt="VitalyPlus"
          />
        </div>
        <div className="w-full flex flex-col gap-3 justify-start items-start">
          <p className="text-red-600 text-[40px] md:text-[45px] leading-tight font-[800] text-start">
            Proba cambiar tu vida hoy
          </p>
          <p className="text-black font-bold text-[20px] md:text-[22px] text-start ">
            El mejor cambio de tu vida, al mejor precio de tu vida.
          </p>
          <div className="w-full flex flex-row gap-12 justify-start items-start">
            <div className="w-auto flex flex-col justify-start items-start">
              <p className="text-black font-[800] text-[30px] line-through">
                $49.900
              </p>
              <p className="text-black">Antes</p>
            </div>
            <div className="w-auto flex flex-col justify-start items-start">
              <p className="font-[800] text-[30px] text-red-600">$39.000</p>
              <p className="text-red-600">Ahora</p>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-3">
            <button className="bg-[#484848]/60 backdrop-blur-sm w-[180px] md:w-[200px] lg:w-[230px] p-4 md:text-[20px] lg:text-[22px] font-semibold rounded-sm">
              Comprar Ahora
            </button>
            <p className="text-[#2e2e2e] text-[15px]">
              Envio gratis a toda Argentina
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-full absolute mb-[450px] h-auto p-2 backdrop-blur-md bg-black/20 lg:mt-[120px] flex flex-col justify-center items-center italic">
<p className="text-white text-xl lg:text-2xl xl:text-3xl">
  📦Envio
  <span className="text-brown-secundary font-semibold">gratis</span>
  a todo el pais!📦
</p>
</div> */
}

import Image from "next/image";

export default function ProductPrice() {
  return (
    <div
      id="comprar"
      className="bg-white w-full h-auto flex flex-col lg:flex-row
                    gap-12 pt-24 pb-14 px-4 md:px-8 lg:px-10 xl:px-16 2xl:px-48"
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-4 ">
          <p className="text-[#272727] text-[40px] md:text-[45px] font-[800]">
            Vitaly Plus✨
          </p>
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
            <a
              href="datosDeEnvio"
              className="bg-[#484848]/60 text-center backdrop-blur-sm w-[180px] md:w-[200px] lg:w-[230px] p-4 md:text-[20px] lg:text-[22px] font-semibold rounded-sm"
            >
              Comprar Ahora
            </a>
            <p className="text-[#2e2e2e] font-[500] text-[20px] italic">
              * Envio gratis a todo el pais por correo Argentino
            </p>
            <Image src="/correoargentino.png" width={70} height={70} alt="tarjetavisa" />
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-start gap-4 pt-4">
          <Image src="/amex.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/argencard.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/cabal.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/cencosud.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/diners.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/maestro.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/mastercard.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/naranja.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/pagofacil.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/rapipago.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/tarjeta-shopping.png" width={50} height={50} alt="tarjetavisa" />
          <Image src="/visa.png" width={50} height={50} alt="tarjetavisa" />
        </div>
        </div>

      </div>
    </div>
  );
}

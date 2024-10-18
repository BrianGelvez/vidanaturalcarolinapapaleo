"use client";

import Image from "next/image";
import { ProductResponse } from "./server/interface";
import { useEffect } from "react";

export default function ProductPrice() {
  const appId = process.env.NEXT_PUBLIC_X_APP_ID;
  const appKey = process.env.NEXT_PUBLIC_X_APP_KEY;

  console.log("App ID:", appId);
  console.log("App Key:", appKey);
  console.log(
    "NEXT_PUBLIC_APP_API_URL:",
    `${process.env.NEXT_PUBLIC_APP_API_URL}`
  );

  useEffect(() => {
    getPoductVitaly();
  }, []);

  async function getPoductVitaly() {
    if (!appId || !appKey) {
      throw new Error("Variables de entorno no definidas.");
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}`, {
        method: "GET",
        cache: "default",
        headers: {
          // "Content-Type": "application/json",
          "x-app-id": appId,
          "x-app-key": appKey,
        },
      });
      console.log("response", response);

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Error en la respuesta de la API: ${errorDetails}`);
      }

      const result: ProductResponse = await response.json();
      console.log("Resultadooooo", result);

      return result;
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  }

  return (
    <div
      id="comprar"
      className="bg-white w-full h-auto flex flex-col lg:flex-row gap-12 pt-24 pb-14 px-4 md:px-8 lg:px-10 xl:px-16 2xl:px-48"
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-4 ">
          <p className="text-[#272727] text-[40px] md:text-[45px] font-[800]">
            Vitaly Plus✨
          </p>
          <Image src="/VitalyPlus.webp" width={300} height={300} alt="vytali" />
        </div>
        <div className="w-full flex flex-col gap-3 justify-start items-start">
          <p className="text-red-600 text-[40px] md:text-[45px] leading-tight font-[600] text-start">
            Proba cambiar tu vida hoy
          </p>
          <p className="text-black font-[300] text-[20px] md:text-[22px] text-start ">
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
              <p className="font-[800] text-[30px] text-red-600">$49.000</p>
              <p className="text-red-600">Ahora</p>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-3">
            <p className="text-[#2e2e2e] font-[500] text-[20px] italic">
              * Envio gratis a todo el pais por correo Argentino
            </p>
            <Image
              src="/correoargentino.png"
              width={70}
              height={70}
              alt="Correo Argentino"
            />
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-start gap-4 pt-4">
            <Image src="/amex.png" width={50} height={50} alt="Amex" />
            <Image
              src="/argencard.png"
              width={50}
              height={50}
              alt="Argencard"
            />
            <Image src="/cabal.png" width={50} height={50} alt="Cabal" />
            <Image src="/cencosud.png" width={50} height={50} alt="Cencosud" />
            <Image src="/diners.png" width={50} height={50} alt="Diners" />
            <Image src="/maestro.png" width={50} height={50} alt="Maestro" />
            <Image
              src="/mastercard.png"
              width={50}
              height={50}
              alt="Mastercard"
            />
            <Image src="/naranja.png" width={50} height={50} alt="Naranja" />
            <Image
              src="/pagofacil.png"
              width={50}
              height={50}
              alt="Pago Fácil"
            />
            <Image src="/rapipago.png" width={50} height={50} alt="RapiPago" />
            <Image
              src="/tarjeta-shopping.png"
              width={50}
              height={50}
              alt="Tarjeta Shopping"
            />
            <Image src="/visa.png" width={50} height={50} alt="Visa" />
          </div>
          <p className="text-black italic text-[12px]">
            * Todos los medios de pago
          </p>
        </div>
      </div>
    </div>
  );
}

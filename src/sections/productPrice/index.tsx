"use client";

import { Product, ProductResponse } from "@/interfaces/vitalyPlus";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductPrice() {
  const [product, setProduct] = useState<Product | null>(null);

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0, // Eliminar decimales
    maximumFractionDigits: 0, // Eliminar decimales
  }).format(product?.price || 0);

  function getProductVitaly() {
    fetch("/api/getVitaly", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Error en la respuesta de la API: ${text}`);
          });
        }
        return response.json();
      })
      .then((data: ProductResponse) => {
        console.log("Resultado:", data);
        if (data.status === "ok" && data.products.length > 0) {
          setProduct(data.products[0]);
        }
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }

  useEffect(() => {
    getProductVitaly();
  }, []);

  return (
    <div
      id="comprar"
      className="bg-white w-full h-auto flex flex-col lg:flex-row gap-12 pt-24 pb-14 px-4 md:px-8 lg:px-10 xl:px-16 2xl:px-48"
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-4 ">
          <p className="text-[#272727] text-[40px] md:text-[45px] font-[800] text-center leading-none">
            {product?.description.split("s")[0]}s✨
            <br />
            <span className="text-[14px] hidden">
              {product?.description.split("s")[1]}
            </span>
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
                $55.900
              </p>
              <p className="text-black">Antes</p>
            </div>
            <div className="w-auto flex flex-col justify-start items-start">
              <p className="font-[800] text-[30px] text-red-600">
                {formattedPrice}
              </p>
              <p className="text-red-600">Ahora</p>
            </div>
          </div>
          <a
            href="/datosDeEnvio"
            className="bg-red-600/80 hover:bg-red-800/90 backdrop-blur-md p-4 md:text-[20px] font-semibold rounded-sm transition-all duration-300 ease-in-out transform hover:shadow-lg"
          >
            Comprar Ahora
          </a>

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

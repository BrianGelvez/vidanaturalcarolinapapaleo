"use client";

import { Product, ProductResponse } from "@/interfaces/vitalyPlus";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import InputPayment from "./inputPayments";

export default function ProductPrice() {
  const [product, setProduct] = useState<Product | null>(null);
  // const [opened, setOpened] = useState(false);

  // const handleToggle = () => {
  //   setOpened(!opened);
  // };

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
      className="bg-white w-full h-auto flex flex-col lg:flex-row
                 gap-12 pt-24 pb-4 px-4 md:px-8 lg:px-10 xl:px-16 
                 2xl:px-48"
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-4 ">
          {/* <p className="text-[#272727] text-[40px] md:text-[45px] font-[800] text-center leading-none">
            {product?.description.split("s")[0]}s✨
            <br />
            <span className="text-[14px] hidden">
              {product?.description.split("s")[1]}
            </span>
          </p> */}
          <Image src="/VitalyPlus.webp" width={1000} height={1000} className="w-[450px]" alt="vytali" />
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <p
            className="text-[#DA0000] text-[24px] md:text-[50px] py-2
                        leading-tight font-[700] text-center md:text-start"
          >
            Descubrí tu mejor versión
          </p>
          <p
            className="text-black font-[400] text-[13px] md:text-[22px] 
                       text-center md:text-start "
          >
            El <span className="font-semibold">cambio</span> que buscás, al{" "}
            <span className="font-semibold">precio</span> que necesitás.
          </p>
          <div className="w-full flex flex-col justify-start items-center pt-6 pb-2">
            <div className="w-auto flex flex-col justify-center items-center">
              <div className="w-auto flex flex-col justify-start items-start">
                <p className="text-[#525252] font-[400] text-[16px] line-through">
                  $55.900
                </p>
                {/* <p className="text-black">Antes</p> */}
              </div>
              <div className="w-auto flex flex-row justify-center items-center gap-3">
                <p className="font-[800] text-[40px] text-[#DA0000]">
                  {formattedPrice}
                </p>
                <span
                  className="w-auto shadow-light text-[#DA0000] py-1 px-2 rounded-full 
                                 text-center text-[12px]"
                >
                  - 20%
                </span>
              </div>
            </div>
          </div>
          <a
            href="/datosDeEnvio"
            className="bg-[#DA0000] hover:bg-red-800/90 backdrop-blur-md py-2 
                       px-14 md:text-[20px] rounded-full transition-all duration-300 
                       ease-in-out transform hover:shadow-lg"
          >
            Comprar
          </a>

          <div className="flex flex-col justify-center items-center gap-1 pt-12">
            <p className="text-[#0D9D00] font-[400] text-[14px] pb-8">
              * Envío a todo el país por Correo Argentino
            </p>
            <Image src="/mercadoPago.webp" width={1000} height={1000} alt="Imagen de mercadoPago" className="w-[50%]"/>
            <p className="text-black text-[12px]">*Descubrí los medios de pago</p>
          </div>
          {/* <label
            onClick={handleToggle}
            htmlFor="mp"
            className="w-full cursor-pointer"
          >
            <div
              className="w-full flex flex-row justify-between items-center 
                            h-auto shadow-slate-200 shadow-full rounded-md 
                            p-4 mt-7"
            >
              <Image
                src="/mercadoPago.webp"
                width={1000}
                height={1000}
                alt="Imagen de mercadoPago"
                className="w-24"
              />
              <IoIosArrowForward
                data-open={opened}
                className="text-black data-[open=true]:hidden"
                size={20}
              />
              <IoIosArrowDown
                data-open={opened}
                className="text-black hidden data-[open=true]:block "
                size={20}
              />
            </div>
          </label>
          <input
            id="mp"
            name="menmpu"
            type="checkbox"
            className="peer/mp hidden"
          />
          <InputPayment /> */}
        </div>
      </div>
    </div>
  );
}

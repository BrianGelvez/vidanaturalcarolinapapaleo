"use client";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { FormServer } from "@/components/server/formServer";

export default function Form() {
  const { postalCode, city, handlePostalCodeChange } = FormServer(); // Usamos el hook para manejar la lógica

  return (
    <div className="w-full flex flex-col p-4 gap-4">
      {/* Entrega */}
      <div className="w-full flex flex-col gap-2">
        <p className="text-[22px] text-black font-semibold">Entrega</p>
        <div className="w-full flex flex-row border-[2px] border-[#262E5D] rounded-md">
          <span className="w-[12%] flex justify-center items-center bg-green-primary">
            <IoIosCheckmarkCircleOutline size={24} />
          </span>
          <span className="w-[88%] flex flex-row justify-between gap-12 items-center rounded-r-md p-2 bg-white">
            <p className="text-[13px] font-semibold text-black">
              Correo Argentino Clasico - Envio a domicilio
            </p>
            <span className="flex flex-col gap-1">
              <p className="font-bold text-[#262E5D]">Gratis</p>
              <p className="line-through font-extralight text-[#616161]">
                $6.400,00
              </p>
            </span>
          </span>
        </div>
      </div>

      {/* Datos de contacto */}
      <div className="w-full p-2 flex flex-row items-center gap-4 rounded-md bg-white">
        <TbCircleNumber1Filled className="text-green-primary" size={36} />
        <p className="text-black font-semibold">Datos de contacto</p>
      </div>

      {/* Formulario */}
      <div className="w-full px-2 py-4 flex flex-col rounded-md bg-white">
        <form className="flex flex-col gap-4" action="">
          {/* Nombre */}
          <span className="w-full flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-700">Nombre *</label>
            <input
              type="text"
              id="name"
              placeholder="Nombre completo"
              className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </span>

          {/* Correo */}
          <span className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-slate-700">Correo *</label>
            <input
              type="email"
              id="email"
              placeholder="Correo electrónico"
              className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </span>

          {/* Teléfono */}
          <span className="w-full flex flex-col gap-2">
            <label htmlFor="phone" className="text-blue-900">Teléfono *</label>
            <div className="flex flex-row">
              <input
                type="text"
                value="+54"
                readOnly
                className="border-[2px] border-r-0 p-3 rounded-l-md text-black bg-gray-100 w-16 text-center"
              />
              <input
                type="tel"
                id="phone"
                placeholder="Teléfono celular"
                className="border-[2px] p-3 rounded-r-md text-black flex-grow focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>
          </span>

          {/* Código Postal */}
          <span className="w-full flex flex-col gap-2">
            <label htmlFor="postal-code" className="text-slate-700">Código Postal *</label>
            <input
              type="text"
              id="postal-code"
              value={postalCode}
              onChange={handlePostalCodeChange}
              placeholder="Código postal"
              className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </span>

          {/* Ciudad */}
          <span className="w-full flex flex-col gap-2">
            <label htmlFor="city" className="text-slate-700">Ciudad</label>
            <input
              type="text"
              id="city"
              value={city}
              readOnly
              placeholder="Ciudad detectada"
              className="border-[2px] p-3 rounded-md text-black bg-gray-100 focus:outline-none"
            />
          </span>
        </form>
      </div>
    </div>
  );
}

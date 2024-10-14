"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled } from "react-icons/tb";
import { FormData } from "./interface";

export default function Form() {
  const [formData, setFormData] = useState<Partial<FormData>>({});

  // Maneja los cambios en los inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

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

      {/* Formulario único */}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Datos de contacto */}
        <div className="w-full p-2 flex flex-row items-center gap-4 rounded-md bg-white">
          <TbCircleNumber1Filled className="text-green-primary" size={36} />
          <p className="text-black font-semibold">Datos de contacto</p>
        </div>

        <div className="w-full px-2 py-4 flex flex-col rounded-md bg-white">
          {/* Nombre */}
          <label htmlFor="name" className="text-black">Nombre *</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />

          {/* Correo */}
          <label htmlFor="email" className="text-black">Correo *</label>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />

          {/* Teléfono */}
          <label htmlFor="phone" className="text-black">Teléfono *</label>
          <div className="flex flex-row">
            <input
              type="text"
              value="+54"
              readOnly
              className="border-[2px] border-r-0 p-3 rounded-l-md text-black bg-gray-100 w-16 text-center"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono celular"
              value={formData.phone || ""}
              onChange={handleChange}
              className="border-[2px] p-3 rounded-r-md text-black flex-grow focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>
        </div>

        {/* Datos del destinatario */}
        <div className="w-full p-2 flex flex-row items-center gap-4 rounded-md bg-white">
          <TbCircleNumber2Filled className="text-green-primary" size={36} />
          <p className="text-black font-semibold">Datos del destinatario</p>
        </div>

        <div className="w-full px-2 py-4 flex flex-col rounded-md bg-white">
          {/* Código Postal */}
          <label htmlFor="postalCode" className="text-black">Código Postal *</label>
          <input
            type="text"
            name="postalCode"
            placeholder="Código postal"
            value={formData.postalCode || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />

          {/* Ciudad */}
          <label htmlFor="city" className="text-black">Ciudad</label>
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            value={formData.city || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none"
          />

          {/* Calle y número */}
          <label htmlFor="street" className="text-black">Avenida/Calle *</label>
          <input
            type="text"
            name="street"
            placeholder="Avenida o calle"
            value={formData.street || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none"
          />

          <label htmlFor="number" className="text-black">Número *</label>
          <input
            type="text"
            name="number"
            placeholder="Número de casa"
            value={formData.number || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none"
          />

          {/* Departamento y barrio */}
          <label htmlFor="department" className="text-black">Departamento (opcional)</label>
          <input
            type="text"
            name="department"
            placeholder="Departamento"
            value={formData.department || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none"
          />

          <label htmlFor="neighborhood" className="text-black">Barrio (opcional)</label>
          <input
            type="text"
            name="neighborhood"
            placeholder="Barrio"
            value={formData.neighborhood || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none"
          />
        </div>

        {/* Datos de facturación */}
        <div className="w-full p-2 flex flex-row items-center gap-4 rounded-md bg-white">
          <TbCircleNumber3Filled className="text-green-primary" size={36} />
          <p className="text-black font-semibold">Datos de facturación</p>
        </div>

        <div className="w-full px-2 py-4 flex flex-col rounded-md bg-white">
          {/* DNI */}
          <label htmlFor="dni" className="text-black">DNI *</label>
          <input
            type="text"
            name="dni"
            placeholder="Número de DNI"
            value={formData.dni || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="p-3 bg-green-primary text-white font-semibold rounded-md hover:bg-green-700"
        >
          Enviar datos
        </button>
      </form>
    </div>
  );
}
"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from "react-icons/tb";
import { FormServer } from "@/components/server/formServer";
import { FormData } from "./interface";

export default function Form() {
  const { postalCode, city, handlePostalCodeChange } = FormServer();
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [isWithoutNumber, setIsWithoutNumber] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "withoutNumber") {
      setIsWithoutNumber(checked);
      setFormData((prevData) => ({
        ...prevData,
        number: checked ? "sin número" : "",
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="w-full lg flex flex-col p-4 gap-4 lg:w-[85%] xl:w-[77%] 2xl:w-[74%]">
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
          <label htmlFor="name" className="text-black">
            Nombre *
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />

          {/* Correo */}
          <label htmlFor="email" className="text-black mt-4">
            Correo *
          </label>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />

          {/* Teléfono */}
          <label htmlFor="phone" className="text-black mt-4">
            Teléfono *
          </label>
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
          <label htmlFor="postalCode" className="text-black">
            Código Postal *
          </label>
          <input
            type="text"
            name="postalCode"
            placeholder="Código postal"
            value={postalCode}
            onChange={handlePostalCodeChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />

          {/* Ciudad */}
          <label htmlFor="city" className="text-black mt-4">
            Ciudad
          </label>
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            value={city}
            readOnly
            className="border-[2px] p-3 rounded-md text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />

          {/* Calle */}
          <div className="flex-grow mb-4 lg:mb-0">
            <label htmlFor="street" className="text-black">
              Calle *
            </label>
            <input
              type="text"
              name="street"
              placeholder="Avenida o calle"
              value={formData.street || ""}
              onChange={handleChange}
              className="w-full border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>

          {/* Calle, Número y Departamento */}
          <div className="lg:flex lg:space-x-4 mt-4">
            {/* Número */}
            <div className="flex-grow mb-4 lg:mb-0">
              <label htmlFor="number" className="text-black">
                Número *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="number"
                  placeholder="Número de casa"
                  value={isWithoutNumber ? "Sin número" : formData.number || ""}
                  onChange={handleChange}
                  disabled={isWithoutNumber}
                  className="w-full border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <input
                    type="checkbox"
                    name="withoutNumber"
                    checked={isWithoutNumber}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-500">Sin número</span>
                </div>
              </div>
            </div>

            {/* Departamento */}
            <div className="flex-grow">
              <label htmlFor="department" className="text-black">
                Departamento (opcional)
              </label>
              <input
                type="text"
                name="department"
                placeholder="Departamento"
                value={formData.department || ""}
                onChange={handleChange}
                className="w-full border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>
          </div>

          {/* Barrio */}
          <label htmlFor="neighborhood" className="text-black mt-4">
            Barrio (opcional)
          </label>
          <input
            type="text"
            name="neighborhood"
            placeholder="Barrio"
            value={formData.neighborhood || ""}
            onChange={handleChange}
            className="border-[2px] p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />
        </div>

        {/* Datos de facturación */}
        <div className="w-full p-2 flex flex-row items-center gap-4 rounded-md bg-white">
          <TbCircleNumber3Filled className="text-green-primary" size={36} />
          <p className="text-black font-semibold">Datos de facturación</p>
        </div>

        <div className="w-full px-2 py-4 flex flex-col rounded-md bg-white">
          {/* DNI */}
          <label htmlFor="dni" className="text-black">
            DNI *
          </label>
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

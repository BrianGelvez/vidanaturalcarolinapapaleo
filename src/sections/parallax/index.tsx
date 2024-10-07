import Image from "next/image";
import React from "react";

export default function Parallax() {
  return (
    <div className="relative w-full h-80">
      {/* Imagen de fondo con efecto parallax */}
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-fixed block lg:hidden"
        style={{
          backgroundImage: "url(/fondoRedHomeMobile.webp)",
        }}
      />
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-fixed hidden lg:block"
        style={{
          backgroundImage: "url(/parallax.webp)",
        }}
      />
      {/* Contenido superpuesto */}
      <div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
        <Image src="/LogoVidaNaturalBlanco.webp" width={100} height={100} alt="logovidanatural"/>
        <h1 className="text-white text-[45px] font-bold text-center mt-12 mb-12">
          Una vida más saludable.
        </h1>
      </div>
    </div>
  );
}

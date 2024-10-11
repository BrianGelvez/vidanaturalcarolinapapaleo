"use client";

import { useState } from "react";
import Image from "next/image";
import Mobile from "./partials/mobile";
import classNames from "classnames";
import Desktop from "./partials/desktop";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importamos usePathname para obtener la ruta actual

export default function Header() {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname(); // Obtenemos la ruta actual

  const handleToggle = () => {
    setOpened(!opened);
  };

  const handleGoBack = () => {
    // Redirigimos al usuario a la página principal
    window.location.href = "/";
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full backdrop-blur-md bg-red-600/50 shadow-md z-50`}
    >
      <div className="relative w-full flex flex-row justify-between items-start py-6 px-4 lg:px-10 xl:px-16 2xl:px-48">
        <span className="cursor-pointer mt-1 lg:mt-0">
          <Link href="/">
            <Image
              width={180}
              height={180}
              src="/LogoVidaNaturalBlanco.webp"
              alt="Logo de Diego Bustos, abogado penalista"
            />
          </Link>
        </span>

        <div className="w-full flex flex-col justify-center items-end">
          {/* Si la ruta es "/datosDeEnvio", mostramos solo el botón "Volver" */}
          {pathname === "/datosDeEnvio" ? (
            <button
              onClick={handleGoBack}
              className="backdrop-blur-md shadow-light text-white py-2 px-4 rounded-sm"
            >
              Volver
            </button>
          ) : (
            <>
              {/* Menu Mobile */}
              <div className="w-full flex flex-col items-end lg:hidden">
                <label
                  htmlFor="menu"
                  className="cursor-pointer flex justify-end items-end"
                  onClick={handleToggle}
                >
                  <div
                    className={classNames(
                      "tham tham-e-squeeze tham-w-8",
                      { "tham-active": opened },
                      ""
                    )}
                  >
                    <div className="tham-box mt-5">
                      <div className="tham-inner bg-white" />
                    </div>
                  </div>
                </label>
                <input
                  id="menu"
                  name="menu"
                  type="checkbox"
                  placeholder="menu"
                  className="peer/menu hidden"
                />
                <Mobile />
              </div>

              {/* Menu Desktop */}
              <div className="hidden lg:flex">
                <Desktop />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

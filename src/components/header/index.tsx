"use client";

import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import Mobile from "./partials/mobile";
import Desktop from "./partials/desktop";

export default function Header() {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(!opened);
  };

  return (
    <header className="px-4 md:px-8 lg:px-10 xl:px-16 backdrop-blur-xl bg-slate-500/50 fixed top-0 left-0 w-full h-24 flex flex-row justify-between items-center z-20">
      {/* Logo */}
      <Image
        src="/LogoVidaNaturalBlanco.webp"
        width={150}
        height={150}
        alt="Logo Vida Natural, sentirse bien"
      />

      {/* Menú de navegación */}
      <div className="w-auto flex flex-row justify-center items-center gap-3 lg:gap-12">
        <div className="lg:hidden">
          {/* Menú hamburguesa para móviles */}
          <label
            htmlFor="menu"
            className="cursor-pointer flex justify-end items-end"
            onClick={handleToggle}
          >
            <div
              className={classNames(`tham tham-e-squeeze tham-w-9`, {
                "tham-active": opened,
              })}
            >
              <div className="tham-box">
                <div className="tham-inner bg-white" />
              </div>
            </div>
          </label>
          <Mobile opened={opened} handleClickClose={() => setOpened(false)} />
        </div>
        
        {/* Menú de escritorio */}
        <div className="hidden lg:flex">
          <Desktop />
        </div>
      </div>
    </header>
  );
}

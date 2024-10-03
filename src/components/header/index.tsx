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
    <header className="px-4 lg:px-10 backdrop-blur-xl absolute top-0 left-0 w-full h-24 flex flex-row justify-between items-center z-20">
      {" "}
      {/* Cambiamos position a absolute y lo superponemos */}
      <Image
        src="/LogoVidaNaturalBlanco.webp"
        width={150}
        height={150}
        alt="Logo Vida Natural, sentirse bien"
      />
      <div className="w-auto flex flex-row justify-center items-center gap-3 lg:gap-12">
        {/* <button className="bg-[#484848] text-slate-200 py-[2px] px-2 rounded-sm block lg:hidden">
          Comprar Vitaly
        </button> */}
        <div className="lg:hidden">
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
        <div className="hidden lg:flex">
          <Desktop />
        </div>
        <button className="bg-[#484848] text-slate-200 py-1 px-2 rounded-sm hidden lg:block">
          Comprar Vitaly
        </button>
      </div>
    </header>
  );
}

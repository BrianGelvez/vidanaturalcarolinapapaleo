"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Mobile from "./partials/mobile";
import classNames from "classnames";
import Desktop from "./partials/desktop";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [opened, setOpened] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  const handleToggle = () => {
    setOpened(!opened);
  };

  const handleGoBack = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const maxScroll = fullHeight - windowHeight;
      
      const progress = Math.min(scrollPosition / (maxScroll * 0.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = `rgba(134, 6, 6, ${scrollProgress})`;

  return (
    <div
      className={`fixed top-0 left-0 w-full shadow-md z-50 transition-colors duration-300 ease-in-out`}
      style={{
        backgroundColor,
        backdropFilter: `blur(${8 * (1 - scrollProgress)}px)`,
      }}
    >
      <div className="relative w-full flex flex-row justify-between items-start py-6 px-4 lg:px-10 xl:px-16 2xl:px-48">
        <span className="cursor-pointer">
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
          {pathname === "/datosDeEnvio" ? (
            <button
              onClick={handleGoBack}
              className="backdrop-blur-md shadow-light text-white py-2 px-4 rounded-sm"
            >
              Volver
            </button>
          ) : (
            <>
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
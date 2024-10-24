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
      
      // Cambiamos de 0.5 a 0.25 para que se complete más rápido
      const progress = Math.min(scrollPosition / (maxScroll * 0.10), 1);
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
        backdropFilter: `${8 * (1 - scrollProgress)}px`,
      }}
    >
      <div className="relative w-full flex flex-row justify-between items-start lg:items-center py-4 px-4 lg:px-10 xl:px-16 2xl:px-48">
        <span className="cursor-pointer mt-1 lg:mt-0">
          <Link href="/">
            <Image
              width={120}
              height={120}
              src="/LogoVidaNaturalBlanco.webp"
              alt=""
            />
          </Link>
        </span>

        <div className="w-auto flex flex-col justify-center items-end">
          {pathname === "/datosDeEnvio" ? (
            <button
              onClick={handleGoBack}

            >
              Volver
            </button>
          ) : (
            <>
              <div className="w-auto flex flex-col items-end lg:hidden">
                <label
                  htmlFor="menu"
                  className="cursor-pointer flex justify-end items-end"
                  onClick={handleToggle}
                >
                  <div
                    className={classNames(
                      "tham tham-e-squeeze tham-w-6",
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
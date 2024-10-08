"use client";

import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Mobile(handleClickClose: any) {
  const navItems = [
    { id: 0, text: "INICIO", idLink: "/" },
    { id: 1, text: "SOMBRE MI", idLink: "aboutMe" },
    { id: 2, text: "SERVICIOS", idLink: "services" },
    { id: 3, text: "TESTIMONIOS", idLink: "testimonies" },
    { id: 4, text: "FAQ", idLink: "faq" },
    { id: 5, text: "CONTACTO", idLink: "contact" },
    { id: 6, text: "BLOG SEMANAL", idLink: "blog" },
  ];

  return (
    <div
      className=" 
          w-full max-h-0
          z-50
          mr-[42px] mt-5
          peer-checked/menu:max-h-96
          transition-all duration-300 
          overflow-hidden
           "
    >
      {navItems.map((item) => (
        <ul
          key={item.id}
          className="w-full flex relative flex-col justify-center items-center gap-6 pt-5 text-xl"
        >
          <li onClick={handleClickClose} className="mr-10 text-slate-50 hover:text-slate-300">
            <Link href={item.idLink} scroll={true}>{item.text}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Mobile(handleClickClose: any) {
  const navItems = [
    { id: 0, text: "INICIO", idLink: "/" },
    { id: 1, text: "VITALY PLUS", idLink: "aboutMe" },
    { id: 2, text: "BENEFICIOS", idLink: "services" },
    { id: 3, text: "SOBRE MI", idLink: "testimonies" },
    { id: 4, text: "TESTIMONIOS", idLink: "faq" },
    { id: 5, text: "COMPRAR", idLink: "contact" },
    // { id: 6, text: "BLOG SEMANAL", idLink: "blog" },
  ];

  return (
    <div
      className=" 
          w-full max-h-0
          z-50
          mr-[44px] mt-5
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

"use client";

import Link from "next/link";

export default function Desktop() {
  const navItems = [
    { id: 0, text: "INICIO", idLink: "/" },
    { id: 1, text: "SOBRE MI", idLink: "aboutMe" },
    { id: 2, text: "PRODUCTO", idLink: "services" },
    { id: 3, text: "TESTIMONIOS", idLink: "testimonies" },
    { id: 4, text: "PREG. FRECUENTES", idLink: "faq" },
  ];

  return (
    <div className="hidden lg:flex">
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <ul key={item.id}>
            <li className="text-slate-200 hover:text-slate-400 transition duration-300">
              <Link href={item.idLink}>{item.text}</Link>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}

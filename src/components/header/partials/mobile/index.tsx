"use client";

// import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Mobile() {
  const navItems = [
    { id: 0, text: "INICIO", idLink: "#inicio" },
    { id: 1, text: "VITALY PLUS", idLink: "#vitalyplus" },
    { id: 2, text: "BENEFICIOS", idLink: "#services" },
    { id: 3, text: "SOBRE MI", idLink: "#testimonies" },
    { id: 4, text: "TESTIMONIOS", idLink: "#faq" },
    { id: 5, text: "COMPRAR", idLink: "#contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          <li
            onClick={() => handleScroll(item.idLink)}
            className="mr-10 text-slate-50 hover:text-slate-300 cursor-pointer"
          >
            {item.text}
          </li>
        </ul>
      ))}
    </div>
  );
}

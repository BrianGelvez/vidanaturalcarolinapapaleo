"use client";

export default function Mobile() {
  const navItems = [
    { id: 0, text: "Inicio", idLink: "#inicio" },
    { id: 1, text: "Vitaly Plus", idLink: "#vitalyplus" },
    { id: 2, text: "Beneficios", idLink: "#beneficios" },
    { id: 3, text: "Sobre mi", idLink: "#sobremi" },
    { id: 4, text: "Testimonios", idLink: "#testimonios" },
    { id: 5, text: "Comprar Vitaly", idLink: "#comprar" },
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
        mr-[55px] mt-5
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

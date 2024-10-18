"use client";

export default function Mobile() {
  const navItems = [
    { id: 0, text: "Inicio", idLink: "#inicio" },
    { id: 1, text: "Vitaly Plus", idLink: "#vitalyplus" },
    // { id: 2, text: "Beneficios", idLink: "#beneficios" },
    { id: 3, text: "Sobre mi", idLink: "#sobremi" },
    { id: 4, text: "Testimonios", idLink: "#testimonios" },
    // { id: 5, text: "Comprar Vitaly", idLink: "#comprar" },
  ];

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="w-full max-h-0 z-50 mt-5 peer-checked/menu:max-h-96
                    transition-all duration-300 overflow-hidden flex 
                    flex-col items-center mr-[60px]"
    >
      {navItems.map((item) => (
        <ul
          key={item.id}
          className="w-full flex flex-col items-center gap-6 pt-5 text-xl"
        >
          <li
            onClick={() => handleScroll(item.idLink)}
            className="text-white hover:font-semibold transition-all duration-200 ease-in-out cursor-pointer"
          >
            {item.text}
          </li>
        </ul>
      ))}

      {/* Botón centrado */}
      <button
        onClick={() => handleScroll("#comprar")}
        className="py-1 px-6 bg-white text-red-600 rounded-2xl transition-all duration-200 ease-in-out hover:bg-red-600 hover:text-white hover:font-semibold mt-6"
      >
        Comprar ahora
      </button>
    </div>
  );
}

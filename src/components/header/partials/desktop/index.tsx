"use client";

export default function Desktop() {
  const navItems = [
    { id: 0, text: "Inicio", idLink: "#inicio" },
    { id: 2, text: "Sobre mi", idLink: "#sobremi" },
    // { id: 3, text: "Beneficios", idLink: "#beneficios" },
    { id: 4, text: "Vitaly Plus", idLink: "#vitalyplus" },
    { id: 5, text: "Testimonios", idLink: "#testimonios" },
    // { id: 6, text: "Comprar Vitaly", idLink: "#comprar" },
  ];

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center space-x-12">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleScroll(item.idLink)}
            className="text-slate-200 hover:text-slate-400 font-extralight transition duration-300 cursor-pointer"
          >
            {/* Usamos un <span> en lugar de <Link> para evitar el comportamiento por defecto */}
            <span>{item.text}</span>
          </li>
        ))}
        <button
          onClick={() => handleScroll("#comprar")}
          className="py-1 px-6 bg-white text-red-600 rounded-2xl"
        >
          Comprar
        </button>
      </ul>
    </div>
  );
}

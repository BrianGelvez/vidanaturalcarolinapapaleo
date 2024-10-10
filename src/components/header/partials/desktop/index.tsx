"use client";

export default function Desktop() {
  const navItems = [
    { id: 0, text: "INICIO", idLink: "#inicio" },
    { id: 1, text: "VITALY PLUS", idLink: "#vitalyplus" },
    { id: 2, text: "BENEFICIOS", idLink: "#beneficios" },
    { id: 3, text: "SOBRE MI", idLink: "#sobremi" },
    { id: 4, text: "TESTIMONIOS", idLink: "#testimonios" },
    { id: 5, text: "COMPRAR", idLink: "#comprar" },
  ];

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden lg:flex">
      <ul className="flex space-x-6 lg:mt-2">
        {navItems.map((item) => (
          <li key={item.id} onClick={() => handleScroll(item.idLink)} className="text-slate-200 hover:text-slate-400 transition duration-300 cursor-pointer">
            {/* Usamos un <span> en lugar de <Link> para evitar el comportamiento por defecto */}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

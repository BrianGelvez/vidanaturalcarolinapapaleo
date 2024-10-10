"use client";

export default function Desktop() {
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
    <div className="hidden lg:flex">
      <ul className="flex space-x-6 lg:mt-2">
        {navItems.map((item) => (
          <li key={item.id} onClick={() => handleScroll(item.idLink)} className="text-slate-200 hover:text-slate-400 font-extralight transition duration-300 cursor-pointer">
            {/* Usamos un <span> en lugar de <Link> para evitar el comportamiento por defecto */}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

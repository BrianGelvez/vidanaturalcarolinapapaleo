import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-red-800 py-8 px-4 md:px-8 lg:px-16 2xl:px-48 text-white">
      <div className="mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl font-semibold mb-2">Suscribite ya</h2>
        <p className="text-sm mb-6">
          Recibe noticias semanales de nuestros mejores productos
        </p>
        <div className="w-full px-8 flex">
          <input
            type="email"
            placeholder="Tu mail..."
            className="flex-grow py-2 px-4 text-black rounded-l-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 py-2 px-8 rounded-r-sm transition duration-300"
          >
            Enviar
          </button>
        </div>
        <div className="mt-8 text-xs w-full flex flex-col justify-center items-center opacity-80 bg-red-500">
          <p>Copyright © 2024. All rights reserved.</p>
          <Image
            src="/LogoVidaNaturalBlanco.webp"
            width={1000}
            height={1000}
            alt="logovidanatural"
            className="w-24 py-2 flex justify-center items-center"
          />
        </div>
      </div>
    </footer>
  );
}

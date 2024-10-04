import Image from "next/image";
import Link from "next/link";

interface NavItem {
  id: number;
  text: string;
  idLink: string;
}

const navItems: NavItem[] = [
  { id: 0, text: "INICIO", idLink: "/" },
  { id: 1, text: "SOBRE MI", idLink: "aboutMe" },
  { id: 2, text: "PRODUCTO", idLink: "services" },
  { id: 3, text: "TESTIMONIOS", idLink: "testimonies" },
  { id: 4, text: "PREG. FRECUENTES", idLink: "faq" },
];

interface MobileProps {
  opened: boolean;
  handleClickClose: () => void;
}

export default function Mobile({ opened, handleClickClose }: MobileProps) {
  return (
    <nav
      className={`fixed top-0 left-0 h-screen bg-red-600 w-44 z-50 transform ${
        opened ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        <ul className="flex flex-col space-y-4 py-2 pl-2">
          <Image
            src="/LogoVidaNaturalBlanco.webp"
            className="mt-6 ml-2"
            width={150}
            height={150}
            alt="Logo Vida Natural Blanco, menu deslpegable"
          />
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.idLink}
                className="block py-2 px-3 text-slate-200 hover:bg-green-500 transition-colors duration-200"
                onClick={handleClickClose}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

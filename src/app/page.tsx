"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Benefits from "@/sections/benefits";
import Footer from "@/sections/footer";
import FourSteps from "@/sections/fourSteps";
import Home from "@/sections/home";
import Parallax from "@/sections/parallax";
import Product from "@/sections/product";
import ProductPrice from "@/sections/productPrice";
import Testimonies from "@/sections/testimonies";
import { FaArrowUp } from "react-icons/fa"; // Icono de flecha

export default function Main() {
  const [showButton, setShowButton] = useState(false);

  // Manejar el scroll para mostrar o esconder el botón
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para hacer scroll hasta arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hace el scroll suave
    });
  };

  return (
    <div>
      <Header />
      <Home />
      <Product />
      <Benefits />
      <FourSteps />
      <Parallax />
      <Testimonies />
      <ProductPrice />
      <Footer />

      {/* Botón de scroll hacia arriba */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-red-600/50 backdrop-blur-lg
                    text-white rounded-sm shadow-lg hover:bg-red-700 transition
                     duration-300 z-50 animate-bounce animate-once"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-red-600/50 backdrop-blur-lg
                text-white rounded-sm shadow-lg hover:bg-red-700 transition
                duration-300 z-50 animate-bounce animate-once"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={24} />
    </button>
  );
}
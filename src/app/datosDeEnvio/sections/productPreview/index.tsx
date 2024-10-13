"use client";

import MenuProductPreview from "@/components/menuProductPreview";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

export default function ProductPreview() {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(!opened);
  };

  return (
    <div className="w-full p-4 relative">
      <label className="cursor-pointer" htmlFor="menu" onClick={handleToggle}>
        <div className="w-full h-auto flex flex-row justify-between items-center py-3 border-t-2 border-b-2">
          <span className="w-full flex flex-row gap-2">
            <IoIosArrowDropdown
              data-open={opened}
              className="text-gray-700 data-[open=true]:hidden"
              size={25}
            />
            <IoIosArrowDropup
              data-open={opened}
              className="text-gray-700 data-[open=true]:block data-[open=false]:hidden"
              size={25}
            />
            <p className="text-black/70">Ver detalles de mi compra</p>
          </span>
          <p className="text-green-primary">$39.900,00</p>
        </div>
      </label>
      <input
        id="menu"
        name="menu"
        type="checkbox"
        className="peer/menu hidden"
      />
      <MenuProductPreview />
    </div>
  );
}

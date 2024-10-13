"use client"

import MenuProductPreview from "@/components/menuProductPreview";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export default function ProductPreview() {

    const [opened, setOpened] = useState(false);

    const handleToggle = () => {
        setOpened(!opened);
      };

  return (
    <div className="w-full p-2 px-4">
      <label htmlFor="menu" onClick={handleToggle}>
        <div className="w-full h-auto flex flex-row justify-between items-center py-3 border-t-2 border-b-2">
          <span className="w-full flex flex-row gap-2 ">
            <IoIosArrowDropdown className="text-gray-700" size={25} />
            <p className="text-black/70">Ver detalles de mi compra</p>
          </span>
          <p className="text-green-primary">$39.900,00</p>
        </div>
      </label>
      <input
        id="menu"
        name="menu"
        type="checkbox"
        placeholder="menu"
        className="peer/menu hidden"
      />
      <MenuProductPreview/>
      {/* <MenuProductPreview handleClickClose={() => setOpened(false)}/> */}
    </div>
  );
}

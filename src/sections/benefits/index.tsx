//Dialog
import * as Dialog from "@radix-ui/react-dialog";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Benefits() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-center py-8 px-4">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-[28px] font-[700] text-center leading-none">
            Bienestar integral con{" "}
            <span className="text-[#DA0000]">Vitaly</span>Plus
          </h2>
          <div className="relative w-full">
            <Image
              src="/difuminado.webp"
              width={1000}
              height={1000}
              alt="Vitaly Plus"
              className="w-full"
            />
            <div className="absolute bottom-[-20px] w-full flex justify-center items-center">
              <button className="w-auto text-center bg-[#DA0000] px-14 py-2 rounded-full">
                Comprar
              </button>
            </div>
          </div>
        </div>
        <Dialog.Root>
          <Dialog.Trigger className="w-full flex flex-col">
            <div className="w-full flex flex-row justify-between items-center px-4 mt-20">
              <div className="flex flex-row justify-center items-center gap-4">
                <Image
                  src="/vector1.webp"
                  width={40}
                  height={40}
                  alt="icono saludable"
                  className="py-2"
                />
                <p className="text-[18px] font-[600]">Alimentación sana</p>
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="inset-0 fixed bg-black/70 overflow-y-auto flex justify-center items-center">
              <Dialog.Content className="w-full h-96 bg-[#1E1E1E] flex flex-col justify-start items-center rounded-2xl p-4 m-8 relative">
                {/* Cruz de cierre */}
                <div className="absolute top-4 right-4">
                  <Dialog.Close
                    asChild
                    title="Cerrar"
                    className="cursor-pointer"
                  >
                    <IoClose className="size-6 text-white-primary" />
                  </Dialog.Close>
                </div>

                {/* Contenedor del contenido del modal */}
                <div className="absolute top-4 w-full flex flex-col justify-center items-center gap-12 px-2">
                  <span className="flex flex-col justify-center items-center gap-1">
                    <Image
                      src="/vector1.webp"
                      width={45}
                      height={45}
                      alt="icono saludable"
                      className="py-2"
                    />
                    <p className="text-center text-[22px] font-[700]"> Alimentación sana</p>
                  </span>

                  <p className="text-center text-[18px] font-[500] text-white px-6">
                    Encargado de aportar los nutrientes esenciales que tu cuerpo
                    necesita. Mejora tu salud, te mantiene activo y lleno de
                    energía.
                  </p>
                </div>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}

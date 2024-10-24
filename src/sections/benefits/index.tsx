import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { BenefitsData } from "./benefitsData";

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
        <div className="mt-24 flex flex-col gap-2">
          {BenefitsData.map((benefit, index) => (
            <Dialog.Root key={index}>
              <Dialog.Trigger className="w-full flex flex-col">
                <div className="w-full flex flex-row justify-between items-center gap-3">
                  <div className="flex flex-row justify-center items-center gap-4">
                    <Image
                      src={benefit.imageWhite}
                      width={35}
                      height={35}
                      alt="icono saludable"
                      className="py-2"
                    />
                    <p className="text-[18px] font-[600]">{benefit.title}</p>
                  </div>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay
                  className="inset-0 z-50 fixed bg-black/70 overflow-y-auto flex justify-center
                                     items-center"
                >
                  <Dialog.Content className="w-full h-96 bg-white text-black flex flex-col justify-start items-center rounded-2xl p-4 m-8">
                    <div className="flex flex-row justify-end items-end w-full">
                      <Dialog.Close asChild title="Close">
                        <IoClose className="size-8" />
                      </Dialog.Close>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-4 px-2">
                      <span className="flex flex-col justify-center items-center">
                        <Image
                          src={benefit.image}
                          width={60}
                          height={60}
                          alt="icono saludable"
                          className="py-2"
                        />
                        <p className="text-center text-[24px] font-[700]">
                          {benefit.title}
                        </p>
                      </span>

                      <p className="text-center text-[19px] font-[400]">
                        {benefit.description}
                      </p>
                    </div>
                  </Dialog.Content>
                </Dialog.Overlay>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </div>
    </div>
  );
}

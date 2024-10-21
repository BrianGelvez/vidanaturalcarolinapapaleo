import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonies() {
  return (
    <div
      id="testimonios"
      className="relative w-full h-auto flex flex-col lg:flex-row gap-12
                    py-24 px-4 md:px-8 lg:px-10 xl:px-16 2xl:px-48"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-white text-[40px] md:text-[45px] font-[600] text-center leading-tight">
            Personas que <span className="text-red-600">mejoraron</span>
            <br /> su calidad de vida
          </h2>
          <p className="text-[18px] font-[200] p-3 text-center">
            Lleva el mejor estilo de vida saludable con nuestro suplemento
          </p>
          <div
            className="w-full flex flex-row overflow-x-auto gap-4 lg:gap-12 justify-start
                         md:justify-center items-center lg:justify-start 2xl:justify-center py-8"
          >
            {/* Testimonio 1 */}
            <div
              className="flex-shrink-0 bg-white backdrop-blur-md text-black p-6 rounded-2xl w-[300px] 
             h-auto flex flex-col justify-center items-center gap-4 border-[1px] 
             border-[#252525] shadow-full bg-gradient-to-tl from-black/40 via-transparent"
            >
              <p className="text-[30px] font-semibold text-center text-black leading-none">
                <span className="text-red-600 text-[40px]">
                  <RiDoubleQuotesL />
                </span>{" "}
                Ahora corro 30 minutos más{" "}
                {/* <span className="text-red-600 text-[40px]">”</span> */}
              </p>
              <div className="w-full flex flex-col justify-center items-center">
                <Image
                  src="/yo.webp"
                  alt="Testimonio de cliente"
                  width={1000}
                  height={1000}
                  className="rounded-full object-cover w-[80px] h-[80px] border-solid border-[1.5px] shadow-full"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-[12px]">Brian Gelvez</p>
                <p className="text-[12px]">Cordoba, Argentina</p>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div
              className="flex-shrink-0 bg-white backdrop-blur-md text-black p-6 rounded-2xl w-[300px] 
             h-auto flex flex-col justify-center items-center gap-4 border-[1px] 
             border-[#252525] shadow-full bg-gradient-to-tl from-black/40 via-transparent"
            >
              <p className="text-[30px] font-semibold text-center text-black leading-none">
                <span className="text-red-600 text-[40px]">
                  <RiDoubleQuotesL />
                </span>{" "}
                Ahora corro 30 minutos más{" "}
                {/* <span className="text-red-600 text-[40px]">”</span> */}
              </p>
              <div className="w-full flex flex-col justify-center items-center">
                <Image
                  src="/yo.webp"
                  alt="Testimonio de cliente"
                  width={1000}
                  height={1000}
                  className="rounded-full object-cover w-[80px] h-[80px] border-solid border-[1.5px] shadow-full"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-[12px]">Brian Gelvez</p>
                <p className="text-[12px]">Cordoba, Argentina</p>
              </div>
            </div>
            {/* Testimonio 3 */}
            <div
              className="flex-shrink-0 bg-white backdrop-blur-md text-black p-6 rounded-2xl w-[300px] 
             h-auto flex flex-col justify-center items-center gap-4 border-[1px] 
             border-[#252525] shadow-full bg-gradient-to-tl from-black/40 via-transparent"
            >
              <p className="text-[30px] font-semibold text-center text-black leading-none">
                <span className="text-red-600 text-[40px]">
                  <RiDoubleQuotesL />
                </span>{" "}
                Ahora corro 30 minutos más{" "}
                {/* <span className="text-red-600 text-[40px]">”</span> */}
              </p>
              <div className="w-full flex flex-col justify-center items-center">
                <Image
                  src="/yo.webp"
                  alt="Testimonio de cliente"
                  width={1000}
                  height={1000}
                  className="rounded-full object-cover w-[80px] h-[80px] border-solid border-[1.5px] shadow-full"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-[12px]">Brian Gelvez</p>
                <p className="text-[12px]">Cordoba, Argentina</p>
              </div>
            </div>
            {/* Testimonio 4 */}
            <div
              className="flex-shrink-0 bg-white backdrop-blur-md text-black p-6 rounded-2xl w-[300px] 
             h-auto flex flex-col justify-center items-center gap-4 border-[1px] 
             border-[#252525] shadow-full bg-gradient-to-tl from-black/40 via-transparent"
            >
              <p className="text-[30px] font-semibold text-center text-black leading-none">
                <span className="text-red-600 text-[40px]">
                  <RiDoubleQuotesL />
                </span>{" "}
                Ahora corro 30 minutos más{" "}
                {/* <span className="text-red-600 text-[40px]">”</span> */}
              </p>
              <div className="w-full flex flex-col justify-center items-center">
                <Image
                  src="/yo.webp"
                  alt="Testimonio de cliente"
                  width={1000}
                  height={1000}
                  className="rounded-full object-cover w-[80px] h-[80px] border-solid border-[1.5px] shadow-full"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-[12px]">Brian Gelvez</p>
                <p className="text-[12px]">Cordoba, Argentina</p>
              </div>
            </div>
            {/* Testimonio 4 */}
            <div
              className="flex-shrink-0 bg-white backdrop-blur-md text-black p-6 rounded-2xl w-[300px] 
             h-auto flex flex-col justify-center items-center gap-4 border-[1px] 
             border-[#252525] shadow-full bg-gradient-to-tl from-black/40 via-transparent"
            >
              <p className="text-[30px] font-semibold text-center text-black leading-none">
                <span className="text-red-600 text-[40px]"><RiDoubleQuotesL /></span> Ahora corro
                30 minutos más{" "}
                {/* <span className="text-red-600 text-[40px]">”</span> */}
              </p>
              <div className="w-full flex flex-col justify-center items-center">
                <Image
                  src="/yo.webp"
                  alt="Testimonio de cliente"
                  width={1000}
                  height={1000}
                  className="rounded-full object-cover w-[80px] h-[80px] border-solid border-[1.5px] shadow-full"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-[12px]">Brian Gelvez</p>
                <p className="text-[12px]">Cordoba, Argentina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

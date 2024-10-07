import Image from "next/image";

export default function Testimonies() {
  return (
    <div
      className="relative w-full h-auto flex flex-col lg:flex-row gap-12
                    py-12 px-4 md:px-8 lg:px-10 xl:px-16"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col gap-12 justify-center items-center">
          <h2 className="text-[35px] font-bold text-center leading-tight">
            Personas que <span className="text-red-600">mejoraron</span> su calidad de vida
          </h2>
          <div
            className="w-full flex flex-row overflow-x-auto gap-4 justify-start
                         md:justify-center items-center py-8"
          >
            {/* Testimonio 1 */}
            <div
              className="flex-shrink-0 bg-black/30 backdrop-blur-md text-white p-6 rounded-lg w-[300px]
                           h-[400px] flex flex-col justify-between items-center border-[1px] border-[#252525] shadow-full bg-gradient-to-tl from-red-600/20 via-transparent"
            >
              <p className="text-[40px] font-bold leading-tight text-left">
                <span className="text-red-600 text-[40px]">“</span> Ahora corro
                30 minutos más{" "}
                <span className="text-red-600 text-[40px]">”</span>
              </p>
              <div className="">
                <Image
                  src="/yo.webp"
                  alt="Testimonio de cliente"
                  width={1000}
                  height={1000}
                  className="rounded-full object-cover w-20 h-20"
                />
              </div>
            </div>
            {/* Testimonio 2 */}
            <div
              className="flex-shrink-0 bg-black/30 backdrop-blur-md text-white p-6 rounded-lg w-[300px]
                           h-[400px] flex flex-col justify-between items-center border-[1px] border-[#252525] shadow-full bg-gradient-to-tl from-red-600/20 via-transparent"
            >
              <p className="text-[40px] font-bold leading-tight text-left">
                <span className="text-red-600 text-[40px]">“</span> Ya no tengo
                más depresión{" "}
                <span className="text-red-600 text-[40px]">”</span>
              </p>
              <div className="">
                <Image
                  src="/yo.webp"
                  alt="Testimonio de cliente"
                  width={1000}
                  height={1000}
                  className="rounded-full object-cover w-20 h-20"
                />
              </div>
            </div>
            {/* Testimonio 3 */}
            <div
              className="flex-shrink-0 bg-black/30 backdrop-blur-md text-white p-6 rounded-lg w-[300px]
                           h-[400px] flex flex-col justify-between items-center border-[1px] border-[#252525] shadow-full bg-gradient-to-tl from-red-600/20 via-transparent"
            >
              <p className="text-[40px] font-bold leading-tight text-left">
                <span className="text-red-600 text-[40px]">“</span> baje 30
                kilos en una semana{" "}
                <span className="text-red-600 text-[40px]">”</span>
              </p>
              <div className="">
                <Image
                  src="/yo.webp"
                  alt="Testimonio de cliente"
                  width={1000}
                  height={1000}
                  className="rounded-full object-cover w-20 h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function FourSteps() {
  return (
    <div id="sobremi" className="relative w-full h-auto bg-white pt-24 pb-8 px-4 md:px-8 lg:px-10 xl:px-16 2xl:px-48">
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="text-red-600 text-[40px] md:text-[45px] leading-tight font-[800] text-center">
          Cambia tu vida
        </h3>
        <p className="text-black font-bold text-[20px] md:text-[22px] text-center ">En solo cuatro pasos.</p>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="relative mt-6 flex justify-center">
            <Image
              src="/carolinaPapaleo2.webp"
              alt="Carolina Papaleo"
              width={450}
              height={450}
              className="rounded-lg shadow-lg object-cover lg:w-[800px]"
            />
                      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
            <div className="w-[50%] flex flex-col lg:flex-row justify-center items-center gap-8">
              {/* Paso 1 */}
              <div className="flex flex-col items-center lg:mb-36">
                <div className="w-24 h-24 2xl:w-36 2xl:h-36 rounded-full bg-white text-red-600 font-bold flex justify-center items-center text-4xl 2xl:text-6xl shadow-full">
                  1
                </div>
                <p className="mt-4 text-black text-center lg:text-left py-6 text-[18px] md:text-[20px] lg:text-[21px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>

              {/* Paso 2 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 2xl:w-36 2xl:h-36 rounded-full bg-white text-red-600 font-bold flex justify-center items-center text-4xl 2xl:text-6xl shadow-full">
                  2
                </div>
                <p className="mt-4 text-black text-center lg:text-left py-6 text-[18px] md:text-[20px] lg:text-[21px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>
            </div>

            <div className="w-[50%] flex flex-col lg:flex-row justify-center items-center gap-8">
              {/* Paso 3 */}
              <div className="flex flex-col items-center lg:mb-36">
                <div className="w-24 h-24 2xl:w-36 2xl:h-36 rounded-full bg-white text-red-600 font-bold flex justify-center items-center text-4xl 2xl:text-6xl shadow-full">
                  3
                </div>
                <p className="mt-4 text-black text-center lg:text-left py-6 text-[18px] md:text-[20px] lg:text-[21px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>

              {/* Paso 4 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 2xl:w-36 2xl:h-36 rounded-full bg-white text-red-600 font-bold flex justify-center items-center text-4xl 2xl:text-6xl shadow-full">
                  4
                </div>
                <p className="mt-4 text-black text-center lg:text-left py-6 text-[18px] md:text-[20px] lg:text-[21px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

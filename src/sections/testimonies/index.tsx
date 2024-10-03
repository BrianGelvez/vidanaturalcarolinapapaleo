import CardTestimonies from "./cardTestimonies";

export default function Testimonies() {
  return (
    <div className="px-3 pb-4 flex flex-col items-center relative">
      <div
        className="w-full h-[640px] flex flex-col justify-center 
                   items-center bg-gradient-to-b from-white
                   to-green-primary rounded-2xl relative lg:px-24"
      >
        <div className="flex flex-col justify-center items-center px-4">
          <h1 className="text-[45px] font-semibold text-orange-primary">
            TESTIMONIOS
          </h1>
          <p className="text-[#3b3b3b] text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore
          </p>
        </div>
        <div className="w-full p-4 overflow-x-auto">
          <div className="flex gap-4 flex-nowrap items-center justify-start lg:justify-center w-full mt-16">
            <CardTestimonies />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-green-primary mt-5" />
    </div>
  );
}

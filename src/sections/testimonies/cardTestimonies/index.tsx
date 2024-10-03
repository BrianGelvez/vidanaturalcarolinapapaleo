import Image from "next/image";
import { TestimoniesData } from "./testimoniesData";

export default function CardTestimonies() {
  return (
    <div className="flex flex-nowrap gap-4 pr-4">
      {TestimoniesData.map((card, index) => (
        <div
          key={index}
          className="relative w-[250px] h-[350px] bg-white px-4 rounded-xl flex flex-col items-center justify-start shrink-0"
        >
          {/* Imagen superpuesta */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[85px] h-[85px] rounded-full overflow-hidden border-[2px] border-orange-primary">
            <Image
              src="/yo.webp"
              alt="Testimonio"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Contenido del card */}
          <div className="text-[#4e4e4e] text-center mt-12 flex flex-col">
            <p className="text-[13px] mb-3">{card.description}</p>
            <h3 className="text-[20px] text-orange-primary">{card.name}</h3>
            <p className="text-[11px] mb-4">{card.location}</p>
            <Image
              src="/estrellas.webp"
              width={170}
              height={170}
              alt="5 estrellas"
              className="mx-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import { imageData } from "./image.data"; // Importar el archivo de data

export default function ProductSCroll() {
  return (
    <div className="w-full p-4 overflow-x-auto">
      <div className="flex gap-4 flex-nowrap items-center justify-between w-full">
        {imageData.map((image) => (
          <div
            key={image.id}
            className="w-32 md:w-48 h-32 md:h-48 bg-red-500 rounded-xl relative flex-shrink-0 overflow-hidden"
          >
            {/* Imagen */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-xl object-cover"
            />

            {/* Overlay con degradado y título */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-primary to-transparent flex items-end justify-start rounded-b-xl">
              <p className="text-white text-sm md:text-lg font-bold mb-2 ml-3">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

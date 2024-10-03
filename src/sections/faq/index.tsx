"use client";

import { BsChatText } from "react-icons/bs";
import { DataFaq } from "./dataFaq";

export default function Faq() {
  return (
    <div className="px-4">
      <div className="w-full flex flex-col justify-start items-center">
        <h3 className="text-green-primary text-[45px] text-center font-semibold mt-8">
          PREG. FRECUENTES
        </h3>
        <p className="text-[#3f3f3f] text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 py-4">
        {DataFaq.map((faq, index) => (
          <div
            key={index}
            className="w-full h-auto border flex flex-col rounded-lg shadow-light bg-white/70"
          >
            <label htmlFor={`faq-${index}`} className="peer:checked/faq:bg-black">
              <div className="flex flex-row justify-start items-center gap-2 p-2 rounded-xl">
                <span>
                  <BsChatText className="text-green-primary" size={30} />
                </span>
                {/* Centramos solo el texto usando flex-grow */}
                <p className="flex-grow text-center text-[#5f5f5f]">
                  {faq.questions}
                </p>
              </div>
            </label>
            <input
              id={`faq-${index}`}
              name={`faq-${index}`}
              type="checkbox"
              placeholder="faq"
              className="peer/faq hidden"
            />
            <div
              className="w-full max-h-0 rounded-5 z-10 peer-checked/faq:py-2 peer-checked/faq:max-h-96
                   transition-all duration-300 pl-5 pr-2
                   overflow-hidden"
            >
              <p className="text-[#5f5f5f]">{faq.answers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

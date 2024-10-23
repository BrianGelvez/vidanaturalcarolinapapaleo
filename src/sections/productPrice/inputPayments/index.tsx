import Image from "next/image";
import { paymentMethods } from "./listPayments";

export default function InputPayment() {
  return (
    <div
      className="
    w-full
    z-50 px-6
    max-h-0 absolute top-full left-0
    peer-checked/mp:max-h-96
    shadow-full shadow-[#E3E3E3]
    transition-all duration-300 
    overflow-hidden
    bg-[#fafafa] backdrop-blur-sm
    rounded-b-md
        "
    >
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 px-4 py-6">
        {paymentMethods.map((payment, index) => (
          <Image
            key={index}
            src={payment.src}
            width={payment.width}
            height={payment.height}
            alt={payment.alt}
            className="rounded-xl p-1 border-[#DA0000] shadow-full"
          />
        ))}
      </div>
    </div>
  );
}

// import Header from "@/components/header";
import Shipments from "./sections/shipments";
import ProductPreview from "./sections/productPreview";
import RifiedPurchase from "./sections/rifiedPurchase";
import Form from "./sections/form";
import ProductPreviewDesktop from "@/components/productPreviewDesktop";

export default function DatosDeEnvio() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col justify-center items-center">
      <RifiedPurchase />
      <div className="w-full lg:w-[85%] xl:w-[77%] 2xl:w-[74%] flex justify-center items-center flex-col lg:flex-row-reverse lg:gap-12">
        <ProductPreview />
        <ProductPreviewDesktop />
        <Shipments />
      </div>
      <Form />
    </div>
  );
}

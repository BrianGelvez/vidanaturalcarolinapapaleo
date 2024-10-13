// import Header from "@/components/header";
import ProductPreview from "./sections/productPreview"
import RifiedPurchase from "./sections/rifiedPurchase"

export default function DatosDeEnvio() {
    return (
        <div className="bg-white">
            <RifiedPurchase/>
            <ProductPreview/>
        </div>
    )
}
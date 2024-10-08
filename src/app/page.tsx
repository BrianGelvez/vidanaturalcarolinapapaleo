import Header from "@/components/header";
import Benefits from "@/sections/benefits";
import FourSteps from "@/sections/fourSteps";
import Home from "@/sections/home";
import Parallax from "@/sections/parallax";
import Product from "@/sections/product";
import ProductPrice from "@/sections/productPrice";
import Testimonies from "@/sections/testimonies";


export default function Main() {
  return (
    <div className="">
      <Header />
      <Home />
      <Product/>
      <Benefits/>
      <FourSteps/>
      <Parallax/>
      <Testimonies/>
      <ProductPrice/>
    </div>
  );
}

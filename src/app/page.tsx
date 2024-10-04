import Header from "@/components/header";
import Benefits from "@/sections/benefits";
import FourSteps from "@/sections/fourSteps";
import Home from "@/sections/home";
import Product from "@/sections/product";


export default function Main() {
  return (
    <div className="">
      <Header />
      <Home />
      <Product/>
      <Benefits/>
      <FourSteps/>
    </div>
  );
}

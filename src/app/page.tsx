import Header from "@/components/header";
import ScrollToTopButton from "@/components/scrollToTopButton";
import Benefits from "@/sections/benefits";
import Footer from "@/sections/footer";
import FourSteps from "@/sections/fourSteps";
import Home from "@/sections/home";
import Parallax from "@/sections/parallax";
import Product from "@/sections/product";
import ProductPrice from "@/sections/productPrice";
import Testimonies from "@/sections/testimonies";

export default function Main() {
  return (
    <div>
      <Header />
      <Home />
      <FourSteps />
      <Benefits />
      <Product />
      <Parallax />
      <Testimonies />
      <ProductPrice />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
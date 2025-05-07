import Footer from "@/src/component/footer/Footer";
import Header from "@/src/component/header/Header";
import Slide1 from "@/src/component/slide1/Slide1";
import Slide2 from "@/src/component/slide2/Slide2";
import Slide3 from "@/src/component/slide3/Slide3";
import Slide4 from "@/src/component/slide4/Slide4";
import Slide5 from "@/src/component/slide5/Slide5";
import Slide7 from "@/src/component/slide7/Slide7";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide7 />
      <Footer />
    </main>
  );
}

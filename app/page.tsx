import Image from "next/image";
import Navbar from "./components/navbar";
import HeroText from "./components/heroText";
import Service from "./components/service";
import Gallery from "./components/gallery";
import About from "./components/about";
import Uielements from "./components/uielements";
import Footer from "./components/footer";
import Announcement from "./components/announcement";

export default function Home() {
  return (
    <>
      <Navbar />
      <Announcement />
      <HeroText />
      <Service />
      <About />
      <Gallery />
      <Uielements />
      <Footer />
    </>
  )
}

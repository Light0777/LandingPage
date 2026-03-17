import Image from "next/image";
import Navbar from "./components/navbar";
import HeroText from "./components/heroText";
import Service from "./components/service";
import Gallery from "./components/gallery";
import GetInTouch from "./components/getInTouch";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroText />
      <Service />
      <Gallery />
      <GetInTouch />
    </>
  )
}

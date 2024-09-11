import Image from "next/image";
import BG from '../public/images/home-img.png';
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Logo section with responsive padding and height */}
      <div className="flex w-full h-[10vh] items-center pl-10 sm:pl-16 md:pl-28 text-[#952bff] font-bold">
        Globixo
      </div>


      {/* Background image section with responsive height */}
      <div className="w-[100%] h-[80vh] sm:h-[75vh] md:h-[68vh] bg-my_bg_image  bg-cover bg-center">
        <Hero />
      </div>
    </div>
  );
}

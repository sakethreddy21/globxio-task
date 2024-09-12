import Hero from "./_components/Hero";
import Company_Business from "./_components/cards/Company_Business";
import Exhibitor_Contact from "./_components/cards/Exhibitor_Contact";
import Company_Overview from "./_components/cards/Company_Overview";
import Zoloni_Past_Exhibitions from "./_components/cards/Zoloni_Past_Exhibitions";
import Videos_images from "./_components/cards/Videos_images";
import Members from "./_components/cards/Members";
import Files from "./_components/cards/Files";
import Sponsors from "./_components/cards/Sponsors";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Logo section with responsive padding and height */}
      <div className="flex w-full h-[10vh] items-center pl-10 sm:pl-16 md:pl-28 text-[#952bff] font-bold">
        Globixo
      </div>

      {/* Background image section with responsive height */}
      <div className="bg-[#f0ecff] relative flex-grow w-full h-auto sm:h-[75vh] md:h-[68vh] bg-my_bg_image bg-cover bg-center">
        {/* Hero section */}
        <Hero />
      </div>

      {/* Overlapping content */}
      <div className="flex-grow bg-[#f0ecff] sm:pt-4 sm:pb-4">
        <DeskTop_Order />
        <Mobile_Order />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

const DeskTop_Order = () => {
  return (
    <div className="hidden sm:flex sm:flex-row w-full sm:px-24 gap-4">
      {/* Company's Business and Overview */}
      <div className="flex flex-col sm:w-[62%] gap-4">
        <Company_Business />
        <Company_Overview />
        <Videos_images />
        <Files />
      </div>
      
      {/* Exhibitor and Past Exhibitions */}
      <div className="flex flex-col sm:w-[38%] gap-4">
        <Exhibitor_Contact />
        <Zoloni_Past_Exhibitions />
        <Members />
      </div>
    </div>
  );
};

const Mobile_Order = () => {
  return (
    <div className="flex flex-col sm:hidden w-full sm:px-20 gap-4">
      <Exhibitor_Contact />
      <Company_Business />
      <Company_Overview />
      <Videos_images />
      <Files />
      <Zoloni_Past_Exhibitions />
      <Members />
      <Sponsors />
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-[#12002e] text-[#9b94a8] font-semibold">
      <p>All rights reserved.</p>
    </div>
  );
};

import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import MemeCollageVideoSection from "./components/sections/MemeCollageVideoSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <MemeCollageVideoSection />
      </div>
      <div>
        <ServicesSection />
      </div>
    </>
  );
}

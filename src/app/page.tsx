import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ArticlesSection from "./components/sections/ArticlesSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <ServicesSection />
      </div>
      <div>
        <ArticlesSection />
      </div>
    </>
  );
}

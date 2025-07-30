import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import MerchSection from "./components/sections/MerchSection";
import ArticlesSection from "./components/sections/ArticlesSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <ProjectsSection />
      </div>
      <div>
        <ServicesSection />
      </div>
      <div>
        <ArticlesSection />
      </div>
      <div>
        <MerchSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <ContactSection />
      </div>
    </>
  );
}

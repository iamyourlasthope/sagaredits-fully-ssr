import Image from "next/image";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import HeroButtons from "./HeroButtons";
import AnimatedCurvedHeader from "./AnimatedCurvedHeader";
import styles from "./MemeCollageVideoSection.module.css";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video background filling full width and height of viewport */}
      <div className="absolute top-53 left-0 w-full h-full z-0 flex justify-center">
  <video
    src="/Video/Indian-Viral-Memes-Collage.webm"
    autoPlay
    loop
    muted
    playsInline
    className="max-w-full h-auto"
  />
</div>


      {/* Foreground content with curved SVG overlay */}
      <AnimatedCurvedHeader>
        <section className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-4">
          <div className="max-w-4xl w-full mx-auto text-center space-y-2 sm:space-y-3 lg:space-y-4">
            <h1 className="font-bold mt-0">
              <span className="block text-base sm:text-lg font-medium mb-1">
                Turning Ideas Into
              </span>
              <span className="flex flex-wrap justify-center items-baseline gap-x-1 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="whitespace-nowrap">
                  Viral Content With <span className="text-blue-500">Memes</span>
                </span>
              </span>
            </h1>

            <h2 className="block text-sm sm:text-lg font-normal mt-1">
              <span className="text-white">
                I help brands grow with scroll-stopping,{" "}
                <span className="font-bold">relatable</span> content.
              </span>
              <br />
              <span className="text-blue-300 italic font-bold">
                Let's make your next post go viral.
              </span>
            </h2>

            {/* Social Stats */}
            <nav className="flex flex-row gap-2 sm:gap-3 max-w-md mx-auto">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sagar.edits/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-3 flex items-center space-x-2 sm:space-x-3 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] max-w-[160px] sm:max-w-none mx-auto order-1"
                aria-label="Follow Sagar Singh on Instagram - 100K+ followers"
                title="Follow Sagar Singh on Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="text-left flex-1">
                  <p className="text-xs sm:text-sm text-blue-300">Instagram</p>
                  <p className="font-bold text-base sm:text-xl text-white">100K+</p>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/sagareditsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-3 flex items-center space-x-2 sm:space-x-3 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] max-w-[160px] sm:max-w-none mx-auto order-2"
                aria-label="Subscribe to Sagar Singh on YouTube - 100K+ subscribers"
                title="Subscribe to Sagar Singh on YouTube"
              >
                <Youtube className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="text-left flex-1">
                  <p className="text-xs sm:text-sm text-blue-300">YouTube</p>
                  <p className="font-bold text-base sm:text-xl text-white">100K+</p>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="mt-1 flex justify-center">
              <HeroButtons />
            </div>
          </div>
        </section>
      </AnimatedCurvedHeader>
    </div>
  );
}

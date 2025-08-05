import Image from "next/image";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import HeroButtons from "./HeroButtons";
import { Suspense } from "react";
import AnimatedCurvedHeader from "./AnimatedCurvedHeader";

export default function HeroSection() {
  return (
    <AnimatedCurvedHeader>
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28">
        {/* pt-28 to clear fixed navbar */}
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="space-y-3 sm:space-y-5 lg:space-y-6">
            <h1 className="font-bold mt-0">
              <span className="block text-base sm:text-xl font-medium mb-1 mt-10">
                {/* Extra margin-top here */}
                Turning Ideas Into
              </span>
              <span className="flex flex-wrap justify-center items-baseline gap-x-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
  <span className="whitespace-nowrap">
    Viral Content With <span className="text-blue-500">Memes</span>
  </span>
</span>

            </h1>
            <h2 className="block text-base sm:text-xl font-normal mt-1">
              <span className="text-white">
                I help brands grow with scroll-stopping,{" "}
                <span className="font-bold">relatable</span> content.
              </span>{" "}
              <br />
              <span className="text-blue-300 italic font-bold">
                Let's make your next post go viral.
              </span>
            </h2>
            {/* Social Stats */}
            <nav className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto">
              <a
                href="https://www.instagram.com/sagar.edits/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-3 flex items-center space-x-2 sm:space-x-3 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] max-w-[160px] sm:max-w-none mx-auto"
                aria-label="Follow Sagar Singh on Instagram - 100K+ followers"
                title="Follow Sagar Singh on Instagram"
              >
                <Instagram
                  className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0"
                  aria-hidden="true"
                />
                <div className="text-left flex-1">
                  <p className="text-xs sm:text-sm text-blue-300">Instagram</p>
                  <p className="font-bold text-base sm:text-xl text-white">
                    100K+
                  </p>
                </div>
                <ExternalLink
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://youtube.com/sagareditsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-3 flex items-center space-x-2 sm:space-x-3 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] max-w-[160px] sm:max-w-none mx-auto"
                aria-label="Subscribe to Sagar Singh on YouTube - 100K+ subscribers"
                title="Subscribe to Sagar Singh on YouTube"
              >
                <Youtube
                  className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0"
                  aria-hidden="true"
                />
                <div className="text-left flex-1">
                  <p className="text-xs sm:text-sm text-blue-300">YouTube</p>
                  <p className="font-bold text-base sm:text-xl text-white">
                    100K+
                  </p>
                </div>
                <ExternalLink
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  aria-hidden="true"
                />
              </a>
            </nav>
            {/* CTA Buttons */}
            <div className="mt-2 flex justify-center">
              <HeroButtons />
            </div>
          </div>
        </div>
      </section>
    </AnimatedCurvedHeader>
  );
}

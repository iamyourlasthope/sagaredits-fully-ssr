import { Instagram, Youtube, ExternalLink } from "lucide-react";
import HeroButtons from "./HeroButtons";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero content section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-20 lg:pt-24 pb-0 sm:pb-1 lg:pb-2">
        <div className="max-w-4xl w-full mx-auto text-center space-y-1 sm:space-y-2 lg:space-y-3">
          <h1 className="font-bold mt-0">
            <span className="block text-base sm:text-lg font-medium mb-0 sm:mb-1">
              Turning Ideas Into
            </span>
            <span className="flex flex-wrap justify-center items-baseline gap-x-1 text-3xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
              <span className="text-center">
                Viral Content With <span className="text-blue-500">Memes</span>
              </span>
            </span>
          </h1>

                      <h2 className="block text-sm sm:text-lg font-normal mt-0 sm:mt-1">
           <span className="text-white">
             <div className="block sm:inline sm:contents">
               <div className="block sm:inline">I help brands grow organically with</div>
               <div className="block sm:inline font-bold">HUMOROUS, RELATABLE, and VIRAL Content</div>
               <div className="block sm:inline">that captures attention and drives engagement.</div>
               <div className="text-blue-300 italic font-bold block sm:inline">Let&apos;s make your next post go viral.</div>
             </div>
           </span>
            </h2>

                                {/* Social Stats */}
          <nav className="flex flex-row gap-2 max-w-md mx-auto mt-6 sm:mt-0">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/sagar.edits/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-3 flex items-center space-x-2 sm:space-x-3 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] mx-auto order-1"
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
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-3 flex items-center space-x-2 sm:space-x-3 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] mx-auto order-2"
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
          <div className="mt-4 sm:mt-0 flex justify-center px-4 sm:px-0">
            <HeroButtons />
          </div>
        </div>
      </section>

      {/* Video section below content */}
      <div className="relative w-full z-0 overflow-hidden -mt-1">
        <div className="relative w-[350%] sm:w-[250%] md:w-[180%] lg:w-full -mx-[125%] sm:-mx-[75%] md:-mx-[40%] lg:mx-0">
          <video
            src="/Video/Indian-Viral-Memes-Collage.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
          
          {/* SVG Curve Overlay */}
          <div className="absolute -top-2 -left-2 w-[calc(100%+4px)] h-24 pointer-events-none">
     <svg
     viewBox="0 0 100 24"
     preserveAspectRatio="none"
     className="w-full h-full"
   >
                                                                               <path
          d="
            M0,0 
            L100,0 
            L100,8 
            Q50,30 0,8 
            Z
          "
          fill="#0a0a0a"  // exact hero page background color for seamless transition
        />
  </svg>
</div>






        </div>
      </div>
    </div>
  );
}

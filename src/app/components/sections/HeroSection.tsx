import Image from "next/image";
import { Instagram, Youtube, ArrowDown, ExternalLink } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="section-hero min-h-screen w-full flex items-center justify-center pt-28 px-10 sm:px-10 md:px-8 pb-6 sm:pb-16 relative overflow-hidden bg-fixed"
      role="banner"
      aria-label="Hero Section"
    >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="container mx-auto max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 sm:gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1 lg:-mt-12">
            <h1 className="font-bold">
              <span className="block text-base sm:text-xl font-medium mb-1">Meet the Guy Behind</span>
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">Sagar Edits</span>
              <span className="block text-lg sm:text-2xl font-semibold mt-2">
                Hi, I’m Sagar Singh – <span className="text-blue-400">viral content creator, video editor, and social media strategist.</span>
              </span>
            </h1>
            {/* Social Stats */}
            <nav className="flex flex-col sm:gap-4 justify-center lg:justify-start px-2 sm:px-0 sm:flex-col gap-3" aria-label="Social Media Profiles">
              <div className="flex flex-row gap-2 sm:flex-col sm:gap-4 w-full">
                <a
                  href="https://www.instagram.com/sagar.edits/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-4 flex items-center space-x-2 sm:space-x-4 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] max-w-[160px] sm:max-w-none mx-auto sm:mx-0"
                  aria-label="Follow Sagar Singh on Instagram - 100K+ followers"
                  title="Follow Sagar Singh on Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                  <div className="text-left flex-1">
                    <p className="text-xs sm:text-sm text-blue-300">Instagram</p>
                    <p className="font-bold text-base sm:text-xl text-white">100K+</p>
                  </div>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com/sagareditsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-4 flex items-center space-x-2 sm:space-x-4 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] max-w-[160px] sm:max-w-none mx-auto sm:mx-0"
                  aria-label="Subscribe to Sagar Singh on YouTube - 100K+ subscribers"
                  title="Subscribe to Sagar Singh on YouTube"
                >
                  <Youtube className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                  <div className="text-left flex-1">
                    <p className="text-xs sm:text-sm text-blue-300">YouTube</p>
                    <p className="font-bold text-base sm:text-xl text-white">100K+</p>
                  </div>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                </a>
              </div>
            </nav>
            {/* CTA Buttons (with smooth scroll and hover animation) */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-5 justify-center lg:justify-start px-2 sm:px-0" role="group" aria-label="Call to Action Buttons">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transform hover:scale-105 hover:shadow-2xl hover:bg-blue-700/90 active:scale-95 text-center justify-center sm:justify-start"
                style={{ minWidth: 220 }}
                aria-label="View Sagar Singh's portfolio work"
              >
                View My Work <ArrowDown className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-blue-400 text-blue-400 font-bold text-lg bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transform hover:scale-105 hover:shadow-xl hover:bg-blue-900/10 active:scale-95 text-center justify-center sm:justify-start"
                style={{ minWidth: 180 }}
                aria-label="Contact Sagar Singh for collaborations"
              >
                Get In Touch
              </a>
            </div>
          </div>
          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-4 sm:mb-0">
            <div
              className={`relative my-2 sm:my-0 animate-bounce-smooth w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden shadow-2xl`}
            >
              <Image
                src="/images/HeroPage.webp"
                alt="Meet the Guy Behind Sagar Edits. Sagar Singh is a viral content creator, expert video editor, and social media strategist behind the brand Sagar Edits. He helps brands grow organically through humorous and relatable content that captures attention, drives engagement, and gets widely shared across platforms like Instagram and YouTube."
                width={512}
                height={512}
                className="w-full h-full object-center object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
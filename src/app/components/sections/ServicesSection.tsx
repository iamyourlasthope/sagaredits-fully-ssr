// SSR/server component for SEO
import { TrendingUp, Video, Film } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-3 sm:py-18 lg:py-18 px-4 sm:px-10 md:px-0 pb-2 sm:pb-16 overflow-hidden bg-gradient-to-br from-[#0a232e] to-[#08222b] scroll-mt-20 sm:scroll-mt-0" id="services">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-blue-900 opacity-90 -z-10" />
      <div className="absolute inset-0 pointer-events-none -z-10" style={{background: "radial-gradient(ellipse at top right, #3b82f6 0%, transparent 70%)"}} />
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-3 sm:gap-6 relative z-10">
        {/* Heading and Subtitle */}
        <div className="flex flex-col items-center mb-1 sm:mb-2">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-2 whitespace-nowrap mt-4 sm:mt-0">
            My <span className="text-blue-500">Services</span>
          </h2>
          <h2 className="text-base sm:text-base md:text-xl text-blue-200 text-center mb-6 max-w-2xl">
            Let&apos;s create content that resonates, engages, and converts your audience.
          </h2>
        </div>
        {/* Main Service Card */}
        <div className="flex flex-col md:flex-row items-center bg-[#101828] border border-blue-400/80 rounded-2xl shadow-2xl p-4 sm:p-8 gap-4 sm:gap-8 mb-2 sm:mb-4 relative">
          {/* Most Popular Badge */}
          <span className="badge-bounce absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm font-bold px-6 py-1 rounded-full shadow border-2 border-blue-300 z-20" style={{letterSpacing: '0.5px'}}>Most Popular</span>
          {/* Image on top for mobile, right for desktop */}
          <div className="flex-1 flex justify-center items-center relative order-1 md:order-2 min-w-[160px] min-h-[160px] md:min-w-[240px] md:min-h-[240px]">
            <Image src="/images/Services.webp" alt="Services Visual" width={240} height={240} className="rounded-xl shadow-lg animate-bounce-smooth relative z-10" style={{ transform: "rotate(3deg)" }} />
          </div>
          {/* Content below image on mobile, left on desktop */}
          <div className="flex-1 flex flex-col gap-4 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue-900/40 p-3 rounded-lg"><TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-blue-400" /></span>
              <h2 className="text-xl md:text-3xl font-extrabold text-white"><strong>MEME marketing/video editing</strong> <span className="text-xl md:text-2xl">🔥</span></h2>
            </div>
            <p className="text-base md:text-lg text-white/80 mb-4">I create trend-based, relatable meme content and provide professional video editing to promote your brand or project across digital platforms. Let&apos;s make your next campaign go viral.</p>
            <div className="flex flex-wrap gap-4 md:gap-6 mb-4">
              <div className="flex items-center gap-2 text-blue-300 text-base md:text-base"><TrendingUp className="w-5 h-5 md:w-5 md:h-5" /> Viral content strategy</div>
              <div className="flex items-center gap-2 text-blue-300 text-base md:text-base"><Film className="w-5 h-5 md:w-5 md:h-5" /> Reels & short videos</div>
              <div className="flex items-center gap-2 text-blue-300 text-base md:text-base"><Video className="w-5 h-5 md:w-5 md:h-5" /> Video editing service</div>
            </div>
            {/* The campaign modal and notification logic should be handled in a client component */}
            <a href="/campaign" className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition-all text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Start Your Campaign</a>
          </div>
        </div>
        {/* Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
          <div className="bg-[#101828] border border-blue-700/40 rounded-2xl shadow-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2"><Video className="w-6 h-6 text-blue-400" /><h2 className="text-xl font-bold text-white">Video Editing</h2></div>
            <h3 className="text-blue-200 text-base">Professional video editing with Adobe Premiere Pro and After Effects for your brand content and campaigns.</h3>
          </div>
          <div className="bg-[#101828] border border-blue-700/40 rounded-2xl shadow-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-6 h-6 text-blue-400" /><h2 className="text-xl font-bold text-white">Viral Content Strategy</h2></div>
            <h3 className="text-blue-200 text-base">An end-to-end strategy for creating viral, trend-based content that maximizes reach and engagement for your brand.</h3>
          </div>
        </div>
      </div>
    </section>
  );
} 
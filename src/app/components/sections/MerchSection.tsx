import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function MerchSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-6 sm:py-16 px-10 sm:px-10 md:px-0 pb-6 sm:pb-16 overflow-hidden" style={{ backgroundColor: '#223b3b' }} id="merch">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-blue-900 opacity-90 -z-10" />
      <div className="absolute inset-0 pointer-events-none -z-10" style={{background: "radial-gradient(ellipse at top right, #3b82f6 0%, transparent 70%)"}} />
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center relative z-10">
        <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-center whitespace-nowrap mt-4 sm:mt-0">Merch</h1>
        <div className="w-full max-w-md mx-auto bg-[#101828] border border-blue-900/40 rounded-2xl shadow-2xl px-4 py-8 flex flex-col items-center text-center gap-6 md:max-w-4xl md:flex-row md:items-center md:text-left md:gap-12 md:bg-[#101828] md:border md:border-blue-900/40 md:rounded-2xl md:shadow-2xl md:px-12 md:py-12">
          {/* Right: Coming Soon (text first on mobile, left on desktop) */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-5 min-w-[160px] min-h-[160px] md:min-w-[320px] md:min-h-[320px] justify-center order-1 md:order-2">
            <span className="bg-blue-900/40 p-5 rounded-lg mb-2 flex items-center justify-center mx-auto md:mx-0 md:mb-4"><ShoppingBag className="w-10 h-10 text-blue-400" /></span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-2 md:mb-2 md:text-left">Coming Soon!</h3>
            <p className="text-base sm:text-lg md:text-xl text-blue-300 mb-4 max-w-lg md:text-left">
              We&apos;re working on something special. Exclusive merchandise is coming soon—stay tuned for amazing products!
            </p>
          </div>
          {/* Left: Meme Image (below text on mobile, left on desktop) */}
          <div className="flex-1 flex justify-center items-center relative min-w-[160px] min-h-[160px] md:min-w-[320px] md:min-h-[320px] order-2 md:order-1">
            <Image src="/images/merch.webp" alt="Meme Merch" width={320} height={320} className="rounded-xl shadow-lg animate-bounce-smooth relative z-10" style={{ transform: "rotate(3deg)" }} />
          </div>
        </div>
      </div>
    </section>
  );
} 
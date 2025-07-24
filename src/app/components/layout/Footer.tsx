import Link from 'next/link';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a101a] text-text border-t border-accent-dark py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Centered for mobile, left/right for PC */}
        <div className="flex-1 flex justify-center md:justify-start w-full order-1 md:order-none">
          <div className="font-heading text-base sm:text-lg font-bold text-white text-center md:text-left">
            Thank you, come again!
          </div>
        </div>
        {/* Center: Social Icons */}
        <div className="flex-1 flex justify-center w-full order-3 md:order-none">
          <div className="flex gap-4 sm:gap-8">
            <Link href="https://instagram.com/sagar.edits" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://youtube.com/SagarEditsofficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/sagarsingh12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 hover:text-blue-400 transition-colors" />
            </Link>
          </div>
        </div>
        {/* Copyright centered for mobile, right for PC */}
        <div className="flex-1 flex justify-center md:justify-end w-full order-2 md:order-none mt-2 md:mt-0">
          <div className="text-blue-200 text-sm sm:text-base text-center md:text-right">
            © 2025 Sagar Singh
          </div>
        </div>
      </div>
    </footer>
  );
} 
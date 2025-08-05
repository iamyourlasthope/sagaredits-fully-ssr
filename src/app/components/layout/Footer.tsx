import { Instagram, Youtube, Twitter, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-6 pb-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-3 md:gap-0">
        {/* Left: Brand + Description */}
        <div className="md:w-1/2 w-full mb-2 md:mb-0 md:pl-12">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
            Sagar <span className="text-blue-500">Edits</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg mb-2">
            Viral content creator, video editor, and social media strategist helping brands grow with creative, relatable content.
          </p>
        </div>
        {/* Right: Navigation + Legal/Social/Button */}
        <div className="md:w-1/2 w-full flex flex-col md:flex-row md:justify-end gap-2 md:gap-0 md:ml-32">
          <div className="w-full flex flex-row md:flex-row gap-x-2 md:gap-x-8 gap-y-0 md:gap-y-0">
            {/* Navigation */}
            <div className="flex-1 mb-2 md:mb-0 md:text-right">
              <ul className="space-y-2 text-base md:space-y-3">
                <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
                <li><Link href="/projects" className="hover:text-blue-400 transition">View My Work</Link></li>
                <li><Link href="/merch" className="hover:text-blue-400 transition">Merch</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
              </ul>
            </div>
            {/* Legal + Social + Button */}
            <div className="flex-1 flex flex-col items-start min-w-[120px] gap-y-1 md:items-start md:text-left md:ml-16">
              <ul className="space-y-2 text-base mb-2 text-left">
                <li><Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
              </ul>
              <div className="flex items-center space-x-2 mb-2 md:justify-start">
                <a href="https://www.instagram.com/sagar.edits/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition"><Instagram className="w-5 h-5" /></a>
                <a href="https://x.com/sagar_edits" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition"><Twitter className="w-5 h-5" /></a>
                <a href="https://www.facebook.com/sagareditss/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition"><Facebook className="w-5 h-5" /></a>
                <a href="https://linkedin.com/in/sagarsingh12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition"><Linkedin className="w-5 h-5" /></a>
                <a href="https://youtube.com/sagareditsofficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-500 transition"><Youtube className="w-5 h-5" /></a>
              </div>
              <Link href="/contact" className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-center text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4 border-t border-gray-800" />
      <div className="text-center md:text-center text-gray-400 text-sm py-2">
        © 2025 Sagar Edits. All Rights Reserved.
      </div>
    </footer>
  );
} 
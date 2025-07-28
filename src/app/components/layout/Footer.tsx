import { Instagram, Youtube, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-0 px-10 md:pr-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-6 md:gap-0">
        {/* Left: Brand + Description */}
        <div className="md:w-1/2 w-full mb-4 md:mb-0 md:pl-12">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
            Sagar <span className="text-blue-500">Edits</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg mb-2">
            Viral content creator, video editor, and social media strategist helping brands grow with creative, relatable content.
          </p>
        </div>
        {/* Right: Navigation + Legal/Social/Button */}
        <div className="md:w-1/2 w-full flex flex-col md:flex-row md:justify-end gap-4 md:gap-0 md:ml-32">
          <div className="w-full flex flex-row md:flex-row gap-x-4 md:gap-x-8 gap-y-0 md:gap-y-0">
            {/* Navigation */}
            <div className="flex-1 mb-2 md:mb-0 md:text-right">
              <ul className="space-y-2 text-base md:space-y-3">
                <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition">View My Work</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            {/* Legal + Social + Button */}
            <div className="flex-1 flex flex-col items-start min-w-[140px] gap-y-2 md:items-start md:text-left md:ml-16">
              <ul className="space-y-2 text-base mb-2 text-left">
                <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
              </ul>
              <div className="flex items-center space-x-3 mb-3 md:justify-start">
                <a href="https://www.instagram.com/sagar.edits/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition"><Instagram className="w-5 h-5" /></a>
                <a href="https://x.com/sagar_edits" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition"><Twitter className="w-5 h-5" /></a>
                <a href="https://www.facebook.com/sagareditss/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition"><Facebook className="w-5 h-5" /></a>
                <a href="https://linkedin.com/in/sagarsingh12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition"><Linkedin className="w-5 h-5" /></a>
                <a href="https://youtube.com/sagareditsofficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-500 transition"><Youtube className="w-5 h-5" /></a>
              </div>
              <a href="#contact" className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-center text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-8 border-t border-gray-800" />
      <div className="text-center md:text-center text-gray-400 text-sm py-4">
        © 2025 Sagar Edits. All Rights Reserved.
      </div>
    </footer>
  );
} 
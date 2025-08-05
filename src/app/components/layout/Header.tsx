"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/80 backdrop-blur-md border-b border-blue-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 md:py-2 lg:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold text-left bg-transparent border-none p-0 m-0 cursor-pointer hover:text-blue-400 focus:outline-none"
          >
            Sagar <span className="text-blue-500">Edits</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors text-sm xl:text-base">Home</Link>
            <Link href="/merch" className="text-white hover:text-blue-400 transition-colors text-sm xl:text-base">Merch</Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors text-sm xl:text-base">About</Link>
            <Link href="/articles" className="text-white hover:text-blue-400 transition-colors text-sm xl:text-base">Articles</Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors text-sm xl:text-base">Contact</Link>
            <Link href="/projects" className="text-white hover:text-blue-400 transition-colors text-sm xl:text-base">View My Work</Link>
            <Link href="/campaign" className="px-4 xl:px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold text-sm xl:text-base">Promote Your Brand</Link>
          </div>
          
          {/* Tablet Navigation (compact) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors text-sm">Home</Link>
            <Link href="/merch" className="text-white hover:text-blue-400 transition-colors text-sm">Merch</Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors text-sm">About</Link>
            <Link href="/articles" className="text-white hover:text-blue-400 transition-colors text-sm">Articles</Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors text-sm">Contact</Link>
            <Link href="/projects" className="text-white hover:text-blue-400 transition-colors text-sm">Work</Link>
            <Link href="/campaign" className="px-3 py-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold text-sm">Promote</Link>
          </div>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
} 
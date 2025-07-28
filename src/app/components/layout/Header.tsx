import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/80 backdrop-blur-md border-b border-blue-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg sm:text-xl font-bold text-left bg-transparent border-none p-0 m-0 cursor-pointer hover:text-blue-400 focus:outline-none"
          >
            Sagar <span className="text-blue-500">Edits</span>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
            <a href="#merch" className="text-white hover:text-blue-400 transition-colors">Merch</a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            <a href="#projects" className="text-white hover:text-blue-400 transition-colors">View My Work</a>
            <a href="#services" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold">Promote Your Brand</a>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
} 
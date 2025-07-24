import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/80 backdrop-blur-md border-b border-blue-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a
              href="#home"
              className="text-lg sm:text-xl font-bold text-left bg-transparent border-none p-0 m-0 cursor-pointer hover:text-accent focus:outline-none"
              style={{ background: 'none' }}
              aria-label="Go to Home"
            >
              Sagar <span className="text-accent-light">Edits</span>
            </a>
          </div>
          {/* Desktop Navigation (SSR) */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-blue-400 transition-colors touch-manipulation">Home</a>
            <a href="#projects" className="text-muted-foreground hover:text-blue-400 transition-colors touch-manipulation">Featured Projects</a>
            <a href="#services" className="text-muted-foreground hover:text-blue-400 transition-colors touch-manipulation">Services</a>
            <a href="#merch" className="text-muted-foreground hover:text-blue-400 transition-colors touch-manipulation">Merch</a>
            <a href="#about" className="text-muted-foreground hover:text-blue-400 transition-colors touch-manipulation">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-blue-400 transition-colors touch-manipulation">Contact</a>
          </div>
          {/* Mobile Hamburger (Client) */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
} 
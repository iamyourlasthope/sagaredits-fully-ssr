"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Merch", href: "/merch" },
  { name: "About", href: "/about" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
  { name: "View My Work", href: "/projects" },
  { name: "Promote Your Brand", href: "/campaign" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="p-2 touch-manipulation"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <Menu className="h-6 w-6" />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <nav
            className="fixed top-0 right-0 h-0 min-h-screen w-4/5 max-w-xs bg-[#101828] text-white shadow-2xl z-50 flex flex-col pt-8 px-6 animate-slide-in"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-blue-200 hover:text-blue-400 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              tabIndex={0}
            >
              &times;
            </button>
            <ul className="flex flex-col gap-7 mt-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block text-lg font-semibold py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 hover:bg-blue-900/10 hover:text-blue-400 transition-colors w-full text-left ${
                      item.name === "Promote Your Brand" 
                        ? "bg-blue-600 text-white hover:bg-blue-700" 
                        : ""
                    }`}
                    tabIndex={0}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <style jsx global>{`
            @media (max-width: 768px) {
              .animate-slide-in {
                animation: slideInDrawer 0.25s cubic-bezier(0.4,0,0.2,1);
              }
              @keyframes slideInDrawer {
                from {
                  transform: translateX(100%);
                  opacity: 0.7;
                }
                to {
                  transform: translateX(0);
                  opacity: 1;
                }
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
} 
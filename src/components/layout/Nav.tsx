"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const links = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about_us" },
    { name: "SERVICES", href: "/services", activePaths: ["/services", "/delhi-to-jaipur-taxi", "/radhe-taxi", "/outstation", "/airport"] },
    { name: "FLEET", href: "/fleet" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
              AARTI TAXI
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {links.map((link) => {
              const isActive = link.activePaths ? link.activePaths.includes(pathname) : pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`${isActive ? 'text-[#CA8A04] border-b-2 border-[#CA8A04]' : 'text-slate-600 hover:text-[#CA8A04] border-b-2 border-transparent'} transition-colors font-bold text-sm tracking-wide pb-1`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <a href="tel:+917838747009" className="bg-[#FACC15] hover:bg-[#EAB308] text-slate-900 font-bold py-2.5 px-6 rounded-full transition-all duration-200 ease-in-out flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <a href="tel:+917838747009" className="bg-[#FACC15] text-slate-900 font-bold py-2 px-4 rounded-full flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              Call
            </a>
            <button 
              onClick={toggleMenu}
              className="p-2 text-slate-900 hover:text-[#CA8A04] focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg pb-6 pt-2 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col px-4 space-y-2">
            {links.map((link) => {
              const isActive = link.activePaths ? link.activePaths.includes(pathname) : pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${isActive ? 'bg-amber-50 text-[#CA8A04]' : 'text-slate-600 hover:bg-slate-50'} block px-4 py-4 rounded-xl font-bold tracking-wide transition-colors`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

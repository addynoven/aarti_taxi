"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
              AARTI TAXI SERVICES
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            <Link href="/" className={`${pathname === '/' ? 'text-[#CA8A04] border-b-2 border-[#CA8A04]' : 'text-slate-600 hover:text-[#CA8A04] border-b-2 border-transparent'} transition-colors font-bold text-sm tracking-wide pb-1`}>
              HOME
            </Link>
            <Link href="/about_us" className={`${pathname === '/about_us' ? 'text-[#CA8A04] border-b-2 border-[#CA8A04]' : 'text-slate-600 hover:text-[#CA8A04] border-b-2 border-transparent'} transition-colors font-bold text-sm tracking-wide pb-1`}>
              ABOUT US
            </Link>
            <Link href="/services" className={`${pathname === '/services' || pathname === '/delhi-to-jaipur-taxi' || pathname === '/radhe-taxi' || pathname === '/outstation' || pathname === '/airport' ? 'text-[#CA8A04] border-b-2 border-[#CA8A04]' : 'text-slate-600 hover:text-[#CA8A04] border-b-2 border-transparent'} transition-colors font-bold text-sm tracking-wide pb-1`}>
              SERVICES
            </Link>
            <Link href="/fleet" className={`${pathname === '/fleet' ? 'text-[#CA8A04] border-b-2 border-[#CA8A04]' : 'text-slate-600 hover:text-[#CA8A04] border-b-2 border-transparent'} transition-colors font-bold text-sm tracking-wide pb-1`}>
              FLEET
            </Link>
            <Link href="/contact" className={`${pathname === '/contact' ? 'text-[#CA8A04] border-b-2 border-[#CA8A04]' : 'text-slate-600 hover:text-[#CA8A04] border-b-2 border-transparent'} transition-colors font-bold text-sm tracking-wide pb-1`}>
              CONTACT US
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <a href="tel:+917838747009" className="bg-[#FACC15] hover:bg-[#EAB308] text-slate-900 font-bold py-2.5 px-6 rounded-full transition-all duration-200 ease-in-out flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <span className="text-slate-900 font-bold">AARTI TAXI</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

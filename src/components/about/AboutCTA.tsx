import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function AboutCTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="bg-[#FACC15] rounded-[2.5rem] p-12 lg:p-20 text-center shadow-md">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] mb-8 max-w-xl mx-auto tracking-tight leading-tight">
          Ready to Experience the<br/>Road Differently?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="tel:+917838747009" className="inline-flex items-center justify-center bg-[#1A1A1A] text-white font-bold px-8 py-3.5 rounded-full hover:bg-black transition-colors shadow-sm text-sm group">
            Book Now <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link href="/services" className="inline-flex items-center justify-center bg-transparent border-2 border-[#1A1A1A]/10 text-[#1A1A1A] font-bold px-8 py-3 rounded-full hover:bg-[#EAB308] transition-colors text-sm">
            Join Our Journey
          </Link>
        </div>
      </div>
    </div>
  );
}

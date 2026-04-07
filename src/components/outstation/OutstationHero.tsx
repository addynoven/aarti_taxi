import { Shield } from "lucide-react";
import Link from "next/link";

export function OutstationHero() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 relative bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-green-400 text-green-900 font-extrabold px-3 py-1.5 rounded-full text-[0.65rem] mb-6 uppercase tracking-widest shadow-sm">
              <Shield className="w-3 h-3" /> PAN-INDIA PREMIUM SERVICE
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
              India's Trusted Outstation Taxi Service for Groups & Families
            </h1>
            
            <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-lg mb-10">
              From family vacations to group spiritual tours, we specialize in safe, long-distance travel across India with premium comfort.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 lg:mb-24">
              <a 
                href="tel:+917838747009"
                className="w-full sm:w-auto inline-flex justify-center flex-shrink-0 bg-[#A17A36] text-white hover:bg-[#8B692F] font-bold py-3.5 px-8 rounded-full transition-all duration-200 ease-in-out shadow-sm"
              >
                Call to Book
              </a>
              <Link 
                href="#fleet"
                className="w-full sm:w-auto inline-flex justify-center flex-shrink-0 bg-transparent text-slate-900 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 font-bold py-3.5 px-8 rounded-full transition-all duration-200 ease-in-out"
              >
                View Fleet
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 border-t border-slate-100 pt-8">
              <div>
                <h3 className="font-black text-[#926F34] text-2xl mb-1">10,000+</h3>
                <p className="text-slate-500 font-bold text-[0.65rem] uppercase tracking-widest">Completed Trips</p>
              </div>
              <div>
                <h3 className="font-black text-[#926F34] text-2xl mb-1">Verified</h3>
                <p className="text-slate-500 font-bold text-[0.65rem] uppercase tracking-widest">Highway Specialists</p>
              </div>
              <div>
                <h3 className="font-black text-[#926F34] text-2xl mb-1">24/7</h3>
                <p className="text-slate-500 font-bold text-[0.65rem] uppercase tracking-widest">Roadside Support</p>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px]">
            {/* The abstract frame holding the image */}
            <div className="absolute inset-0 bg-[#E8F0F2] rounded-[3rem] transform rotate-3 scale-105 shadow-inner"></div>
            <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden shadow-2xl bg-black transform -rotate-2">
              <img 
                src="/images/fleet/innova_crysta_taxi.png" 
                alt="Outstation SUV" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

import { Phone, CheckCircle2, ShieldCheck, Map, CreditCard } from "lucide-react";
import Link from "next/link";

export function IntercityHero() {
  return (
    <div className="relative">
      
      {/* Immersive Hero Section */}
      <div className="relative pt-32 pb-40 lg:pt-48 lg:pb-48 bg-slate-900 border-b-8 border-[#FACC15]">
        <img 
          src="/images/fleet/innova_crysta_taxi.png" 
          alt="Outstation Taxi" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-green-400 text-green-950 font-extrabold px-3 py-1.5 rounded-full text-[0.65rem] mb-6 uppercase tracking-widest">
              PREMIUM INTERCITY TRAVEL
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Outstation Taxi Service — <span className="text-[#CA8A04]">Reliable & Affordable</span> Rides Across India
            </h1>
            
            <p className="text-slate-200 text-lg font-medium leading-relaxed mb-10 max-w-lg">
              Experience the freedom of the open road with Aarti Taxi's curated outstation journeys. We promise well-maintained cars, and memories that last a lifetime.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="tel:+917838747009"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#A17A36] text-white hover:bg-[#8B692F] font-bold py-3.5 px-8 rounded-full transition-all duration-200 ease-in-out shadow-sm"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link 
                href="#rates"
                className="w-full sm:w-auto inline-flex justify-center flex-shrink-0 bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 px-8 rounded-full transition-all duration-200 ease-in-out"
              >
                View Rates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Trust Bar */}
      <div className="bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 lg:py-8">
            
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Verified Drivers</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              <span className="text-xs font-black text-slate-800 uppercase tracking-widest">24/7 Roadside Support</span>
            </div>
            
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-600" />
              <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Transparent Billing</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-green-600" />
              <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Pan-India Coverage</span>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

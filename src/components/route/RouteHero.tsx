import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

export function RouteHero() {
  const whatsappMessage = encodeURIComponent("Hi Aarti Taxi, I'm interested in booking a ride from Delhi to Jaipur. Could you please share the details?");

  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 border-b border-slate-200">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" 
          alt="Highway Driving" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-block bg-green-700 text-white font-black px-4 py-1.5 rounded-full text-[0.65rem] mb-6 uppercase tracking-widest shadow-sm">
            Popular Intercity Route
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-4">
            Delhi to Jaipur<br/>
            <span className="text-[#926F34]">Taxi Service</span>
          </h1>
          
          <p className="text-slate-700 text-lg font-medium leading-relaxed max-w-lg mb-8">
            Starting at <span className="font-extrabold text-[#1A1A1A]">₹2499</span>. Premium chauffeur-driven experience for the Pink City journey.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white rounded-full px-5 py-2.5 shadow-sm border border-slate-100 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#CA8A04]" />
              <div>
                <div className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">Travel Time</div>
                <div className="text-sm font-extrabold text-[#1A1A1A] leading-none">5 hrs Approx</div>
              </div>
            </div>
            <div className="bg-white rounded-full px-5 py-2.5 shadow-sm border border-slate-100 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#CA8A04]" />
              <div>
                <div className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">Distance</div>
                <div className="text-sm font-extrabold text-[#1A1A1A] leading-none">280 km</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href={`https://wa.me/917838747009?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center flex-shrink-0 bg-[#A17A36] text-white hover:bg-[#8B692F] font-bold py-3.5 px-8 rounded-full transition-all duration-200 ease-in-out shadow-sm"
            >
              Book Your Ride
            </a>
            <Link 
              href="#pricing"
              className="w-full sm:w-auto inline-flex justify-center flex-shrink-0 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 font-bold py-3.5 px-8 rounded-full transition-all duration-200 ease-in-out shadow-sm"
            >
              View Fare Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

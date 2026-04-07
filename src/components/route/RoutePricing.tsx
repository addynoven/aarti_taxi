import { Users, Briefcase, Car } from "lucide-react";

export function RoutePricing() {
  const sedanMsg = encodeURIComponent("Hi! I'd like to reserve a Prime Sedan for the Delhi to Jaipur route at ₹2499.");
  const suvMsg = encodeURIComponent("Hi! I'd like to reserve an Executive SUV (Innova) for the Delhi to Jaipur route at ₹3799.");

  return (
    <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 scroll-mt-20">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-2">Transparent Pricing</h2>
        <p className="text-slate-500 font-medium text-sm">Choose the vehicle that fits your travel style.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Prime Sedan Card */}
        <div className="bg-[#EFEFEF] rounded-[1.5rem] overflow-hidden flex flex-col md:flex-row group transition-all duration-300 hover:shadow-md">
          <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between order-2 md:order-1">
            <div>
              <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-1">Prime Sedan</h3>
              <p className="text-slate-500 text-xs font-medium mb-6">Perfect for solo or small family trips.</p>
              
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-black text-[#1A1A1A]">₹2,499</span>
                <span className="text-xs font-bold text-slate-500">/ All Inclusive*</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Car className="w-4 h-4 text-green-600" /> Swift Dzire / Toyota Etios
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Users className="w-4 h-4 text-green-600" /> 4 Passengers Max
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Briefcase className="w-4 h-4 text-green-600" /> 2 Large Luggage
                </li>
              </ul>
            </div>
            
            <a 
              href={`https://wa.me/917838747009?text=${sedanMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-sm font-bold text-center hover:bg-black transition-colors self-start"
            >
              Reserve Sedan
            </a>
          </div>
          <div className="h-48 md:h-auto md:w-[45%] relative order-1 md:order-2">
            <img src="/images/fleet/swift_dzire_taxi.png" alt="Prime Sedan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        {/* Executive SUV Card */}
        <div className="bg-[#FACC15] rounded-[1.5rem] overflow-hidden flex flex-col p-8 lg:p-10 relative group transition-all duration-300 hover:shadow-md">
          {/* Subtle bg texture/pattern could go here */}
          <div className="relative z-10 flex-col flex h-full justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-1">Executive SUV</h3>
              <p className="text-slate-800 text-xs font-medium mb-6">Travel in ultimate comfort with space.</p>
              
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-black text-[#1A1A1A]">₹3,799</span>
                <span className="text-xs font-bold text-slate-800">/ All Inclusive*</span>
              </div>

              <ul className="space-y-3 mb-8 text-[#1A1A1A]">
                <li className="flex items-center gap-2 text-sm font-medium">
                  <Car className="w-4 h-4 text-[#8B692F]" /> Toyota Innova Crysta
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <Users className="w-4 h-4 text-[#8B692F]" /> 6-7 Passengers Max
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <Briefcase className="w-4 h-4 text-[#8B692F]" /> Ample Legroom
                </li>
              </ul>
            </div>

            <a 
              href={`https://wa.me/917838747009?text=${suvMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8B692F] text-white px-6 py-3 rounded-full text-sm font-bold text-center hover:bg-[#725422] transition-colors self-start"
            >
              Reserve SUV
            </a>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 pointer-events-none">
            <Car className="w-full h-full translate-x-1/4 translate-y-1/4" />
          </div>
        </div>

      </div>
    </div>
  );
}

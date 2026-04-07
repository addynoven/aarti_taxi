import { PlaneTakeoff, UserCheck, Clock4, Calculator } from "lucide-react";

export function AirportAdvantages() {
  return (
    <div className="bg-[#F8F9FA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-2">The Aarti Advantage</h2>
          <p className="text-slate-500 font-medium text-sm">Why thousands trust us for their flights</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#EAEAEA] rounded-[2rem] p-8 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-10 h-10 bg-[#FACC15] rounded-xl flex items-center justify-center mb-6">
              <PlaneTakeoff className="w-5 h-5 text-[#854D0E]" />
            </div>
            <h3 className="font-extrabold text-[#1A1A1A] text-lg mb-3">Flight Tracking</h3>
            <p className="text-slate-500 font-medium text-xs leading-relaxed">
              We monitor your flight status in real-time to adjust for any delays.
            </p>
          </div>

          <div className="bg-[#EAEAEA] rounded-[2rem] p-8 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-10 h-10 bg-[#4ADE80] rounded-xl flex items-center justify-center mb-6">
              <UserCheck className="w-5 h-5 text-[#14532D]" />
            </div>
            <h3 className="font-extrabold text-[#1A1A1A] text-lg mb-3">Meet & Greet</h3>
            <p className="text-slate-500 font-medium text-xs leading-relaxed">
              Professional drivers waiting at arrivals with your nameplate.
            </p>
          </div>

          <div className="bg-[#EAEAEA] rounded-[2rem] p-8 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-10 h-10 bg-[#FACC15] rounded-xl flex items-center justify-center mb-6">
              <Clock4 className="w-5 h-5 text-[#854D0E]" />
            </div>
            <h3 className="font-extrabold text-[#1A1A1A] text-lg mb-3">Zero Wait Time</h3>
            <p className="text-slate-500 font-medium text-xs leading-relaxed">
              Punctuality is our core promise. We arrive 15 mins before time.
            </p>
          </div>

          <div className="bg-[#EAEAEA] rounded-[2rem] p-8 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-10 h-10 bg-[#4ADE80] rounded-xl flex items-center justify-center mb-6">
              <Calculator className="w-5 h-5 text-[#14532D]" />
            </div>
            <h3 className="font-extrabold text-[#1A1A1A] text-lg mb-3">Fixed Pricing</h3>
            <p className="text-slate-500 font-medium text-xs leading-relaxed">
              Transparent flat rates. No surge, no hidden tolls or taxes.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

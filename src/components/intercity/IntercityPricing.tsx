import { Receipt } from "lucide-react";

export function IntercityPricing() {
  const quoteMsg = encodeURIComponent("Hi Aarti Taxi! I'd like to calculate an estimated fare for an outstation trip.");

  return (
    <div className="bg-[#F8F9FA] py-24 pb-32" id="rates">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#EAEAEA] rounded-[3rem] p-6 lg:p-4 shadow-sm border border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-4 items-stretch">
          
          {/* Left Panel */}
          <div className="flex-1 p-6 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
              Transparent<br/>No-Surprise Pricing
            </h2>
            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-10 max-w-sm">
              We believe in clarity. What you see is what you pay. No hidden driver allowances, or night charges.
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center bg-[#F3F4F6] px-5 py-4 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 text-xs">Base Fare</span>
                <span className="font-medium text-slate-500 text-xs">Starts from ₹12/km</span>
              </div>
              <div className="flex justify-between items-center bg-[#F3F4F6] px-5 py-4 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 text-xs">Driver Allowance</span>
                <span className="font-medium text-slate-500 text-xs">Inclusive in distance</span>
              </div>
              <div className="flex justify-between items-center bg-[#F3F4F6] px-5 py-4 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 text-xs">Toll & Taxes</span>
                <span className="font-medium text-slate-500 text-xs">As per actuals</span>
              </div>
            </div>
          </div>

          {/* Right Yellow Panel */}
          <div className="flex-1 bg-[#FACC15] rounded-[2.5rem] p-10 lg:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-inner">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
            
            <Receipt className="w-8 h-8 text-[#854D0E] mb-6 relative z-10" />
            
            <h3 className="text-2xl font-black text-[#854D0E] tracking-tight mb-4 relative z-10">
              Request a Quote
            </h3>
            
            <p className="text-[#A16207] text-sm font-bold leading-relaxed mb-10 max-w-xs relative z-10">
              Enter your destination and get an instant estimated fare.
            </p>

            <a 
              href={`https://wa.me/917838747009?text=${quoteMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#1A1A1A] text-white hover:bg-black font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1 relative z-10"
            >
              Calculate Trip Cost
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

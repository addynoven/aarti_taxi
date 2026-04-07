import { CheckCircle, ShieldCheck } from "lucide-react";

export function ServiceHero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="inline-block bg-[#FACC15] text-slate-900 font-extrabold px-4 py-1.5 rounded-full text-[0.7rem] mb-6 uppercase tracking-widest shadow-sm">
        Urban Curator of Indian Roads
      </div>
      <h1 className="text-5xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-6 max-w-3xl leading-tight tracking-tight">
        Premium Taxi Services Across India
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium">
        Reliable, transparent, and comfortable travel for every journey, from daily airport runs to cross-country family trips.
      </p>
      <div className="flex flex-wrap gap-4 mb-20">
        <span className="flex items-center gap-2 bg-green-50 text-green-900 px-4 py-2 rounded-full font-bold text-sm">
          <ShieldCheck className="w-4 h-4 text-green-600" /> Verified Drivers
        </span>
        <span className="flex items-center gap-2 bg-green-50 text-green-900 px-4 py-2 rounded-full font-bold text-sm">
          <CheckCircle className="w-4 h-4 text-green-600" /> Transparent Pricing
        </span>
      </div>
    </div>
  );
}

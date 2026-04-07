import { Armchair, ShieldCheck, Headphones } from "lucide-react";

export function FleetFeatures() {
  return (
    <div className="bg-[#F3F4F6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-[#CA8A04] flex items-center justify-center shrink-0 shadow-sm">
              <Armchair className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-2">Pristine Comfort</h3>
              <p className="text-slate-500 font-medium text-xs leading-relaxed max-w-[250px]">
                Deep-cleaned interiors and climate control for every journey.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-[#CA8A04] flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-2">Verified Drivers</h3>
              <p className="text-slate-500 font-medium text-xs leading-relaxed max-w-[250px]">
                Background-checked professionals with years of highway experience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-[#CA8A04] flex items-center justify-center shrink-0 shadow-sm">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-2">24/7 Roadside Assistance</h3>
              <p className="text-slate-500 font-medium text-xs leading-relaxed max-w-[250px]">
                Round-the-clock support for total peace of mind on the road.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

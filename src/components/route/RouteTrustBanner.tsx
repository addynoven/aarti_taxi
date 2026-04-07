import { ShieldCheck, Star, BadgeIndianRupee, Headset } from "lucide-react";

export function RouteTrustBanner() {
  return (
    <div className="border-y border-slate-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-slate-200">
          
          <div className="flex flex-col items-center px-4">
            <ShieldCheck className="w-6 h-6 text-green-600 mb-3" />
            <h4 className="font-extrabold text-[0.65rem] text-slate-800 uppercase tracking-widest text-balance">
              Safe Family Travels
            </h4>
          </div>

          <div className="flex flex-col items-center px-4">
            <Star className="w-6 h-6 text-green-600 mb-3" />
            <h4 className="font-extrabold text-[0.65rem] text-slate-800 uppercase tracking-widest text-balance">
              4.8/5 Avg Rating
            </h4>
          </div>

          <div className="flex flex-col items-center px-4">
            <BadgeIndianRupee className="w-6 h-6 text-green-600 mb-3" />
            <h4 className="font-extrabold text-[0.65rem] text-slate-800 uppercase tracking-widest text-balance">
              Transparent Pricing
            </h4>
          </div>

          <div className="flex flex-col items-center px-4">
            <Headset className="w-6 h-6 text-green-600 mb-3" />
            <h4 className="font-extrabold text-[0.65rem] text-slate-800 uppercase tracking-widest text-balance">
              24/7 Roadside Support
            </h4>
          </div>

        </div>
      </div>
    </div>
  );
}

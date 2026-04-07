import { Car, Coffee, MapPin, CheckCircle2 } from "lucide-react";

export function RouteFeatures() {
  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Leftside Visual */}
          <div className="relative">
            <div className="bg-[#1A1A1A] rounded-[2rem] p-4 pb-24 relative shadow-2xl overflow-hidden max-w-[420px] mx-auto lg:mx-0">
              <div className="rounded-t-[1.5rem] overflow-hidden aspect-[4/5] relative bg-black">
                <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80" alt="Jaipur Journey View" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-lighten" />
              </div>
              {/* Fake taxi interior elements */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-4 bg-yellow-400 rounded-sm flex gap-1 items-center justify-between px-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-4 lg:right-0 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[280px]">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#1A1A1A] text-sm leading-tight mb-1">100% On-Time Policy</h4>
                <p className="text-xs font-medium text-slate-500 leading-snug">Our drivers arrive 15 minutes early to ensure your schedule stays on track.</p>
              </div>
            </div>
          </div>

          {/* Rightside Text content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] mb-12 tracking-tight">
              Curated for the <span className="text-[#926F34]">NH48</span> Journey
            </h2>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#F3F4F6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-[#926F34]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1A1A1A] text-lg mb-2">Expressway Optimized</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    We exclusively use the new Delhi-Mumbai Expressway route for faster, smoother, and safer travel.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#F3F4F6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-6 h-6 text-[#926F34]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1A1A1A] text-lg mb-2">Verified Stopovers</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    Our drivers know the best hygienic food stops with clean washrooms and quality food along the route.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#F3F4F6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#926F34]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1A1A1A] text-lg mb-2">Door-to-Door Ease</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    From Dwarka to Pink City's narrow lanes—we handle the navigation so you can relax.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

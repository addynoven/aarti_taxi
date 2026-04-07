import { CheckCircle2, ArrowRight } from "lucide-react";

export function OutstationFleet() {
  const innovaMsg = encodeURIComponent("Hi, I want to book an Innova Crysta for an outstation trip.");
  const tempoMsg = encodeURIComponent("Hi, I want to book a Tempo Traveller for a group trip.");

  return (
    <div id="fleet" className="bg-[#F9FAFB] py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-2">Our Premium Group Fleet</h2>
          <p className="text-slate-500 font-medium text-sm">Specially curated vehicles designed for long-distance stability and passenger comfort.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Innova Card */}
          <div className="bg-white rounded-[2rem] p-4 flex flex-col sm:flex-row group transition-all duration-300 hover:shadow-xl shadow-sm border border-slate-100 h-full">
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-2">Innova Crysta</h3>
                <p className="text-slate-500 font-medium text-xs mb-8 max-w-[200px] leading-relaxed">
                  Perfect for family trips and small groups (6-7 seats).
                </p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Plush Leather Interiors
                  </li>
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Dual AC Control
                  </li>
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Ample Luggage Space
                  </li>
                </ul>
              </div>
              <a 
                href={`https://wa.me/917838747009?text=${innovaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#926F34] font-bold text-sm hover:text-[#725422] transition-colors"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="w-full sm:w-[45%] h-64 sm:h-auto rounded-3xl overflow-hidden relative mt-4 sm:mt-0">
               <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80" alt="Innova Crysta" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Tempo Traveller Card */}
          <div className="bg-white rounded-[2rem] p-4 flex flex-col sm:flex-row group transition-all duration-300 hover:shadow-xl shadow-sm border border-slate-100 h-full">
             <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-2">Tempo Traveller</h3>
                <p className="text-slate-500 font-medium text-xs mb-8 max-w-[200px] leading-relaxed">
                  Ideal for corporate outings and large families (14-25 seats).
                </p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Pushback Recliner Seats
                  </li>
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> On-board Entertainment
                  </li>
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> High Roof Cabin
                  </li>
                </ul>
              </div>
              <a 
                href={`https://wa.me/917838747009?text=${tempoMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#926F34] font-bold text-sm hover:text-[#725422] transition-colors"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="w-full sm:w-[45%] h-64 sm:h-auto rounded-3xl overflow-hidden relative mt-4 sm:mt-0">
               <img src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80" alt="Tempo Traveller" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

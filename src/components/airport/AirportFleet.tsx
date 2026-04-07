import { Users, Briefcase } from "lucide-react";

export function AirportFleet() {
  return (
    <div className="bg-[#F3F4F6] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">Our Premium Fleet</h2>
        </div>

        <div className="space-y-8">
          
          {/* Card 1: Executive Sedan */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col md:flex-row h-auto md:h-80">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-slate-100 text-slate-500 font-extrabold px-3 py-1.5 rounded-full text-[0.55rem] mb-4 uppercase tracking-widest w-max border border-slate-200">
                MOST POPULAR
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-4">Executive Sedan</h3>
              <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-sm mb-8">
                Perfect for solo travelers or small families. Models include Maruti Dzire, Honda Amaze, and similar premium sedans.
              </p>
              
              <div className="flex gap-6 mt-auto">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#CA8A04]">
                  <Users className="w-4 h-4" /> 4 Seats
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#CA8A04]">
                  <Briefcase className="w-4 h-4" /> 2 Check-in
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative h-64 md:h-full">
              <img src="/images/fleet/swift_dzire_taxi.png" alt="Dzire" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Card 2: Spacious SUV */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col md:flex-row-reverse h-auto md:h-80">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-slate-100 text-slate-500 font-extrabold px-3 py-1.5 rounded-full text-[0.55rem] mb-4 uppercase tracking-widest w-max border border-slate-200">
                GROUP TRAVEL
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-4">Spacious SUV</h3>
              <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-sm mb-8">
                Ideal for large groups or heavy luggage. Featuring Toyota Innova Crysta and Maruti Ertiga for maximum comfort.
              </p>
              
              <div className="flex gap-6 mt-auto">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#CA8A04]">
                  <Users className="w-4 h-4" /> 6-7 Seats
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#CA8A04]">
                  <Briefcase className="w-4 h-4" /> 4 Check-in
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative h-64 md:h-full">
              <img 
                src="/images/fleet/innova_crysta_taxi.png" 
                alt="Spacious SUV" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

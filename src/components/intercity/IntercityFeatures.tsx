import { MapPin, UserCheck, CalendarDays } from "lucide-react";

export function IntercityFeatures() {
  return (
    <div className="bg-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] border border-slate-100 group">
            <img 
              src="/images/fleet/innova_crysta_taxi.png" 
              alt="Premium Car Interior" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <h3 className="text-[#1A1A1A] font-extrabold text-lg mb-1">Pristine Comfort</h3>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                Every vehicle undergoes a 50-point safety and cleanliness inspection before every ride.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-12">
              Why travel with <span className="text-[#CA8A04]">Aarti Taxi</span>?
            </h2>

            <div className="space-y-10">
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#FACC15] shrink-0 rounded-full flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-[#854D0E]" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-2">Doorstep Pickup & Drop</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                    No more dragging luggage. We pick you up from your front door and drop you exactly where you need to be.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#FACC15] shrink-0 rounded-full flex items-center justify-center shadow-sm">
                  <UserCheck className="w-5 h-5 text-[#854D0E]" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-2">Curated Professional Drivers</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                    Our drivers aren't just experts on the road; they are trained in etiquette and local knowledge for a smooth journey.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#FACC15] shrink-0 rounded-full flex items-center justify-center shadow-sm">
                  <CalendarDays className="w-5 h-5 text-[#854D0E]" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-2">Flexible Scheduling</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                    Plans changed? No problem. We offer free cancellations up to 12 hours before your scheduled departure.
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

import { Users, Briefcase, ArrowRight } from "lucide-react";

export function FleetSelection() {
  const cars = [
    {
      id: "sedan",
      name: "Swift Dzire (Sedan)",
      desc: "Ideal for business solo trips or couples.",
      seats: "4 Seats",
      bags: "2 Bags",
      price: "12/km",
      tag: "POPULAR",
      tagColor: "bg-slate-800",
      image: "/images/fleet/swift_dzire_taxi.png",
    },
    {
      id: "suv",
      name: "Innova Crysta (SUV)",
      desc: "Ultimate comfort for long distance family journeys.",
      seats: "6-7 Seats",
      bags: "4 Bags",
      price: "18/km",
      tag: "BEST SELLER",
      tagColor: "bg-green-600",
      image: "/images/fleet/innova_crysta_taxi.png",
    },
    {
      id: "tempo",
      name: "Tempo Traveller (Group)",
      desc: "Perfect for large groups and extended families.",
      seats: "12-25 Seats",
      bags: "10+ Bags",
      price: "25/km",
      tag: "",
      tagColor: "",
      image: "/images/fleet/tempo_traveller_taxi.png",
    }
  ];

  return (
    <div className="bg-[#FAFAFA] py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
          <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight border-b-[3px] border-[#CA8A04] pb-2">
            VEHICLE SELECTION
          </h2>
          <p className="text-slate-500 font-medium text-xs">Filtered by Pan-India availability</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => {
            const encodeMsg = encodeURIComponent(`Hi, I'm interested in booking a ${car.name}.`);
            return (
              <div key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col group">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img src={car.image} alt={car.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {car.tag && (
                    <div className={`absolute top-4 left-4 ${car.tagColor} text-white font-extrabold text-[0.55rem] px-2 py-1 uppercase tracking-widest rounded-sm`}>
                      {car.tag}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-2">{car.name}</h3>
                  <p className="text-slate-500 text-xs font-medium mb-6 leading-relaxed flex-1">
                    {car.desc}
                  </p>
                  
                  <div className="flex gap-4 mb-8">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <Users className="w-3.5 h-3.5 text-green-600" /> {car.seats}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <Briefcase className="w-3.5 h-3.5 text-green-600" /> {car.bags}
                    </div>
                  </div>

                  <div className="flex items-end justify-between pt-6 border-t border-slate-100">
                    <div>
                      <div className="text-[0.55rem] font-bold text-slate-400 uppercase tracking-widest mb-1">Starting From</div>
                      <div className="text-lg font-black text-[#CA8A04]">₹{car.price}</div>
                    </div>
                    <a 
                      href={`https://wa.me/917838747009?text=${encodeMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#CA8A04] hover:text-white transition-colors"
                      aria-label={`Book ${car.name}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

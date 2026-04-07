export function FleetHero() {
  return (
    <div className="pt-32 lg:pt-40 pb-20 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-xl">
            <div className="inline-block bg-green-400 text-white font-extrabold px-3 py-1.5 rounded-sm text-[0.65rem] mb-6 uppercase tracking-widest shadow-sm">
              PREMIUM MOBILITY
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
              Our Pan-India Fleet
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed mb-8">
              From sedans for solo business trips to 25-seater travellers for family groups, find the perfect ride for your long-distance journey.
            </p>
          </div>

          <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/fleet/innova_crysta_taxi.png" 
              alt="Highway SUV" 
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

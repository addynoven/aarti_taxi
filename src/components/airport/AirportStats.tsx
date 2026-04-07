export function AirportStats() {
  return (
    <div className="bg-[#725422] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#8B692F]">
          
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">10k+</div>
            <div className="text-[0.55rem] font-bold text-[#FACC15] uppercase tracking-widest">RIDES COMPLETED</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">4.8/5</div>
            <div className="text-[0.55rem] font-bold text-[#FACC15] uppercase tracking-widest">USER RATING</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">24/7</div>
            <div className="text-[0.55rem] font-bold text-[#FACC15] uppercase tracking-widest">AVAILABLE SUPPORT</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">100%</div>
            <div className="text-[0.55rem] font-bold text-[#FACC15] uppercase tracking-widest">ON-TIME PROMISE</div>
          </div>

        </div>
      </div>
    </div>
  );
}

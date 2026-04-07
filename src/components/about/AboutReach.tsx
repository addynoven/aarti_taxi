export function AboutReach() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
      <div className="bg-[#F3F4F6] rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute right-0 top-0 h-full w-2/3 bg-white/40 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

        <div className="w-full lg:w-1/2 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-6">Our Reach Across India</h2>
          <p className="text-slate-600 font-medium leading-relaxed max-w-md mb-12">
            From the bustling streets of Mumbai to the serene heights of Manali. We connect more than 200+ cities with a network of over 10,000 satisfied riders.
          </p>
          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
            <div>
              <div className="text-3xl font-extrabold text-[#926F34] mb-1">200+</div>
              <div className="text-[0.6rem] font-black uppercase text-slate-800 tracking-widest">Cities Reached</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#926F34] mb-1">10k+</div>
              <div className="text-[0.6rem] font-black uppercase text-slate-800 tracking-widest">Rides Completed</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#926F34] mb-1">24/7</div>
              <div className="text-[0.6rem] font-black uppercase text-slate-800 tracking-widest">Support</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#926F34] mb-1">4.8</div>
              <div className="text-[0.6rem] font-black uppercase text-slate-800 tracking-widest">Average Rating</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] relative z-10">
          <div className="aspect-square bg-black rounded-[2rem] overflow-hidden shadow-xl p-2 relative">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/40 via-black to-black"></div>
             <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80" alt="India Map Concept" className="w-full h-full object-cover rounded-[1.5rem] opacity-60 mix-blend-luminosity" />
          </div>
        </div>
      </div>
    </div>
  );
}

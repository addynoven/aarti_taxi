import Link from "next/link";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
      <div className="col-span-1 bg-white rounded-[2rem] p-10 shadow-sm flex flex-col items-start border border-slate-100 relative group cursor-pointer hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-[#FACC15] shadow-sm rounded-[10px] flex items-center justify-center mb-6 font-bold text-lg">
          &rarr;
        </div>
        <h3 className="text-[1.3rem] font-bold text-[#1A1A1A] mb-3">One-Way Intercity</h3>
        <p className="text-slate-600 mb-8 flex-grow text-sm font-medium leading-relaxed max-w-[200px]">
          Pay only for the distance you travel. No return fare. Perfect for single-way relocations.
        </p>
        <Link href="/outstation" className="text-[#926F34] font-bold text-xs tracking-wide uppercase flex items-center gap-2 group-hover:text-[#735728]">
          Explore Intercity &rarr;
        </Link>
      </div>
      <div className="col-span-1 lg:col-span-2 bg-[#1A1A1A] rounded-[2rem] p-10 lg:p-12 shadow-lg overflow-hidden relative flex items-center">
        <div className="relative z-10 w-full lg:w-3/5">
          <h3 className="text-3xl font-extrabold text-white mb-4">Group & Family Travel</h3>
          <p className="text-slate-400 mb-10 text-[1rem] font-medium leading-relaxed max-w-sm">
            Specialized fleet for 6-25 passengers. Safe, spacious, and reliable for spiritual tours or vacations.
          </p>
          <Link href="/fleet" className="inline-flex items-center justify-center bg-[#FACC15] text-slate-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-500 transition-colors shadow-sm text-sm">
            View Fleet Options
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 w-2/5 h-[90%] hidden lg:block">
           <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80" alt="Van" className="absolute inset-0 w-full h-full object-cover object-left-bottom rounded-tl-[3rem]" />
        </div>
      </div>
    </div>
  );
}

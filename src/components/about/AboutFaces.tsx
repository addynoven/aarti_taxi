import { ShieldCheck } from "lucide-react";

export function AboutFaces() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">The Faces of Aarti Taxi</h2>
        <p className="text-slate-500 font-medium text-sm max-w-xs mt-4 md:mt-0 md:text-right">
          Our focus and drivers are the heartbeat of our service. Professional, vetted, and always ready.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative rounded-[1.5rem] overflow-hidden group shadow-sm bg-slate-100 flex flex-col h-[400px]">
          <div className="relative flex-grow overflow-hidden">
             <img src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80" alt="Driver" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="bg-slate-100 p-6 z-10">
            <div className="flex items-center gap-1 text-[0.65rem] font-black text-green-700 uppercase tracking-widest mb-1">
              <ShieldCheck className="w-3 h-3" /> VERIFIED TEAM
            </div>
            <h4 className="font-extrabold text-[#1A1A1A] text-lg">Experienced Drivers</h4>
          </div>
        </div>

        <div className="relative rounded-[1.5rem] overflow-hidden group shadow-sm bg-slate-100 flex flex-col h-[400px]">
          <div className="relative flex-grow overflow-hidden">
             <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80" alt="Clean Fleet" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="bg-slate-100 p-6 z-10">
            <div className="flex items-center gap-1 text-[0.65rem] font-black text-green-700 uppercase tracking-widest mb-1">
              <ShieldCheck className="w-3 h-3" /> PRISTINE FLEET
            </div>
            <h4 className="font-extrabold text-[#1A1A1A] text-lg">Clean & Comfortable</h4>
          </div>
        </div>

        <div className="relative rounded-[1.5rem] overflow-hidden group shadow-sm bg-slate-100 flex flex-col h-[400px]">
          <div className="relative flex-grow overflow-hidden">
             <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80" alt="Family" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="bg-slate-100 p-6 z-10">
            <div className="flex items-center gap-1 text-[0.65rem] font-black text-green-700 uppercase tracking-widest mb-1">
              <ShieldCheck className="w-3 h-3" /> SAFETY FIRST
            </div>
            <h4 className="font-extrabold text-[#1A1A1A] text-lg">Safe Family Travels</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

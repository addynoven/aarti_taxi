import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function ServiceOutstation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
      <div className="relative h-[380px] rounded-[2rem] overflow-hidden shadow-md">
        <img src="/images/fleet/innova_crysta_taxi.png" alt="Outstation Travel" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div>
        <div className="text-[#926F34] font-bold text-xs uppercase tracking-widest mb-3">Our Specialty</div>
        <h2 className="text-3xl font-extrabold text-[#1A1A1A] mb-5 tracking-tight leading-tight">Outstation & Long-<br/>Distance</h2>
        <p className="text-slate-600 text-[1rem] font-medium mb-6 leading-relaxed max-w-md">
          Verified highway specialists for intercity travel. Group-friendly options like Innova and Tempo Traveller for extended journeys across the country.
        </p>
        <div className="flex items-start gap-4 mb-8 max-w-sm">
          <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-[#1A1A1A] text-sm">Verified Highway Specialists</h4>
            <p className="text-xs text-slate-500 font-medium">Drivers experienced in long-haul terrain and night driving.</p>
          </div>
        </div>
        <Link href="/outstation" className="inline-flex items-center justify-center bg-[#FACC15] text-slate-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors shadow-sm text-sm">
          Explore Intercity Services &rarr;
        </Link>
      </div>
    </div>
  );
}

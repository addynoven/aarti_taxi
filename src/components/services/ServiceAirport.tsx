import Link from "next/link";
import { ShieldCheck, Clock, Navigation } from "lucide-react";

export function ServiceAirport() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
      <div className="order-2 lg:order-1 lg:pl-12">
        <div className="text-[#926F34] font-bold text-xs uppercase tracking-widest mb-3">Precision Timing</div>
        <h2 className="text-3xl font-extrabold text-[#1A1A1A] mb-5 tracking-tight">Airport Transfers</h2>
        <p className="text-slate-600 text-[1rem] font-medium mb-8 leading-relaxed max-w-md">
          24/7 punctual pickups and drops with flight tracking. Meet & Greet service available to ensure you never have to wait.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-3 text-sm font-bold text-[#1A1A1A]">
            <Clock className="w-5 h-5 text-[#926F34]" /> 24/7 Availability
          </li>
          <li className="flex items-center gap-3 text-sm font-bold text-[#1A1A1A]">
            <Navigation className="w-5 h-5 text-[#926F34]" /> Real-time Flight Tracking
          </li>
          <li className="flex items-center gap-3 text-sm font-bold text-[#1A1A1A]">
            <ShieldCheck className="w-5 h-5 text-[#926F34]" /> Professional Meet & Greet
          </li>
        </ul>
        <Link href="/airport" className="inline-flex items-center justify-center bg-[#1A1A1A] text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-colors shadow-sm text-sm">
          Explore Airport Services &rarr;
        </Link>
      </div>
      <div className="order-1 lg:order-2 relative h-[380px] rounded-[2rem] overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80" alt="Airport Taxi" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </div>
  );
}

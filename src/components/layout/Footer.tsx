import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4">
            <h2 className="text-xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">AARTI TAXI SERVICES</h2>
            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs mb-8">
              Providing premium, reliable, and affordable taxi services across all major cities in India since 2018.
            </p>
            <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 font-extrabold px-3 py-1.5 rounded-full text-[0.6rem] uppercase tracking-widest shadow-sm">
              <CheckCircle2 className="w-3 h-3" /> 10,000+ RIDES COMPLETED
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-extrabold text-[#1A1A1A] text-sm mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/outstation" className="text-slate-500 hover:text-[#CA8A04] transition-colors text-xs font-bold">Intercity & Outstation</Link></li>
              <li><Link href="/airport" className="text-slate-500 hover:text-[#CA8A04] transition-colors text-xs font-bold">Airport Transfers</Link></li>
              <li><Link href="/fleet" className="text-slate-500 hover:text-[#CA8A04] transition-colors text-xs font-bold">Our Fleet</Link></li>
              <li><Link href="/delhi-to-jaipur-taxi" className="text-slate-500 hover:text-[#CA8A04] transition-colors text-xs font-bold">Delhi to Jaipur</Link></li>
              <li><Link href="/radhe-taxi" className="text-slate-500 hover:text-[#CA8A04] transition-colors text-xs font-bold">Radhe Taxi</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-2">
            <h3 className="font-extrabold text-[#1A1A1A] text-sm mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-[#CA8A04] transition-colors text-xs font-bold">Terms</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-[#CA8A04] transition-colors text-xs font-bold">Privacy</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-[#CA8A04] transition-colors text-xs font-bold">Safety</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-[#CA8A04] transition-colors text-xs font-bold">Driver Partner</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="font-extrabold text-[#1A1A1A] text-sm mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500">
                <Phone className="w-4 h-4 text-[#CA8A04] shrink-0 mt-0.5" />
                <span className="text-xs font-bold">+91 7838747009</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <Mail className="w-4 h-4 text-[#CA8A04] shrink-0 mt-0.5" />
                <span className="text-xs font-bold">bookings@aartitaxiservices.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <MapPin className="w-4 h-4 text-[#CA8A04] shrink-0 mt-0.5" />
                <span className="text-xs font-bold leading-relaxed">Shop no. 57, Wave Galleria,<br/>Wave City, Ghaziabad, UP</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 mt-16 pt-8 text-center md:text-left">
          <p className="text-slate-400 font-bold text-[0.65rem] uppercase tracking-widest">
            © {new Date().getFullYear()} Aarti Taxi Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

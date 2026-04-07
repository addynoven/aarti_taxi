import { Phone, MapPin } from "lucide-react";

export function ContactDetails() {
  return (
    <div className="bg-[#EFEFEF] rounded-[2rem] p-8 lg:p-10 h-full">
      <h3 className="text-xl font-extrabold text-[#1A1A1A] tracking-tight mb-8">Contact Details</h3>
      
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <Phone className="w-5 h-5 text-[#926F34] mt-1 shrink-0" />
          <div>
            <div className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Call Us</div>
            <div className="text-[0.95rem] font-extrabold text-[#1A1A1A]">+91 7838747009</div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="w-5 h-5 text-[#926F34] mt-1 shrink-0" />
          <div>
            <div className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Main Office</div>
            <div className="text-[0.95rem] font-bold text-[#1A1A1A] leading-relaxed pr-4">
              Shop no. 57, third floor, Wave Galleria,<br/>Wave City, Ghaziabad, UP, 201015
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

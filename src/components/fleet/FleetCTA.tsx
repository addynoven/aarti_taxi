import { Phone } from "lucide-react";

export function FleetCTA() {
  return (
    <div className="bg-[#F9FAFB] pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FACC15] max-w-4xl mx-auto rounded-[2.5rem] p-10 md:p-14 text-center shadow-lg relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-3xl font-black text-[#854D0E] tracking-tight mb-4 relative z-10">
            Need a custom quote for a group?
          </h2>
          
          <p className="text-[#A16207] text-sm md:text-base font-bold mb-10 relative z-10 max-w-lg mx-auto leading-relaxed">
            Our travel coordinators are ready to assist with complex itineraries.
          </p>
          
          <a
            href="tel:+917838747009"
             className="inline-flex items-center gap-3 bg-[#713F12] text-white hover:bg-[#422006] font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl relative z-10 transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 fill-white shrink-0" />
            <span>Call us now</span>
          </a>
          
        </div>
      </div>
    </div>
  );
}

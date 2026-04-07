import { Banknote, ShieldCheck, Clock, Sparkles, Headset } from "lucide-react";

export function Trust() {
  const reasons = [
    {
      icon: Banknote,
      title: "No Hidden Charges",
      desc: "All-inclusive pricing with complete transparency."
    },
    {
      icon: ShieldCheck,
      title: "Verified Drivers",
      desc: "Background-checked professional chauffeurs."
    },
    {
      icon: Clock,
      title: "On-time Pickup",
      desc: "We value your time. Guaranteed punctuality."
    },
    {
      icon: Sparkles,
      title: "Clean Vehicles",
      desc: "Sanitized, well-maintained, and comfortable rides."
    },
    {
      icon: Headset,
      title: "24/7 Support",
      desc: "Round-the-clock assistance for all your journeys."
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-300 transform transition-transform hover:scale-[1.01] duration-500">
              <img 
                src="/images/image.png" 
                alt="Professional Taxi Driver" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-12 tracking-tight">
              Why Thousands Trust Us
            </h2>
            
            <div className="space-y-8 lg:space-y-6">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div key={i} className="flex items-start gap-6">
                    <div className="w-[3.25rem] h-[3.25rem] rounded-2xl bg-[#86EFAC] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-green-950" strokeWidth={2.5} />
                    </div>
                    <div className="mt-1 flex-1">
                      <h4 className="text-[1.15rem] font-bold text-[#1A1A1A] mb-1.5 leading-tight">{reason.title}</h4>
                      <p className="text-slate-600 text-[1rem] font-medium leading-snug">{reason.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

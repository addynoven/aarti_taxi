import { Clock, ShieldCheck, Map } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-brand" />,
      title: "24/7 Availability",
      description: "Whether it's a 3 AM flight or a late-night return, our dispatch team and drivers are always active."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand" />,
      title: "Trusted Drivers",
      description: "Background-verified, professionally trained, and local route experts for a stress-free journey."
    },
    {
      icon: <Map className="w-8 h-8 text-brand" />,
      title: "Pan-India Network",
      description: "Seamless connectivity across all major Indian states with consistent pricing and service quality."
    }
  ];

  return (
    <section className="py-20 bg-amber-50/50 border-y border-brand-light relative overflow-hidden">
      {/* Decorative slant element mimicking the design */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-light/40 to-transparent skew-x-12 origin-top-right transform translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md shadow-brand-hover/5 text-brand mb-6 border border-brand-light">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-heading mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

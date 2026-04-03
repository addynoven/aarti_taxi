import { ArrowRight, Plane, Briefcase, RefreshCw } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <ArrowRight className="w-6 h-6 text-indigo-500" />,
      iconBg: "bg-indigo-50",
      title: "One-way",
      description: "Punctual inter-city travel with no hidden return charges. Pay only for what you travel."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-rose-500" />,
      iconBg: "bg-rose-50",
      title: "Round-trip",
      description: "Perfect for weekend getaways and multi-day tours with verified premium drivers."
    },
    {
      icon: <Plane className="w-6 h-6 text-sky-500" />,
      iconBg: "bg-sky-50",
      title: "Airport Transfers",
      description: "Timely pickups and drops for all major Indian airports with meet-and-greet options."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-emerald-500" />,
      iconBg: "bg-emerald-50",
      title: "Corporate Travel",
      description: "Premium fleet management for business professionals with automated invoicing."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold text-heading mb-4">Our Services</h2>
          <p className="text-lg text-slate-600">Tailored mobility solutions designed for comfort, reliability, and corporate excellence across India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-8`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-heading mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

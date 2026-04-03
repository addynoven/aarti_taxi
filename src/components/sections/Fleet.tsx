import Image from "next/image";
import { Users, Wind, Briefcase } from "lucide-react";

export function Fleet() {
  const fleet = [
    {
      name: "Premium Sedan",
      price: "₹12/km",
      image: "/images/sedan_car_1775211628526.png",
      description: "Ideal for 4 passengers. Dzire, Etios or similar models with ample boot space.",
      features: [
        { icon: <Wind className="w-4 h-4" />, text: "AC" },
        { icon: <Briefcase className="w-4 h-4" />, text: "2 Bags" },
        { icon: <Users className="w-4 h-4" />, text: "4 Max" }
      ],
      color: "bg-slate-100"
    },
    {
      name: "Luxury SUV",
      price: "₹16/km",
      image: "/images/suv_car_1775211645513.png",
      description: "Superior comfort for 6 passengers. Ertiga, Marazzo or similar spacious SUVs.",
      features: [
        { icon: <Wind className="w-4 h-4" />, text: "Dual AC" },
        { icon: <Briefcase className="w-4 h-4" />, text: "4 Bags" },
        { icon: <Users className="w-4 h-4" />, text: "6 Max" }
      ],
      popular: true,
      color: "bg-brand-light/50"
    },
    {
      name: "Executive Crysta",
      price: "₹22/km",
      image: "/images/crysta_car_1775211660977.png",
      description: "The gold standard of travel. Premium Innova Crysta for high-end corporate trips.",
      features: [
        { icon: <Wind className="w-4 h-4" />, text: "Captain Seats" },
        { icon: <Users className="w-4 h-4" />, text: "6 Max" }
      ],
      color: "bg-slate-100"
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-heading mb-4">Our Fleet & Pricing</h2>
            <p className="text-lg text-slate-600">Choose from our meticulously maintained fleet. Precision-engineered for your safety and comfort.</p>
          </div>
          <div className="mt-8 md:mt-0 flex p-1 bg-slate-100 rounded-lg">
            <button className="px-6 py-2 bg-white text-heading font-semibold rounded-md shadow-sm">All Inclusive</button>
            <button className="px-6 py-2 text-slate-600 font-semibold hover:text-heading transition-colors">Pan India</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((car, index) => (
            <div key={index} className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
              <div className={`pt-12 pb-8 px-6 ${car.color} flex justify-center items-center h-64 relative`}>
                {car.popular && (
                  <div className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    Most Popular
                  </div>
                )}
                <div className="relative w-full h-full drop-shadow-xl">
                  <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-heading">{car.name}</h3>
                  <div className="text-right">
                    <span className="text-xl font-bold text-brand">{car.price}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-8 flex-grow">{car.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {car.features.map((feature, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-md">
                      {feature.icon} {feature.text}
                    </span>
                  ))}
                </div>
                
                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-colors ${car.popular ? 'bg-brand hover:bg-brand-hover text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-heading'}`}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

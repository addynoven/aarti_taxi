"use client";

import Image from "next/image";
import { Users, Wind, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function Fleet() {
  const fleet = [
    {
      name: "Premium Sedan",
      price: "₹12/km",
      image: "/images/sedan_car_1775211628526.png",
      description: "Ideal for 4 passengers. Dezire, Aura, Xcent, Amaze, Etios or similar sedans. Max 250km/day limit.",
      features: [
        { icon: <Wind className="w-4 h-4" />, text: "AC" },
        { icon: <Briefcase className="w-4 h-4" />, text: "2 Bags" },
        { icon: <Users className="w-4 h-4" />, text: "4 Max" }
      ],
      color: "from-slate-100 to-white"
    },
    {
      name: "Luxury SUV",
      price: "₹16/km",
      image: "/images/suv_car_1775211645513.png",
      description: "Superior comfort for 5, 6, or 7 passengers. Ertiga, Innova, XUVs or similar spacious SUVs. Max 250km/day limit.",
      features: [
        { icon: <Wind className="w-4 h-4" />, text: "Dual AC" },
        { icon: <Briefcase className="w-4 h-4" />, text: "4 Bags" },
        { icon: <Users className="w-4 h-4" />, text: "7 Max" }
      ],
      popular: true,
      color: "from-brand-light to-white"
    },
    {
      name: "Executive Crysta & Tempo",
      price: "₹22/km",
      image: "/images/crysta_car_1775211660977.png",
      description: "The gold standard of travel. Premium Innova Crysta or 12 Seater Tempo Traveller for larger groups. Max 250km/day limit.",
      features: [
        { icon: <Wind className="w-4 h-4" />, text: "Captain Seats" },
        { icon: <Users className="w-4 h-4" />, text: "12 Max" }
      ],
      color: "from-slate-100 to-white"
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-20"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-heading mb-4">Our Fleet & Pricing</h2>
            <p className="text-lg text-slate-600">Choose from our meticulously maintained fleet. Precision-engineered for your safety and comfort.</p>
          </div>
          <div className="mt-8 md:mt-0 flex p-1.5 bg-slate-100 rounded-xl shadow-inner">
            <button className="px-6 py-2.5 bg-white text-heading font-bold rounded-lg shadow-sm">All Inclusive</button>
            <button className="px-6 py-2.5 text-slate-500 font-semibold hover:text-heading transition-colors">Pan India</button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((car, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 50 }}
              className={`flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 relative group ${car.popular ? 'ring-2 ring-brand ring-offset-4 ring-offset-white' : ''}`}
            >
              <div className={`pt-12 pb-8 px-6 bg-gradient-to-b ${car.color} flex justify-center items-center h-64 relative`}>
                {car.popular && (
                  <div className="absolute top-6 right-6 bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md flex items-center shadow-brand/30">
                    <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                    Popular
                  </div>
                )}
                
                {/* Micro-interaction: Car floats on hover without square drop-shadows */}
                <motion.div 
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative w-full h-full mix-blend-multiply"
                >
                  <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill 
                    className="object-contain"
                  />
                </motion.div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-heading">{car.name}</h3>
                  <div className="text-right bg-slate-50 px-3 py-1 rounded-lg">
                    <span className="text-xl font-black text-brand">{car.price}</span>
                  </div>
                </div>
                
                <p className="text-slate-500 mb-8 flex-grow leading-relaxed">{car.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {car.features.map((feature, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-md">
                      {feature.icon} {feature.text}
                    </span>
                  ))}
                </div>
                
                <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform active:scale-95 ${car.popular ? 'bg-brand hover:bg-brand-hover text-white shadow-lg shadow-brand/20' : 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20'}`}>
                  Reserve Vehicle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

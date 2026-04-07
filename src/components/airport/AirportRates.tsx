export function AirportRates() {
  const rates = [
    { route: "City to Delhi IGI (DEL)", sedan: "₹899*", suv: "₹1,299*" },
    { route: "City to Mumbai CSIA (BOM)", sedan: "₹799*", suv: "₹1,099*" },
    { route: "City to Bangalore KIA (BLR)", sedan: "₹1,199*", suv: "₹1,699*" },
  ];

  return (
    <div className="bg-[#F8F9FA] py-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight">Popular Routes & Starting Rates</h2>
        </div>

        <div className="bg-[#EAEAEA] rounded-3xl p-4 lg:p-6 pb-2">
          
          <div className="grid grid-cols-3 border-b border-[#D4D4D4] pb-4 px-4">
            <div className="text-xs font-bold text-slate-800">Route</div>
            <div className="text-xs font-bold text-slate-800 text-center">Sedan</div>
            <div className="text-xs font-bold text-slate-800 text-center">SUV</div>
          </div>

          <div className="divide-y divide-[#D4D4D4]">
            {rates.map((rate, idx) => (
              <div key={idx} className="grid grid-cols-3 py-6 px-4">
                <div className="text-xs md:text-sm font-bold text-[#1A1A1A] pr-4">{rate.route}</div>
                <div className="text-sm md:text-base font-black text-[#CA8A04] text-center">{rate.sedan}</div>
                <div className="text-sm md:text-base font-black text-slate-500 text-center">{rate.suv}</div>
              </div>
            ))}
          </div>

        </div>

        <p className="text-center text-[0.55rem] font-bold text-slate-400 mt-6 uppercase tracking-widest leading-relaxed">
          *All rates are inclusive of GST and Driver Allowance. Parking & Toll extra as actuals.
        </p>

      </div>
    </div>
  );
}

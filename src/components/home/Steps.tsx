export function Steps() {
  const steps = [
    {
      num: 1,
      title: "Pick Your Route",
      desc: "Select pickup and drop locations, date, and preferred time for your trip."
    },
    {
      num: 2,
      title: "Confirm Fare",
      desc: "Get an instant transparent fare quote and confirm your booking with one click."
    },
    {
      num: 3,
      title: "Enjoy The Ride",
      desc: "Track your driver in real-time and travel in complete comfort and safety."
    }
  ];

  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4 tracking-tight">Simple 3-Step Booking</h2>
          <p className="text-slate-600 text-lg">From clicks to comfort - here's how we get you to your destination.</p>
        </div>

        <div className="relative">
          {/* Dashed line connecting steps (hidden on vertical small screens) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] border-t-[3px] border-dashed border-slate-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#FACC15] rounded-full flex items-center justify-center text-[1.75rem] font-bold text-slate-800 shadow-md shadow-yellow-500/20 mb-8 mx-auto">
                  {step.num}
                </div>
                <h3 className="text-[1.3rem] font-bold text-[#1A1A1A] mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

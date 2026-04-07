export function PopularRoutes() {
  const routes = [
    {
      title: "Delhi to Jaipur",
      price: "Starting at ₹2,499",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80"
    },
    {
      title: "Delhi to Agra",
      price: "Starting at ₹1,999",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80"
    },
    {
      title: "Mumbai to Pune",
      price: "Starting at ₹1,799",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80"
    },
    {
      title: "Bangalore to Mysore",
      price: "Starting at ₹2,199",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-3 tracking-tight">Popular Routes</h2>
            <p className="text-slate-600 text-[1.1rem]">The most traveled intercity journeys across India.</p>
          </div>
          <a 
            href="tel:+917838747009" 
            className="text-[#926F34] font-bold pb-1 border-b-2 border-[#926F34] hover:text-[#735728] hover:border-[#735728] transition-colors inline-block self-start md:self-end"
          >
            Call for specialized routes
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, i) => (
            <div 
              key={i} 
              className="group relative h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-sm"
            >
              {/* Native img to prevent Next.js unconfigured domain errors while prototyping */}
              <img 
                src={route.image} 
                alt={route.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-[1.6rem] font-bold text-white mb-1.5 leading-tight">{route.title}</h3>
                <p className="text-slate-300 font-medium text-[1rem] opacity-90">{route.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

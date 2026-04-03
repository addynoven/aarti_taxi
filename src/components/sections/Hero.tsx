import { Calendar, MapPin, Navigation } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decor - mimicking the subtle driver watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-40 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="text-5xl lg:text-5xl xl:text-6xl font-extrabold text-heading tracking-tight leading-[1.05] mb-6">
              <span className="block whitespace-nowrap">Ride Anywhere in</span>
              <span className="block whitespace-nowrap"><span className="text-brand">India</span> with Aarti</span>
              <span className="block whitespace-nowrap">Taxi.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience kinetic elegance with our premium mobility services. From airport transfers to pan-India corporate travel, we define the precision concierge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#fleet" className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-brand hover:bg-brand-hover rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
                EXPLORE FLEET
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            {/* Quick Booking Card */}
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 p-8 lg:p-10 border border-slate-100">
              <h2 className="text-2xl font-bold text-heading mb-8">Quick Booking</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pickup Location</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:ring-brand focus:border-brand bg-slate-50 text-heading" placeholder="Enter city or area" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Drop Location</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Navigation className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:ring-brand focus:border-brand bg-slate-50 text-heading" placeholder="Enter destination" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Travel Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="date" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:ring-brand focus:border-brand bg-slate-50 text-heading" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Service Type</label>
                    <div className="relative">
                      <select className="block w-full pl-4 pr-10 py-3 border border-slate-200 rounded-lg focus:ring-brand focus:border-brand bg-slate-50 text-heading appearance-none">
                        <option>One-way</option>
                        <option>Round-trip</option>
                        <option>Airport Transfer</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button type="button" className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 px-8 rounded-lg shadow-md transition-colors duration-200 text-lg">
                  CHECK AVAILABILITY
                </button>
              </form>
            </div>
            
            {/* Visual element behind the card */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

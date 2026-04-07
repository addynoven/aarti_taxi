export function OutstationDestinations() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">Our Popular Destination</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          
          {/* Main Large Left Panel */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden group min-h-[400px] lg:min-h-0">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80" 
              alt="Delhi to Manali" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-1">Delhi to Manali</h3>
              <p className="text-slate-300 text-sm font-medium">Scenic Mountain Escapes</p>
            </div>
          </div>

          {/* Right Side Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Wide Panel */}
            <div className="relative rounded-3xl overflow-hidden group h-[250px] lg:flex-1">
              <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80" 
                alt="Mumbai to Shirdi" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-xl font-bold text-white mb-1">Mumbai to Shirdi</h3>
                <p className="text-slate-300 text-sm font-medium">Spiritual Journeys</p>
              </div>
            </div>

            {/* Bottom Split Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[250px] lg:flex-1">
              
              <div className="relative rounded-3xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" 
                  alt="Jaipur" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-lg font-bold text-white">Jaipur</h3>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80" 
                  alt="Varanasi" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-lg font-bold text-white">Varanasi</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Map, UserSquare2, Receipt } from "lucide-react";

export function FleetPricing() {
  const ROUTES = [
    { id: "delhi-agra", label: "Delhi to Agra", distance: 380 },
    { id: "delhi-jaipur", label: "Delhi to Jaipur", distance: 560 },
    { id: "delhi-haridwar", label: "Delhi to Haridwar", distance: 440 },
  ];

  const VEHICLES = [
    { id: "sedan", label: "Swift Dzire", rate: 12 },
    { id: "suv", label: "Innova Crysta", rate: 18 },
    { id: "tempo", label: "Tempo Traveller", rate: 25 },
  ];

  const [routeId, setRouteId] = useState(ROUTES[0].id);
  const [vehicleId, setVehicleId] = useState(VEHICLES[1].id);

  const selectedRoute = ROUTES.find((r) => r.id === routeId) || ROUTES[0];
  const selectedVehicle = VEHICLES.find((v) => v.id === vehicleId) || VEHICLES[1];

  const estimatedTotal = selectedRoute.distance * selectedVehicle.rate;

  return (
    <div className="bg-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-2">Transparent Pricing,<br/>No Hidden Surprises.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="bg-[#FEF9C3] text-[#CA8A04] p-3 rounded-lg shrink-0">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">Base Fare</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">Calculated on a per-kilometer basis from the start of your journey to the end destination.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
               <div className="bg-[#FEF9C3] text-[#CA8A04] p-3 rounded-lg shrink-0">
                <UserSquare2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">Driver Allowance</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">A standard daily charge that covers our driver's meals and accommodation on long trips.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
               <div className="bg-[#FEF9C3] text-[#CA8A04] p-3 rounded-lg shrink-0">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">Tolls & Taxes</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">State taxes and highway tolls are charged at actuals based on the route taken.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#926F34]/20 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="bg-[#1A1A1A] rounded-[2rem] p-8 sm:p-10 shadow-2xl relative z-10 border border-slate-800">
              <h3 className="text-white font-extrabold text-xl mb-8 tracking-tight">Price Estimator</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2">Route Selection</label>
                  <select 
                    value={routeId}
                    onChange={(e) => setRouteId(e.target.value)}
                    className="w-full bg-[#2A2A2A] text-white border border-[#3A3A3A] rounded-xl px-4 py-3.5 text-sm font-medium focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] outline-none transition-all appearance-none"
                  >
                    {ROUTES.map((route) => (
                      <option key={route.id} value={route.id}>{route.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2">Selected Vehicle</label>
                  <select 
                    value={vehicleId}
                    onChange={(e) => setVehicleId(e.target.value)}
                     className="w-full bg-[#2A2A2A] text-white border border-[#3A3A3A] rounded-xl px-4 py-3.5 text-sm font-medium focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] outline-none transition-all appearance-none"
                  >
                     {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>{v.label}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-8 border-t border-[#3A3A3A] mt-8 flex justify-between items-end">
                  <span className="text-slate-400 text-sm font-medium mb-1">Estimated Total</span>
                  <div className="text-right">
                    <div className="text-4xl sm:text-5xl font-black text-[#FACC15] tabular-nums tracking-tight">
                      ₹{estimatedTotal.toLocaleString('en-IN')}*
                    </div>
                    <div className="text-[0.6rem] text-slate-500 mt-2 font-medium tracking-wide">
                      *Excluding actual tolls and state taxes.
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

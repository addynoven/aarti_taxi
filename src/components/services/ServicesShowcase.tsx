import { ServiceHero } from "./ServiceHero";
import { ServiceStats } from "./ServiceStats";
import { ServiceOutstation } from "./ServiceOutstation";
import { ServiceAirport } from "./ServiceAirport";
import { ServiceGrid } from "./ServiceGrid";
import { ServiceCorporate } from "./ServiceCorporate";

export function ServicesShowcase() {
  return (
    <main className="flex-grow pt-28 pb-16 bg-[#FAFAFA]">
      <ServiceHero />
      <ServiceStats />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceOutstation />
        <ServiceAirport />
        <ServiceGrid />
        <ServiceCorporate />
      </div>
    </main>
  );
}

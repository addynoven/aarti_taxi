import { FleetHero } from "./FleetHero";
import { FleetFeatures } from "./FleetFeatures";
import { FleetSelection } from "./FleetSelection";
import { FleetPricing } from "./FleetPricing";
import { FleetCTA } from "./FleetCTA";

export function FleetShowcase() {
  return (
    <main className="bg-white">
      <FleetHero />
      <FleetFeatures />
      <FleetSelection />
      <FleetPricing />
      <FleetCTA />
    </main>
  );
}

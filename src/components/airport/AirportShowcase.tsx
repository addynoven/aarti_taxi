import { AirportHero } from "./AirportHero";
import { AirportAdvantages } from "./AirportAdvantages";
import { AirportFleet } from "./AirportFleet";
import { AirportRates } from "./AirportRates";
import { AirportStats } from "./AirportStats";

export function AirportShowcase() {
  return (
    <main className="bg-white">
      <AirportHero />
      <AirportAdvantages />
      <AirportFleet />
      <AirportRates />
      <AirportStats />
    </main>
  );
}

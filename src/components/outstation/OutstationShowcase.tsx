import { OutstationHero } from "./OutstationHero";
import { OutstationFleet } from "./OutstationFleet";
import { OutstationDestinations } from "./OutstationDestinations";
import { OutstationTestimonials } from "./OutstationTestimonials";

export function OutstationShowcase() {
  return (
    <main className="bg-white">
      <OutstationHero />
      <OutstationFleet />
      <OutstationDestinations />
      <OutstationTestimonials />
    </main>
  );
}

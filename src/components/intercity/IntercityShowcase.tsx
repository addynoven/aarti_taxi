import { IntercityHero } from "./IntercityHero";
import { IntercityFeatures } from "./IntercityFeatures";
import { IntercityFleet } from "./IntercityFleet";
import { IntercityPricing } from "./IntercityPricing";
import { IntercityCTA } from "./IntercityCTA";

export function IntercityShowcase() {
  return (
    <main className="bg-white">
      <IntercityHero />
      <IntercityFeatures />
      <IntercityFleet />
      <IntercityPricing />
      <IntercityCTA />
    </main>
  );
}

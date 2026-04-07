import { RouteHero } from "./RouteHero";
import { RoutePricing } from "./RoutePricing";
import { RouteFeatures } from "./RouteFeatures";
import { RouteTrustBanner } from "./RouteTrustBanner";
import { RouteFAQ } from "./RouteFAQ";
import { RouteCTA } from "./RouteCTA";

export function RouteShowcase() {
  return (
    <main className="bg-white">
      <RouteHero />
      <RoutePricing />
      <RouteFeatures />
      <RouteTrustBanner />
      <RouteFAQ />
      <RouteCTA />
    </main>
  );
}

import { AboutHero } from "./AboutHero";
import { AboutStory } from "./AboutStory";
import { AboutVisionMission } from "./AboutVisionMission";
import { AboutFaces } from "./AboutFaces";
import { AboutReach } from "./AboutReach";
import { AboutCTA } from "./AboutCTA";

export function AboutShowcase() {
  return (
    <main className="flex-grow pt-28 pb-10 bg-white">
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />
      <AboutFaces />
      <AboutReach />
      <AboutCTA />
    </main>
  );
}

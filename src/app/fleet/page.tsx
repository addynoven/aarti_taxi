import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FleetShowcase } from "@/components/fleet/FleetShowcase";

export default function FleetPage() {
  return (
    <>
      <Nav />
      <FleetShowcase />
      <Footer />
    </>
  );
}

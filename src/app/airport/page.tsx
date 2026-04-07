import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AirportShowcase } from "@/components/airport/AirportShowcase";

export default function AirportPage() {
  return (
    <>
      <Nav />
      <AirportShowcase />
      <Footer />
    </>
  );
}

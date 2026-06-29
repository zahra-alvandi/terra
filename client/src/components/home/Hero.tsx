import Container from "../layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Container>
        <div className="grid min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-80px)] items-center gap-12 lg:gap-20 pb-24 py-10 lg:py-0 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>

        <ScrollIndicator />
      </Container>
    </section>
  );
}

import HeroCarousel from "@/components/sections/HeroCarousel";
import ServicesSection from "@/components/sections/ServicesSection";
import ServiceCarousel from "@/components/sections/ServiceCarousel";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroCarousel />
      </section>
      <div className="phonepe-section-divider"></div>
      <section id="services">
        <ServicesSection />
      </section>
      <div className="phonepe-section-divider"></div>
      <section id="all-services">
        <ServiceCarousel />
      </section>
      <div className="phonepe-section-divider"></div>
      <section id="about">
        <AboutSection />
      </section>
    </>
  );
}
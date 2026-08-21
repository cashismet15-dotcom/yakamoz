import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingSection from "@/components/PricingSection";
import ServiceAreas from "@/components/ServiceAreas";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <PricingSection />
        <ServiceAreas />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

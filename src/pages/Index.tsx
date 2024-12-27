import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesCarousel />
      <Testimonials />
      <ServiceAreas />
      <ContactForm />
    </main>
  );
};

export default Index;
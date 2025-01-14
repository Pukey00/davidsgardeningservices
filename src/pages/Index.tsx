import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceMap from "@/components/ServiceMap";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ServicesCarousel />
        <Testimonials />
        <ServiceAreas />
        <ServiceMap />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
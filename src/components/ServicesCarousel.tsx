import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Lawn Mowing",
    description: "Professional lawn mowing services with attention to detail. We ensure your lawn looks perfect every time.",
    image: "/lovable-uploads/69bde51c-3a76-41fb-b1ad-19c3ff01d3d5.png"
  },
  {
    title: "Gardening & Landscaping",
    description: "Transform your outdoor space with our expert landscaping solutions and garden maintenance services.",
    image: "/lovable-uploads/2de3e8f9-bf20-418d-b270-49cfdfc92f4a.png"
  },
  {
    title: "Weed Control",
    description: "Keep your lawn healthy and weed-free with our professional weed control treatments.",
    image: "/lovable-uploads/73efd410-983f-47a0-9850-acc060701613.png"
  },
  {
    title: "Gutter Vacuuming",
    description: "Protect your property with our thorough gutter cleaning and maintenance services.",
    image: "/lovable-uploads/69bde51c-3a76-41fb-b1ad-19c3ff01d3d5.png"
  },
  {
    title: "Hedge Trimming",
    description: "Expert hedge shaping and maintenance to enhance your property's curb appeal.",
    image: "/lovable-uploads/2de3e8f9-bf20-418d-b270-49cfdfc92f4a.png"
  },
  {
    title: "Lawn Fertilization",
    description: "Nourish your lawn with our professional fertilization services for lush, healthy growth.",
    image: "/lovable-uploads/73efd410-983f-47a0-9850-acc060701613.png"
  }
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleServices, setVisibleServices] = useState<typeof services>([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const getVisibleServices = () => {
      const visible = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % services.length;
        visible.push(services[index]);
      }
      return visible;
    };

    setVisibleServices(getVisibleServices());
  }, [currentIndex]);

  return (
    <section id="services" className="py-20 bg-light-grey">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary-green">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our comprehensive range of professional lawn care and landscaping services
        </p>
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleServices.map((service, index) => (
              <Card
                key={index}
                className="w-full flex-shrink-0 transition-all duration-500 ease-out hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2 text-primary-green">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button 
                    className="w-full bg-primary-green hover:bg-secondary-green text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get a Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-primary-green hover:text-white transition-colors"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-primary-green hover:text-white transition-colors"
            aria-label="Next service"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;

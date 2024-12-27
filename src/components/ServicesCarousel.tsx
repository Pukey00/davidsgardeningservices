import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Lawn Mowing",
    description: "Professional lawn mowing services for residential and commercial properties",
    image: "/lovable-uploads/69bde51c-3a76-41fb-b1ad-19c3ff01d3d5.png"
  },
  {
    title: "Gardening & Landscaping",
    description: "Complete garden maintenance and professional landscaping solutions",
    image: "/lovable-uploads/2de3e8f9-bf20-418d-b270-49cfdfc92f4a.png"
  },
  {
    title: "Weed Control",
    description: "Effective weed control and prevention services to maintain a healthy lawn",
    image: "/lovable-uploads/73efd410-983f-47a0-9850-acc060701613.png"
  },
  {
    title: "Gutter Vacuuming",
    description: "Professional gutter cleaning and maintenance to prevent water damage",
    image: "/lovable-uploads/69bde51c-3a76-41fb-b1ad-19c3ff01d3d5.png"
  },
  {
    title: "Hedge Trimming",
    description: "Expert hedge trimming and shaping services for a neat garden appearance",
    image: "/lovable-uploads/2de3e8f9-bf20-418d-b270-49cfdfc92f4a.png"
  },
  {
    title: "Lawn Fertilization",
    description: "Professional lawn fertilization services for a lush, healthy lawn",
    image: "/lovable-uploads/73efd410-983f-47a0-9850-acc060701613.png"
  }
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section className="py-20 bg-light-grey">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-green">Our Services</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`w-full flex-shrink-0 transition-transform duration-500 ease-out transform ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="p-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Lawn Mowing",
    description: "Professional lawn mowing services for residential and commercial properties",
    image: "/placeholder.svg"
  },
  {
    title: "Gardening",
    description: "Complete garden maintenance and landscaping solutions",
    image: "/placeholder.svg"
  },
  {
    title: "Weed Spraying",
    description: "Effective weed control and prevention services",
    image: "/placeholder.svg"
  },
  {
    title: "Gutter Vacuuming",
    description: "Professional gutter cleaning and maintenance",
    image: "/placeholder.svg"
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
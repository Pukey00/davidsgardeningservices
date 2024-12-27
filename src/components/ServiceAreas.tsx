import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-light-grey">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-green">
          Areas We Service
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <MapPin className="h-12 w-12 text-primary-green" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Barham and Surrounds</h3>
          <p className="text-gray-600">
            We provide our professional gardening services to Barham and all surrounding areas within a 30km radius. Contact us to check if we service your location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
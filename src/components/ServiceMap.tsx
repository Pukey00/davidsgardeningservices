import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceMap = () => {
  return (
    <section id="service-map" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-green">
          Our Service Area
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl bg-gray-100">
            <div className="absolute inset-0 bg-gray-200">
              <img
                src="/placeholder.svg"
                alt="Map showing Barham, NSW and surrounding service area"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">
                  Map of Barham, NSW and 30km service radius
                  <br />
                  <span className="text-sm">(Contact administrator to enable map)</span>
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-green" />
                <span className="text-sm font-medium">Barham, NSW</span>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-gray-600">
            We service Barham and surrounding areas within a 30km radius. Contact us to check if we cover your location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
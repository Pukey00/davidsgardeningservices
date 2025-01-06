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
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Barham,NSW,Australia&zoom=11&size=1200x500&scale=2&maptype=roadmap&markers=color:0x00af42%7CBarham,NSW,Australia&circle=color:0x00af4233%7Cfillcolor:0x00af4233%7CBarham,NSW,Australia%7C30000&key=YOUR_GOOGLE_MAPS_API_KEY"
              alt="Map showing Barham, NSW and surrounding service area"
              className="w-full h-full object-cover"
            />
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
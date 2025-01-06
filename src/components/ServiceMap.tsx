import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ServiceMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  // Barham, NSW coordinates
  const CENTER = [144.1283, -35.6283];
  const RADIUS = 30; // 30km radius

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'YOUR_MAPBOX_PUBLIC_TOKEN'; // Replace this with your token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: CENTER,
      zoom: 10,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      if (!map.current) return;

      // Add a circle layer to show the service area
      map.current.addSource('service-area', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: CENTER,
          },
          properties: {},
        },
      });

      map.current.addLayer({
        id: 'service-area-fill',
        type: 'circle',
        source: 'service-area',
        paint: {
          'circle-radius': {
            stops: [
              [0, 0],
              [20, 1000000], // Adjust this value to change the circle size
            ],
            base: 2,
          },
          'circle-color': '#00af42',
          'circle-opacity': 0.2,
        },
      });

      // Add marker for Barham
      new mapboxgl.Marker({ color: '#00af42' })
        .setLngLat(CENTER)
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Barham, NSW</h3><p>Service center</p>'))
        .addTo(map.current);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section id="service-map" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-green">
          Our Service Area
        </h2>
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
          <div ref={mapContainer} className="absolute inset-0" />
        </div>
        <p className="text-center mt-6 text-gray-600">
          We service Barham and surrounding areas within a 30km radius. Contact us to check if we cover your location.
        </p>
      </div>
    </section>
  );
};

export default ServiceMap;
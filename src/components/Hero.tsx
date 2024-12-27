import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-green to-secondary-green">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          David's Gardening Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Professional lawn care and landscaping services in Barham and surrounds
        </p>
        <Button 
          className="bg-white text-primary-green hover:bg-light-grey text-lg px-8 py-6"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
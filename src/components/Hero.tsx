import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div 
      className="relative h-screen flex items-center justify-center mt-20"
      style={{
        backgroundImage: "url('/lovable-uploads/73efd410-983f-47a0-9850-acc060701613.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-green/90 to-secondary-green/80"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent animate-gradient-x">
          Transform Your Outdoor Space
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Expert lawn care and landscaping services in Barham and surrounds. Get your free quote today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-white text-primary-green hover:bg-light-grey text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Quote
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Services
          </Button>
          <Button 
            className="bg-white text-primary-green hover:bg-light-grey text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() => document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Service Areas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import { useEffect, useState } from "react";
import { Sun, Cloud, Moon, Leaf, Flower, TreeDeciduous } from "lucide-react";

const Header = () => {
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const [icon, setIcon] = useState<JSX.Element>(<Sun className="text-yellow-500" />);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const updateTimeBasedContent = () => {
      const hour = new Date().getHours();
      console.log("Current hour:", hour);

      if (hour >= 5 && hour < 12) {
        setTimeOfDay("morning");
        setIcon(<Sun className="text-yellow-500 animate-pulse" />);
        setMessage("Perfect morning for garden care!");
      } else if (hour >= 12 && hour < 17) {
        setTimeOfDay("afternoon");
        setIcon(<Leaf className="text-primary-green animate-bounce" />);
        setMessage("Ideal time for lawn maintenance!");
      } else if (hour >= 17 && hour < 20) {
        setTimeOfDay("evening");
        setIcon(<Flower className="text-pink-500 hover:animate-spin" />);
        setMessage("Evening garden maintenance time!");
      } else {
        setTimeOfDay("night");
        setIcon(<Moon className="text-blue-500 animate-pulse" />);
        setMessage("Planning tomorrow's garden care!");
      }
    };

    updateTimeBasedContent();
    const interval = setInterval(updateTimeBasedContent, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col items-center justify-center space-y-2">
          <img 
            src="/lovable-uploads/2de3e8f9-bf20-418d-b270-49cfdfc92f4a.png" 
            alt="David's Garden Services Logo" 
            className="h-16 md:h-20"
          />
          <div className="flex items-center gap-2 bg-light-grey px-4 py-2 rounded-full animate-fade-in">
            {icon}
            <span className="text-dark-grey font-medium hidden md:inline-block">
              {message}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
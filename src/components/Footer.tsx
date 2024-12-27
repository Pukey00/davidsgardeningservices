const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <img 
            src="/lovable-uploads/69bde51c-3a76-41fb-b1ad-19c3ff01d3d5.png" 
            alt="David's Garden Services Logo" 
            className="h-16 md:h-20"
          />
          <p className="text-gray-600 text-center">© {new Date().getFullYear()} David's Garden Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
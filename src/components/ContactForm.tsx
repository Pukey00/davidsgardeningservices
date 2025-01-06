import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours with your personalized quote!",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary-green">
              Get Your Free Quote Today
            </h2>
            <p className="text-gray-600 mb-8">
              Transform your outdoor space with our professional services. Fill out the form and we'll get back to you with a customized quote.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary-green" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">0400 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary-green" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-primary-green" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 7am-5pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light-grey p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="w-full bg-white"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your gardening needs..."
                  className="w-full min-h-[150px] bg-white"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-green hover:bg-secondary-green text-white text-lg py-6 transform hover:scale-105 transition-all duration-300"
              >
                Request Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
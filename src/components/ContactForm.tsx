import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "We'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-green">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Your Name"
              className="w-full"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              className="w-full"
              required
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              className="w-full"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Tell us about your gardening needs..."
              className="w-full min-h-[150px]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary-green hover:bg-secondary-green text-white"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
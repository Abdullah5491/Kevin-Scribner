import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const goldColor = 'hsl(35 55% 45%)';
  const goldColorLight = 'hsl(38 50% 55%)';
  const charcoalColor = 'hsl(220 15% 18%)';
  const charcoalLightColor = 'hsl(220 10% 30%)';
  const creamColor = 'hsl(40 30% 97%)';

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-28 lg:py-32"
      style={{ background: charcoalColor }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span 
            className="font-body text-sm tracking-[0.2em] uppercase"
            style={{ color: goldColor }}
          >
            Get In Touch
          </span>
          <h2 
            className="font-heading text-4xl md:text-5xl mt-3 leading-tight"
            style={{ color: creamColor }}
          >
            Let's Build Your <span className="italic" style={{ color: goldColorLight }}>Future Together</span>
          </h2>
          <p 
            className="mt-4 max-w-2xl mx-auto font-light"
            style={{ color: `${creamColor}b3` }}
          >
            Ready to transform your home or begin a custom build? Contact us today to 
            schedule your consultation and start building a home you'll love for years to come.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: `${goldColor}1a` }}
              >
                <Phone className="w-5 h-5" style={{ color: goldColor }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: `${creamColor}99` }}>Call Us Today</p>
                <a
                  href="tel:8134524648"
                  className="font-heading text-xl transition-colors hover:opacity-80"
                  style={{ color: creamColor }}
                >
                  (813) 452-4648
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: `${goldColor}1a` }}
              >
                <Mail className="w-5 h-5" style={{ color: goldColor }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: `${creamColor}99` }}>Email Us</p>
                <a
                  href="mailto:info@kevinscribnerconstruction.com"
                  className="font-heading text-xl transition-colors hover:opacity-80"
                  style={{ color: creamColor }}
                >
                  info@ksconstruction.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: `${goldColor}1a` }}
              >
                <MapPin className="w-5 h-5" style={{ color: goldColor }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: `${creamColor}99` }}>Service Area</p>
                <p className="font-heading text-xl" style={{ color: creamColor }}>Tampa Bay, Florida</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form 
              onSubmit={handleSubmit} 
              className="p-8"
              style={{ background: `${charcoalLightColor}80` }}
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-sm mb-2 block" style={{ color: `${creamColor}99` }}>Your Name</label>
                  <Input
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[hsl(220,15%,18%)] border-[hsl(220,10%,30%)] text-[hsl(40,30%,97%)] placeholder:text-[hsla(40,30%,97%,0.4)]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block" style={{ color: `${creamColor}99` }}>Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[hsl(220,15%,18%)] border-[hsl(220,10%,30%)] text-[hsl(40,30%,97%)] placeholder:text-[hsla(40,30%,97%,0.4)]"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="text-sm mb-2 block" style={{ color: `${creamColor}99` }}>Phone Number</label>
                <Input
                  type="tel"
                  placeholder="(813) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[hsl(220,15%,18%)] border-[hsl(220,10%,30%)] text-[hsl(40,30%,97%)] placeholder:text-[hsla(40,30%,97%,0.4)]"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm mb-2 block" style={{ color: `${creamColor}99` }}>Your Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[hsl(220,15%,18%)] border-[hsl(220,10%,30%)] text-[hsl(40,30%,97%)] placeholder:text-[hsla(40,30%,97%,0.4)] min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" variant="luxury" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
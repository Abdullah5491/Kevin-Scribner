import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury home remodeling"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(180deg, rgba(38,43,51,0.75) 0%, rgba(38,43,51,0.5) 50%, rgba(38,43,51,0.8) 100%)' 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span 
            className="inline-block text-sm tracking-[0.3em] uppercase mb-4 font-body"
            style={{ color: 'hsl(120 8% 65%)' }}
          >
            Tampa Bay's Premier Builder
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight"
          style={{ color: 'hsl(0 0% 96%)' }}
        >
          Kevin Scribner
          <br />
          <span className="italic" style={{ color: 'hsl(120 6% 72%)' }}>Construction</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          style={{ color: 'hsla(0,0%,96%,0.8)' }}
        >
          High-quality craftsmanship, innovative design, and dependable service. 
          From remodels to luxury custom builds, we bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="luxury" size="lg">
            Get a Free Consultation
          </Button>
          <Button variant="luxuryOutline" size="lg">
            <Phone className="mr-2 h-4 w-4" />
            (813) 452-4648
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{ border: '2px solid hsla(0,0%,96%,0.4)' }}
        >
          <motion.div 
            className="w-1 h-2 rounded-full"
            style={{ background: 'hsl(120 8% 65%)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
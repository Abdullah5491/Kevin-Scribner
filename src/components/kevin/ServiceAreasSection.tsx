import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const areas = [
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Brandon",
  "Riverview",
  "Apollo Beach",
  "Wesley Chapel",
  "Lutz",
  "Odessa",
  "Hillsborough County",
  "Pinellas County",
  "Pasco County",
];

const ServiceAreasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-28 lg:py-32"
      style={{ background: 'hsl(0 0% 85%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="font-body text-sm tracking-[0.2em] uppercase"
              style={{ color: 'hsl(120 8% 55%)' }}
            >
              Where We Work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3 mb-6 leading-tight">
              Service <span className="italic" style={{ color: 'hsl(120 8% 55%)' }}>Areas</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Kevin Scribner Construction proudly serves homeowners throughout Tampa Bay 
              and its surrounding communities. With years of experience working across 
              Hillsborough, Pinellas, and Pasco counties, we understand the architectural 
              styles and environmental needs unique to each neighborhood.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2 group"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(120 8% 55%)' }} />
                  <span className="text-foreground font-light hover:text-[hsl(120,8%,55%)] transition-colors cursor-default">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Placeholder with decorative design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div 
              className="aspect-square relative overflow-hidden"
              style={{ background: 'hsla(0,0%,15%,0.05)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4" style={{ color: 'hsl(120 8% 55%)' }} />
                  <p className="font-heading text-3xl text-foreground">Tampa Bay</p>
                  <p className="text-muted-foreground mt-2">& Surrounding Areas</p>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                style={{ border: '1px solid hsla(120,8%,65%,0.1)' }}
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
                style={{ border: '1px solid hsla(120,8%,65%,0.1)' }}
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full"
                style={{ border: '1px solid hsla(120,8%,65%,0.05)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
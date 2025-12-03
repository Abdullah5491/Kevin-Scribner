import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import teamImage from "@/assets/team-work.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={teamImage}
                alt="Kevin Scribner Construction Team"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{ border: '1px solid hsla(120,8%,65%,0.2)' }}
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 -z-10"
              style={{ border: '2px solid hsla(120,8%,65%,0.3)' }}
            />
            <div 
              className="absolute -top-6 -left-6 w-32 h-32 -z-10"
              style={{ border: '2px solid hsla(120,8%,65%,0.3)' }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span 
              className="font-body text-sm tracking-[0.2em] uppercase"
              style={{ color: 'hsl(120 8% 65%)' }}
            >
              Expert Craftsmanship
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3 mb-6 leading-tight">
              Expert Remodeling & <br />
              <span className="italic" style={{ color: 'hsl(120 8% 65%)' }}>Renovation Services</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-light leading-relaxed">
              <p>
                At Kevin Scribner Construction, we specialize in transforming Tampa homes 
                with expert remodeling and renovation solutions tailored to each client's 
                lifestyle and budget. Whether you're modernizing a dated interior, expanding 
                your living space, or refreshing key areas like kitchens and bathrooms, our 
                team provides exceptional workmanship backed by decades of industry experience.
              </p>
              <p>
                Our renovation process begins with a detailed consultation to understand your 
                needs, design preferences, and functional goals. We work closely with you to 
                craft a thoughtful, efficient plan that maximizes both style and durability.
              </p>
              <p>
                We handle projects of all sizes, from minor upgrades to complete home transformations. 
                Our team excels at structural modifications, custom carpentry, energy-efficient 
                improvements, and moisture-resistant rebuilding—especially valuable in Florida's 
                humid climate.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
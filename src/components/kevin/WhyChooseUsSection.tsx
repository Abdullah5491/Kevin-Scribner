import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Shield, Users, CheckCircle2, Wrench } from "lucide-react";
import bathroomImage from "@/assets/bathroom-remodel.jpg";

const features = [
  {
    icon: Award,
    title: "Decades of Experience",
    description: "Expert craftsmanship backed by years of hands-on industry experience in Tampa Bay.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed professionals with comprehensive insurance for your peace of mind.",
  },
  {
    icon: Users,
    title: "Trusted Partnership",
    description: "Seamless integration with Tampa Emergency Restoration Pros for complete solutions.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time with clear schedules and consistent communication.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Materials",
    description: "Premium materials designed to withstand Florida's unique climate conditions.",
  },
  {
    icon: Wrench,
    title: "Full Service",
    description: "From design to completion, we handle every aspect of your project.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="font-body text-sm tracking-[0.2em] uppercase"
              style={{ color: 'hsl(120 8% 65%)' }}
            >
              The Difference
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3 mb-8 leading-tight">
              Why Choose <br />
              <span className="italic" style={{ color: 'hsl(120 8% 65%)' }}>Kevin Scribner Construction?</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div 
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                    style={{ background: 'hsl(0 0% 15%)' }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: 'hsl(120 8% 65%)' }} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={bathroomImage}
                alt="Luxury bathroom renovation"
                className="w-full h-[500px] object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{ border: '1px solid hsla(120,8%,65%,0.2)' }}
              />
            </div>
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 p-8 shadow-lg"
              style={{ background: 'hsl(0 0% 15%)' }}
            >
              <p 
                className="font-heading text-5xl mb-2"
                style={{ color: 'hsl(120 8% 65%)' }}
              >
                100+
              </p>
              <p 
                className="font-light"
                style={{ color: 'hsla(0,0%,96%,0.8)' }}
              >
                Projects Completed<br />in Tampa Bay
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
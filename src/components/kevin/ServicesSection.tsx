import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Hammer, Shield, Building2 } from "lucide-react";
import customHome from "@/assets/custom-home.jpg";
import kitchenRemodel from "@/assets/kitchen-remodel.jpg";
import bathroomRemodel from "@/assets/bathroom-remodel.jpg";
import teamWork from "@/assets/team-work.jpg";

const services = [
  {
    icon: Home,
    title: "New Home Construction",
    description:
      "We design and build custom homes tailored to your vision, lifestyle, and budget. Our team manages every detail—from architectural planning and permitting to construction and final delivery.",
    image: customHome,
  },
  {
    icon: Hammer,
    title: "Home Remodels & Renovations",
    description:
      "Transform your existing home with expert remodeling services designed to improve function, comfort, and style. We handle kitchen upgrades, bathroom renovations, structural changes, and full-home makeovers.",
    image: kitchenRemodel,
  },
  {
    icon: Shield,
    title: "Luxury Mold-Free Homes",
    description:
      "Our luxury mold-free homes are built using advanced moisture-control materials and construction methods that greatly reduce mold risks—a major concern in Florida's humid climate.",
    image: bathroomRemodel,
  },
  {
    icon: Building2,
    title: "Additions & Expansions",
    description:
      "Expand your living space with custom-designed home additions that blend seamlessly with your property's existing structure. From extra bedrooms to multi-room expansions.",
    image: teamWork,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-28 lg:py-32"
      style={{ background: 'hsl(220 15% 18%)' }}
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
            style={{ color: 'hsl(35 55% 45%)' }}
          >
            What We Offer
          </span>
          <h2 
            className="font-heading text-4xl md:text-5xl mt-3 leading-tight"
            style={{ color: 'hsl(40 30% 97%)' }}
          >
            Our Construction <span className="italic" style={{ color: 'hsl(38 50% 55%)' }}>Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative overflow-hidden"
              style={{ background: 'hsla(220,10%,30%,0.5)' }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, hsl(220 15% 18%) 0%, hsla(220,15%,18%,0.5) 50%, transparent 100%)' }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ background: 'hsla(35,55%,45%,0.1)' }}
                  >
                    <service.icon className="w-6 h-6" style={{ color: 'hsl(35 55% 45%)' }} />
                  </div>
                  <h3 
                    className="font-heading text-2xl"
                    style={{ color: 'hsl(40 30% 97%)' }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p 
                  className="font-light leading-relaxed"
                  style={{ color: 'hsla(40,30%,97%,0.7)' }}
                >
                  {service.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div 
                className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[hsla(35,55%,45%,0.3)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
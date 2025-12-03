import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation & Design",
    description:
      "We begin by listening to your ideas, goals, and style preferences. Through collaborative design sessions, we develop detailed plans that reflect your vision while ensuring structural integrity and long-term durability.",
  },
  {
    number: "02",
    title: "Detailed Estimate & Scheduling",
    description:
      "Once the design is finalized, we prepare a clear, itemized estimate and establish a project timeline. We focus on transparency—no hidden fees or surprises. You'll know exactly what to expect.",
  },
  {
    number: "03",
    title: "Construction & Quality Assurance",
    description:
      "Our skilled team manages all phases of construction with precision and professionalism. We follow strict quality-control standards and use durable materials designed to withstand Florida's climate.",
  },
  {
    number: "04",
    title: "Final Walkthrough & Support",
    description:
      "When construction is complete, we conduct a thorough walkthrough to ensure every element is perfect. Even after the project ends, we provide ongoing support and guidance, standing behind our work.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-28 lg:py-32"
      style={{ background: 'hsl(0 0% 15%)' }}
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
            style={{ color: 'hsl(120 8% 65%)' }}
          >
            How We Work
          </span>
          <h2 
            className="font-heading text-4xl md:text-5xl mt-3 leading-tight"
            style={{ color: 'hsl(0 0% 96%)' }}
          >
            Our Process — <span className="italic" style={{ color: 'hsl(120 6% 72%)' }}>From Vision to Reality</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-8 left-full w-full h-px"
                  style={{ background: 'hsla(120,8%,65%,0.2)' }}
                />
              )}

              <div className="text-center lg:text-left">
                <span 
                  className="font-heading text-6xl"
                  style={{ color: 'hsla(120,8%,65%,0.2)' }}
                >
                  {step.number}
                </span>
                <h3 
                  className="font-heading text-2xl mt-2 mb-4"
                  style={{ color: 'hsl(0 0% 96%)' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="font-light leading-relaxed"
                  style={{ color: 'hsla(0,0%,96%,0.7)' }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
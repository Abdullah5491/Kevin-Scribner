import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes, Kevin Scribner Construction provides expert construction and renovation services for both residential and commercial properties throughout Tampa Bay. Whether it's a custom home build or a commercial remodel, our team delivers quality craftsmanship tailored to your needs.",
  },
  {
    question: "What makes your mold-free homes different?",
    answer:
      "Our luxury mold-free homes are built using advanced moisture-control materials and construction methods that greatly reduce mold risks. We go beyond standard building code requirements with enhanced ventilation, water-resistant framing, and specialized insulation systems designed specifically for Florida's humid climate.",
  },
  {
    question: "How long does a custom home build take?",
    answer:
      "The timeline for a custom home build varies based on size, complexity, and design specifications. Typically, custom homes take between 8-14 months from groundbreaking to completion. During your consultation, we'll provide a detailed timeline specific to your project.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we provide complimentary consultations and detailed estimates for all prospective projects. Contact us to schedule an appointment, and we'll assess your needs, discuss your vision, and provide a transparent, itemized quote.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Kevin Scribner Construction is fully licensed and insured in the state of Florida. We maintain comprehensive general liability insurance and workers' compensation coverage for your complete peace of mind.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
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
            Have Questions?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3 leading-tight">
            Frequently Asked <span className="italic" style={{ color: 'hsl(35 55% 45%)' }}>Questions</span>
          </h2>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading text-xl text-foreground pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: 'hsl(35 55% 45%)' }}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground font-light leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
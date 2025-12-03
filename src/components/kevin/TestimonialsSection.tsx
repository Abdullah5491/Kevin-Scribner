import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "CeeJay D",
    date: "August 2025",
    text: "I needed my home remediated for a mold issue. I got several estimates and went with Kevin's team. They went above and beyond. They showed themselves to be very knowledgeable. They worked hard and they were very thorough. They showed that they care about their customers and that they care about doing a good job.",
  },
  {
    name: "Kendra Cummings",
    date: "July 2025",
    text: "From our first interaction through the entire process, Kevin was incredibly responsive, honest, and transparent. Out of all the quotes I received, Kevin was by far the most knowledgeable. Each contractor who came to the house after commented that it was the most thorough job they'd ever seen.",
  },
  {
    name: "Julie Pynes",
    date: "August 2025",
    text: "Kevin and Chase are true professionals. Honest, direct and no nonsense. Their obsession with the details and making sure nothing is overlooked has been a blessing for our family. We appreciate their commitment to integrity with their work and how they take care of their customers!",
  },
  {
    name: "Jayne Grieco",
    date: "June 2025",
    text: "Kevin Scribner is caring, highly educated and dedicated to solving the problems. His team members reflect the same values. Kevin has quickly responded to our questions before, during and after remediation. We are so thankful they were recommended to us.",
  },
  {
    name: "Richard Karman",
    date: "June 2025",
    text: "Professional, honest, friendly, fair prices. Would hire again.",
  },
  {
    name: "Patrick Rieli",
    date: "May 2025",
    text: "Kevin and his team were quick to respond, professional, and handled everything with care. Great communication and even better results. Highly recommend them for any construction or restoration work in Tampa.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-28 lg:py-32"
      style={{ background: 'hsl(0 0% 85%)' }}
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
            style={{ color: 'hsl(120 8% 55%)' }}
          >
            5-Star Rated
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3 leading-tight">
            What Our <span className="italic" style={{ color: 'hsl(120 8% 55%)' }}>Clients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5" style={{ fill: 'hsl(120 8% 55%)', color: 'hsl(120 8% 55%)' }} />
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card p-8 relative group hover:shadow-lg transition-shadow duration-300"
            >
              <Quote 
                className="absolute top-6 right-6 w-8 h-8"
                style={{ color: 'hsla(120,8%,65%,0.2)' }}
              />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ fill: 'hsl(120 8% 55%)', color: 'hsl(120 8% 55%)' }} />
                ))}
              </div>
              
              <p className="text-muted-foreground font-light leading-relaxed mb-6 line-clamp-5">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div 
                  className="w-10 h-10 flex items-center justify-center font-heading"
                  style={{ background: 'hsl(0 0% 15%)', color: 'hsl(0 0% 96%)' }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
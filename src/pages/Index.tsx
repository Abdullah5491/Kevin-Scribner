import HeroSection from "@/components/kevin/HeroSection";
import AboutSection from "@/components/kevin/AboutSection";
import ServicesSection from "@/components/kevin/ServicesSection";
import WhyChooseUsSection from "@/components/kevin/WhyChooseUsSection";
import TestimonialsSection from "@/components/kevin/TestimonialsSection";
import ProcessSection from "@/components/kevin/ProcessSection";
import ServiceAreasSection from "@/components/kevin/ServiceAreasSection";
import FAQSection from "@/components/kevin/FAQSection";
import ContactSection from "@/components/kevin/ContactSection";
import FooterSection from "@/components/kevin/FooterSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ProcessSection />
      <ServiceAreasSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
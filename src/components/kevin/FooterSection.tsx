import { Phone, Mail, MapPin } from "lucide-react";

const FooterSection = () => {
  const charcoalColor = 'hsl(0 0% 12%)';
  const sageColor = 'hsl(120 8% 65%)';
  const lightGrayColor = 'hsl(0 0% 96%)';

  return (
    <footer className="py-16" style={{ background: charcoalColor }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4" style={{ color: lightGrayColor }}>
              Kevin Scribner <span className="italic" style={{ color: sageColor }}>Construction</span>
            </h3>
            <p className="font-light leading-relaxed" style={{ color: `${lightGrayColor}99` }}>
              High-quality craftsmanship, innovative design, and dependable service 
              to homeowners across Tampa Bay.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4" style={{ color: lightGrayColor }}>Services</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="font-light transition-colors hover:opacity-80"
                  style={{ color: `${lightGrayColor}99` }}
                >
                  New Home Construction
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-light transition-colors hover:opacity-80"
                  style={{ color: `${lightGrayColor}99` }}
                >
                  Home Remodels
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-light transition-colors hover:opacity-80"
                  style={{ color: `${lightGrayColor}99` }}
                >
                  Mold-Free Homes
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-light transition-colors hover:opacity-80"
                  style={{ color: `${lightGrayColor}99` }}
                >
                  Additions & Expansions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4" style={{ color: lightGrayColor }}>Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:8134524648"
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{ color: `${lightGrayColor}99` }}
              >
                <Phone className="w-4 h-4" style={{ color: sageColor }} />
                <span className="font-light">(813) 452-4648</span>
              </a>
              <a
                href="mailto:info@kevinscribnerconstruction.com"
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{ color: `${lightGrayColor}99` }}
              >
                <Mail className="w-4 h-4" style={{ color: sageColor }} />
                <span className="font-light">info@ksconstruction.com</span>
              </a>
              <div className="flex items-center gap-3" style={{ color: `${lightGrayColor}99` }}>
                <MapPin className="w-4 h-4" style={{ color: sageColor }} />
                <span className="font-light">Tampa Bay, Florida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: `1px solid ${lightGrayColor}1a` }}
        >
          <p className="text-sm font-light" style={{ color: `${lightGrayColor}66` }}>
            © {new Date().getFullYear()} Kevin Scribner Construction. All rights reserved.
          </p>
          <p className="text-sm font-light" style={{ color: `${lightGrayColor}66` }}>
            A partner of Tampa Emergency Restoration Pros
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
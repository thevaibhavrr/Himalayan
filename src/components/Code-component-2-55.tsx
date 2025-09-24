import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/97522013f16eaa4be887f4d97c1a166c67008250.png';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4B2E2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src={logoImage}
                alt="Himalayan Oil"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm opacity-80 leading-relaxed">
                Since 1978, delivering pure, premium-quality edible oils using traditional Kolhu extraction methods. Trusted by families across India.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#FFD233] rounded-lg flex items-center justify-center hover:bg-[#FFE680] transition-colors">
                <Facebook className="w-5 h-5 text-[#4B2E2B]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD233] rounded-lg flex items-center justify-center hover:bg-[#FFE680] transition-colors">
                <Instagram className="w-5 h-5 text-[#4B2E2B]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FFD233]">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Products', href: '#products' },
                { name: 'Recipes', href: '#recipes' },
                { name: 'Distributor', href: '#distributor' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-[#FFD233] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FFD233]">Our Products</h3>
            <ul className="space-y-3">
              {[
                'Premium Mustard Oil',
                'Pure Sunflower Oil',
                'Natural Soybean Oil',
                'Premium Groundnut Oil',
                'Special Blended Oil'
              ].map((product) => (
                <li key={product}>
                  <span className="text-sm opacity-80">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FFD233]">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFD233] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-80">
                    Industrial Area, Sector-2<br />
                    Greater Noida, UP 201310
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FFD233] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-80">
                    +91 9876543210<br />
                    +91 120-4567890
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FFD233] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-80">
                    info@himalayanoil.com<br />
                    sales@himalayanoil.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © {currentYear} Himalayan Oil. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm opacity-80">
              <span>FSSAI License: 10017051002014</span>
              <span>ISO Certified</span>
              <span>AGMARK</span>
              <span>HACCP</span>
            </div>
            
            <div className="flex gap-6 text-sm opacity-80">
              <button className="hover:text-[#FFD233] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#FFD233] transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
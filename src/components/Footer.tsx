import { Facebook, Instagram, Mail, Phone, MapPin, Award, MessageCircle } from 'lucide-react';
import { useRouter } from './Router';

const Footer = () => {
  const { navigate } = useRouter();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Health Benefits', path: '/health-benefits' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Distribution Network', path: '/distribution' },
    { name: 'Become a Distributor', path: '/distributor' },
    { name: 'Blog / News', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const productLinks = [
    'Premium Mustard Oil',
    'Pure Sunflower Oil',
    'Natural Soybean Oil',
    'Premium Groundnut Oil',
    'Special Blended Oil',
    'Coconut Oil'
  ];

  return (
    <footer className="bg-[#4B2E2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <img
                src={'https://res.cloudinary.com/dk3aontez/image/upload/v1757506527/ae182976-a3d4-4bcc-8c56-e65181084dc6-removebg-preview_mcmtjh.png'}
                alt="Himalayan Oil"
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                Since 1978, delivering pure, premium-quality edible oils using traditional Kolhu extraction methods. Trusted by families across India.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFD233] flex-shrink-0" />
              <span className="text-xs text-gray-300">FSSAI Certified • ISO Standards</span>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-[#FFD233]">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/bharatagrooil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FFD233] rounded-full flex items-center justify-center hover:bg-[#FFE680] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFE680] focus:ring-offset-2 focus:ring-offset-[#4B2E2B]"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#4B2E2B]" />
                </a>
                <a
                  href="https://www.instagram.com/bharatagrooil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FFD233] rounded-full flex items-center justify-center hover:bg-[#FFE680] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFE680] focus:ring-offset-2 focus:ring-offset-[#4B2E2B]"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#4B2E2B]" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#FFD233]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-gray-300 hover:text-[#FFD233] transition-colors duration-200 text-left focus:outline-none focus:text-[#FFD233]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#FFD233]">Our Products</h3>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <button
                    onClick={() => navigate('/products')}
                    className="text-sm text-gray-300 hover:text-[#FFD233] transition-colors duration-200 text-left focus:outline-none focus:text-[#FFD233]"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-medium text-[#FFD233]">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFD233] mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300 leading-relaxed">
                  <p>Khasra No. 118 & 120, Sikeda Road</p>
                  <p>Industrial Area, Modinagar 201204</p>
                  <p>Distt. GZB, UP, India</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <a
                  href="tel:+919219450111"
                  className="flex items-center gap-3 hover:text-[#FFD233] transition-colors duration-200 focus:outline-none focus:text-[#FFD233] group"
                  aria-label="Call us at +91 9219450111"
                >
                  <Phone className="w-4 h-4 text-[#FFD233] group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm text-gray-300 group-hover:text-[#FFD233]">+91 9219450111</span>
                </a>
                
                <a
                  href="mailto:bharatagrooil@yahoo.in"
                  className="flex items-center gap-3 hover:text-[#FFD233] transition-colors duration-200 focus:outline-none focus:text-[#FFD233] group"
                  aria-label="Email us at bharatagrooil@yahoo.in"
                >
                  <Mail className="w-4 h-4 text-[#FFD233] group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm text-gray-300 group-hover:text-[#FFD233]">bharatagrooil@yahoo.in</span>
                </a>
                
                <a
                  href="https://wa.me/919219450111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FFD233] transition-colors duration-200 focus:outline-none focus:text-[#FFD233] group"
                  aria-label="WhatsApp us at +91 9219450111"
                >
                  <MessageCircle className="w-4 h-4 text-[#FFD233] group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm text-gray-300 group-hover:text-[#FFD233]">WhatsApp: +91 9219450111</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-4 text-center lg:text-left text-sm text-gray-400">
            <p>© 2025 Bharat Agro Oil Pvt Ltd. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-2 lg:mt-0">
              <span className="font-medium">FSSAI License: 10017051002014</span>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#FFD233] transition-colors duration-200 focus:outline-none focus:text-[#FFD233]"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <button 
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#FFD233] transition-colors duration-200 focus:outline-none focus:text-[#FFD233]"
                >
                  Terms & Conditions
                </button>
                <span>•</span>
                <span className="text-xs text-gray-500">Created by Pitamaas Pvt Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

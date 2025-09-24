import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

interface AnnouncementBarProps {
  phone?: string;
  email?: string;
  showOnPages?: string[];
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

const AnnouncementBar = ({ 
  phone = '+91 9876543210', 
  email = 'info@himalayanoil.com',
  facebook = 'https://facebook.com/himalayanoil',
  instagram = 'https://instagram.com/himalayanoil',
  linkedin = 'https://linkedin.com/company/himalayanoil'
}: AnnouncementBarProps) => {
  return (
    <div className="bg-[#4B2E2B] text-white py-2 px-4">
      <div className="max-w-[75rem] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">
          
          {/* Contact Section */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href={`tel:${phone}`} 
              className="flex items-center gap-2 hover:text-[#FFD233] transition-colors duration-200 group"
              aria-label={`Call us at ${phone}`}
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">{phone}</span>
            </a>

            <div className="w-px h-4 bg-white/30"></div>

            <a 
              href={`mailto:${email}`} 
              className="flex items-center gap-2 hover:text-[#FFD233] transition-colors duration-200 group"
              aria-label={`Email us at ${email}`}
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">{email}</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center gap-4">
            <a 
              href={facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FFD233] transition-colors duration-200 group"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FFD233] transition-colors duration-200 group"
              aria-label="Visit our Instagram profile"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FFD233] transition-colors duration-200 group"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;

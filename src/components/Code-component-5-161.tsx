import { Phone, Mail } from 'lucide-react';

interface AnnouncementBarProps {
  phone?: string;
  email?: string;
  showOnPages?: string[];
}

const AnnouncementBar = ({ 
  phone = '+91 9876543210', 
  email = 'info@himalayanoil.com' 
}: AnnouncementBarProps) => {
  return (
    <div className="bg-[#4B2E2B] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-6 text-xs md:text-sm">
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
      </div>
    </div>
  );
};

export default AnnouncementBar;
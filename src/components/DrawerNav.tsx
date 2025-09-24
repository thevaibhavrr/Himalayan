import { useState, useEffect } from 'react';
import { X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from './Router';

interface DrawerNavProps {
  navItems: Array<{
    name: string;
    path: string;
  }>;
  phone?: string;
  email?: string;
  open: boolean;
  onClose: () => void;
}

const DrawerNav = ({ 
  navItems, 
  phone = '+91 9876543210', 
  email = 'info@himalayanoil.com',
  open, 
  onClose 
}: DrawerNavProps) => {
  const { navigate, currentPage } = useRouter();

  // Handle navigation and close drawer
  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  // Focus management
  useEffect(() => {
    if (open) {
      // Focus the close button when drawer opens
      const closeButton = document.getElementById('drawer-close-button');
      if (closeButton) {
        closeButton.focus();
      }
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        aria-describedby="drawer-description"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 id="drawer-title" className="text-lg font-medium text-[#4B2E2B]">
            Menu
          </h2>
          <Button
            id="drawer-close-button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Contact Information */}
        <div className="p-6 bg-[#FFF8E1] border-b border-gray-200">
          <h3 className="text-sm font-medium text-[#4B2E2B] mb-4">Contact Us</h3>
          <div className="space-y-3">
            <a 
              href={`tel:${phone}`}
              className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-[#FFE680] transition-colors duration-200 group"
              aria-label={`Call us at ${phone}`}
            >
              <div className="w-10 h-10 bg-[#FFD233] rounded-full flex items-center justify-center group-hover:bg-[#4B2E2B] transition-colors duration-200">
                <Phone className="w-5 h-5 text-[#4B2E2B] group-hover:text-white" />
              </div>
              <div>
                <div className="text-xs text-[#4B2E2B] opacity-60">Call us</div>
                <div className="text-sm font-medium text-[#4B2E2B]">{phone}</div>
              </div>
            </a>
            
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-[#FFE680] transition-colors duration-200 group"
              aria-label={`Email us at ${email}`}
            >
              <div className="w-10 h-10 bg-[#FFD233] rounded-full flex items-center justify-center group-hover:bg-[#4B2E2B] transition-colors duration-200">
                <Mail className="w-5 h-5 text-[#4B2E2B] group-hover:text-white" />
              </div>
              <div>
                <div className="text-xs text-[#4B2E2B] opacity-60">Email us</div>
                <div className="text-sm font-medium text-[#4B2E2B]">{email}</div>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-6" role="navigation" aria-label="Main navigation">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                      currentPage === item.path
                        ? 'bg-[#FFD233] text-[#4B2E2B]'
                        : 'text-[#4B2E2B] hover:bg-[#FFF8E1]'
                    }`}
                    aria-current={currentPage === item.path ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-[#FFF8E1]">
          <p className="text-xs text-[#4B2E2B] opacity-60 text-center">
            45+ Years of Pure Excellence
          </p>
        </div>
      </div>
    </>
  );
};

export default DrawerNav;
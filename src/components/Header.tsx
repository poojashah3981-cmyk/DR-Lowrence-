import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Stethoscope, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { TREATMENTS } from '../data/treatmentsData';

export const Header: React.FC = () => {
  const { currentPath, navigate, openAppointmentModal } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsDropdownOpen, setIsTreatmentsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    setIsTreatmentsDropdownOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-shadow duration-300">
      {/* Top Professional Utility Bar */}
      <div className="bg-[#0b192c] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="flex items-center gap-1.5 text-sky-400 font-semibold shrink-0">
                <Phone className="w-3.5 h-3.5" />
                <span className="text-slate-400 font-normal">Call:</span>
              </span>
              <a 
                href="tel:+917037306519" 
                className="hover:text-sky-400 font-medium transition-colors whitespace-nowrap"
                title="Call: +91 70373 06519"
              >
                +91 70373 06519
              </a>
              <span className="text-slate-600">•</span>
              <a 
                href="tel:+916397204315" 
                className="hover:text-sky-400 font-medium transition-colors whitespace-nowrap"
                title="Call: +91 63972 04315"
              >
                +91 63972 04315
              </a>
              <span className="text-slate-600">•</span>
              <a 
                href="tel:+919113869966" 
                className="hover:text-sky-400 font-medium transition-colors whitespace-nowrap"
                title="Call: +91 91138 69966"
              >
                +91 91138 69966
              </a>
            </div>
            <a 
              href="mailto:lowerncerichard77@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              title="Email Clinic"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>lowerncerichard77@gmail.com</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] text-slate-400 ml-auto">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">KMC Registration No:</span>
              <strong className="text-slate-200">203592</strong>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-sky-300 font-medium">15+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'shadow-md py-3 bg-white/95 backdrop-blur-md' : 'py-4.5 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand & Doctor Name */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
            aria-label="Dr. Lowrence Richard Abraham - Home"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-sky-500 to-[#0f2744] flex items-center justify-center text-white shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
              <Stethoscope className="w-6 h-6 text-sky-100" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-[#0b192c] tracking-tight group-hover:text-sky-700 transition-colors">
                Dr. Lowrence Richard Abraham
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 flex items-center gap-1.5">
                <span className="text-sky-600 font-semibold">MS (General Surgery)</span>
                <span>•</span>
                <span>Consultant General Surgeon</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-slate-700">
            <button
              onClick={() => handleNavClick('/')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/') && currentPath === '/'
                  ? 'text-sky-700 bg-sky-50 font-semibold' 
                  : 'hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/about') 
                  ? 'text-sky-700 bg-sky-50 font-semibold' 
                  : 'hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              About
            </button>

            {/* Treatments with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsTreatmentsDropdownOpen(true)}
              onMouseLeave={() => setIsTreatmentsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('/treatments')}
                className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${
                  isActive('/treatments') 
                    ? 'text-sky-700 bg-sky-50 font-semibold' 
                    : 'hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                <span>Treatments</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isTreatmentsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isTreatmentsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-3 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 mb-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Surgical & Laser Specialities
                    </span>
                  </div>
                  <div className="max-h-96 overflow-y-auto py-1">
                    {TREATMENTS.map((treatment) => (
                      <button
                        key={treatment.slug}
                        onClick={() => handleNavClick(`/treatments/${treatment.slug}`)}
                        className="w-full text-left px-4 py-2.5 hover:bg-sky-50 flex flex-col group transition-colors"
                      >
                        <span className="text-sm font-medium text-slate-800 group-hover:text-sky-700">
                          {treatment.name}
                        </span>
                        <span className="text-xs text-slate-400 truncate">
                          {treatment.shortDescription}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="px-4 pt-2 mt-1 border-t border-slate-100">
                    <button
                      onClick={() => handleNavClick('/treatments')}
                      className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1 w-full justify-between"
                    >
                      <span>View All 8 Treatments & Procedures</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/treatments')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPath === '/treatments' 
                  ? 'text-sky-700 bg-sky-50 font-semibold' 
                  : 'hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Specialities
            </button>

            <button
              onClick={() => handleNavClick('/approach')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/approach') 
                  ? 'text-sky-700 bg-sky-50 font-semibold' 
                  : 'hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Our Approach
            </button>

            <button
              onClick={() => handleNavClick('/patient-guide')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/patient-guide') 
                  ? 'text-sky-700 bg-sky-50 font-semibold' 
                  : 'hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Patient Guide
            </button>

            <button
              onClick={() => handleNavClick('/patient-experiences')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/patient-experiences') 
                  ? 'text-sky-700 bg-sky-50 font-semibold' 
                  : 'hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Patient Experiences
            </button>

            <button
              onClick={() => handleNavClick('/faqs')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/faqs') 
                  ? 'text-sky-700 bg-sky-50 font-semibold' 
                  : 'hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              FAQs
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/contact') 
                  ? 'text-sky-700 bg-sky-50 font-semibold' 
                  : 'hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Primary Header CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-book-consultation-btn"
              onClick={() => openAppointmentModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openAppointmentModal()}
              className="px-3 py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold sm:hidden"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white max-h-[85vh] overflow-y-auto px-5 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 pb-4 border-b border-slate-100">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/') && currentPath === '/' ? 'text-sky-700 bg-sky-50 font-semibold' : 'text-slate-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/about') ? 'text-sky-700 bg-sky-50 font-semibold' : 'text-slate-700'
              }`}
            >
              About Dr. Lowrence
            </button>
            <button
              onClick={() => handleNavClick('/treatments')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/treatments') ? 'text-sky-700 bg-sky-50 font-semibold' : 'text-slate-700'
              }`}
            >
              All Treatments & Procedures
            </button>
            
            {/* Quick sub-links for treatments */}
            <div className="pl-4 py-1.5 flex flex-col gap-1 bg-slate-50 rounded-lg my-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase px-2 pt-1">Key Treatments</span>
              {TREATMENTS.slice(0, 4).map((t) => (
                <button
                  key={t.slug}
                  onClick={() => handleNavClick(`/treatments/${t.slug}`)}
                  className="text-left px-2 py-1.5 text-sm text-slate-600 hover:text-sky-600"
                >
                  • {t.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick('/approach')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/approach') ? 'text-sky-700 bg-sky-50 font-semibold' : 'text-slate-700'
              }`}
            >
              Our Approach (4-Step Process)
            </button>
            <button
              onClick={() => handleNavClick('/patient-guide')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/patient-guide') ? 'text-sky-700 bg-sky-50 font-semibold' : 'text-slate-700'
              }`}
            >
              Patient Guide (ZSR Circumcision & Recovery)
            </button>
            <button
              onClick={() => handleNavClick('/patient-experiences')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/patient-experiences') ? 'text-sky-700 bg-sky-50 font-semibold' : 'text-slate-700'
              }`}
            >
              Patient Experiences
            </button>
            <button
              onClick={() => handleNavClick('/faqs')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/faqs') ? 'text-sky-700 bg-sky-50 font-semibold' : 'text-slate-700'
              }`}
            >
              Frequently Asked Questions (FAQs)
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/contact') ? 'text-sky-700 bg-sky-50 font-semibold' : 'text-slate-700'
              }`}
            >
              Contact & Location
            </button>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openAppointmentModal();
              }}
              className="w-full py-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-center text-sm shadow-sm"
            >
              Book a Consultation
            </button>
            
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:+917037306519"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 text-xs font-semibold hover:bg-sky-100"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/917037306519"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Direct Telephone Lines */}
            <div className="pt-2 border-t border-slate-100 space-y-1.5 text-left">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Direct Clinic Numbers
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                <a
                  href="tel:+917037306519"
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium hover:bg-slate-100"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    +91 70373 06519
                  </span>
                  <span className="text-[10px] text-sky-600 font-bold uppercase">Primary</span>
                </a>
                <a
                  href="tel:+916397204315"
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium hover:bg-slate-100"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    +91 63972 04315
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium uppercase">Direct</span>
                </a>
                <a
                  href="tel:+919113869966"
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium hover:bg-slate-100"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    +91 91138 69966
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium uppercase">Direct</span>
                </a>
              </div>
            </div>

            <div className="text-center text-xs text-slate-500 pt-2">
              <span>Location: Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

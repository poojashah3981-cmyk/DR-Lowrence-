import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Award, 
  ArrowUpRight, 
  Stethoscope 
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { TREATMENTS } from '../data/treatmentsData';

export const Footer: React.FC = () => {
  const { navigate, openAppointmentModal } = useNavigation();

  const handleNav = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-[#0b192c] text-slate-300 border-t border-slate-800">
      {/* Pre-footer Consultation Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-[#0d223f] via-[#0f2a4d] to-[#0d223f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                Direct Doctor-Led Care
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Come with your concern. Leave with a clear plan.
              </h3>
              <p className="text-slate-300 text-sm mt-2">
                Consult with Dr. Lowrence Richard Abraham in Bengaluru. Experienced clinical assessment, evidence-based options, and transparent guidance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                id="footer-book-consult-btn"
                onClick={() => openAppointmentModal()}
                className="px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="tel:+917037306519"
                  className="px-3.5 py-3 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-medium text-xs border border-slate-700 transition-all flex items-center gap-1.5"
                  title="Call Primary: +91 70373 06519"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>+91 70373 06519</span>
                </a>
                <a
                  href="tel:+916397204315"
                  className="px-3.5 py-3 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-medium text-xs border border-slate-700 transition-all flex items-center gap-1.5"
                  title="Call: +91 63972 04315"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>+91 63972 04315</span>
                </a>
                <a
                  href="tel:+919113869966"
                  className="px-3.5 py-3 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-medium text-xs border border-slate-700 transition-all flex items-center gap-1.5"
                  title="Call: +91 91138 69966"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>+91 91138 69966</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Doctor Profile & Registration */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5 text-sky-100" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Dr. Lowrence Richard Abraham
                </h4>
                <p className="text-xs text-sky-300 font-medium">
                  Consultant General Surgeon
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              MS (General Surgery). Over 15 years of surgical excellence spanning General Surgery, Laparoscopy, Laser Proctology, Endourology, and Renal Transplantation care in Bengaluru.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>KMC Registration No: <strong>203592</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400 shrink-0" />
                <span>15+ Years Clinical Surgical Experience</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('/')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-500 text-xs">›</span> Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/about')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-500 text-xs">›</span> About Dr. Lowrence
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/treatments')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-500 text-xs">›</span> Treatments & Procedures
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/approach')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-500 text-xs">›</span> Our Approach
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/patient-guide')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-500 text-xs">›</span> Patient Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/patient-experiences')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-500 text-xs">›</span> Patient Experiences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/faqs')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-500 text-xs">›</span> FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/contact')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-500 text-xs">›</span> Contact & Appointments
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {TREATMENTS.map((treatment) => (
                <li key={treatment.slug}>
                  <button
                    onClick={() => handleNav(`/treatments/${treatment.slug}`)}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="text-sky-500 text-xs">›</span>
                    <span className="truncate">{treatment.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact & Location
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div className="space-y-1">
                  <div className="text-xs text-slate-400">Direct Consultation Desks</div>
                  <a 
                    href="tel:+917037306519" 
                    className="text-white hover:text-sky-400 font-semibold transition-colors block"
                    title="Primary Consultation Line"
                  >
                    +91 70373 06519 <span className="text-[10px] text-sky-400 font-normal">(Primary)</span>
                  </a>
                  <a 
                    href="tel:+916397204315" 
                    className="text-slate-200 hover:text-sky-400 font-medium transition-colors block"
                    title="Direct Consultation Line"
                  >
                    +91 63972 04315
                  </a>
                  <a 
                    href="tel:+919113869966" 
                    className="text-slate-200 hover:text-sky-400 font-medium transition-colors block"
                    title="Direct Consultation Line"
                  >
                    +91 91138 69966
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-400">Email Address</div>
                  <a 
                    href="mailto:lowerncerichard77@gmail.com" 
                    className="text-white hover:text-sky-400 text-xs font-medium break-all transition-colors block"
                  >
                    lowerncerichard77@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-400">Consultation Location</div>
                  <span className="text-white font-medium">
                    Bengaluru, Karnataka
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openAppointmentModal()}
                className="w-full py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 space-y-4">
          <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Medical Disclaimer: </strong>
            Information on this website is for general educational purposes and does not replace an individual medical consultation, diagnosis or treatment plan. Treatment and investigations are recommended based on individual clinical assessment and medical necessity.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
            <div>
              © {new Date().getFullYear()} Dr. Lowrence Richard Abraham • Consultant General Surgeon. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Bengaluru, Karnataka</span>
              <span>•</span>
              <button onClick={() => handleNav('/approach')} className="hover:text-slate-300">
                Ethical Practice
              </button>
              <span>•</span>
              <button onClick={() => handleNav('/faqs')} className="hover:text-slate-300">
                Patient FAQs
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

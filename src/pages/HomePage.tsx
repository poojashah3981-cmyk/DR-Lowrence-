import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  Award, 
  Activity, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  HelpCircle, 
  Phone,
  FileCheck,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { TREATMENTS } from '../data/treatmentsData';
import { DOCTOR_HERO_IMAGE } from '../assets/doctorPhotoBase64';

export const HomePage: React.FC = () => {
  const { navigate, openAppointmentModal } = useNavigation();

  // Featured 4 services as requested
  const featuredServices = TREATMENTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
                <span>CONSULTANT GENERAL SURGEON</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-[1.15]">
                Come with your concern.<br />
                <span className="text-sky-600">Leave with a clear plan.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Dr. Lowrence Clinic, we believe healthcare should feel simple and reassuring. We listen to your concern, assess what you need, explain your options and guide you through the next step — without unnecessary runaround.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="hero-book-consultation-btn"
                  onClick={() => openAppointmentModal()}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base shadow-lg shadow-sky-600/20 hover:shadow-sky-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Consultation</span>
                </button>

                <button
                  id="hero-explore-treatments-btn"
                  onClick={() => navigate('/treatments')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg border-2 border-slate-200 hover:border-sky-600 text-slate-700 hover:text-sky-700 font-semibold text-base bg-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Telephone Lines */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
                <span className="text-slate-500 font-medium flex items-center gap-1 shrink-0">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call:</span>
                </span>
                <a
                  href="tel:+917037306519"
                  className="font-bold text-sky-700 hover:text-sky-900 hover:underline transition-colors whitespace-nowrap"
                  title="Call Primary: +91 70373 06519"
                >
                  +91 70373 06519
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="tel:+916397204315"
                  className="font-semibold text-slate-700 hover:text-sky-700 hover:underline transition-colors whitespace-nowrap"
                  title="Call: +91 63972 04315"
                >
                  +91 63972 04315
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="tel:+919113869966"
                  className="font-semibold text-slate-700 hover:text-sky-700 hover:underline transition-colors whitespace-nowrap"
                  title="Call: +91 91138 69966"
                >
                  +91 91138 69966
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100 text-left">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-sky-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-800">15+ Years</div>
                    <div className="text-[11px] text-slate-500">Surgical Experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-800">KMC 203592</div>
                    <div className="text-[11px] text-slate-500">Registered Surgeon</div>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-800">Bengaluru</div>
                    <div className="text-[11px] text-slate-500">In-Person Clinic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image (Official Doctor Photograph) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="/images/Dr. Lowrence Richard Abraham.jpeg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== DOCTOR_HERO_IMAGE) {
                      target.src = DOCTOR_HERO_IMAGE;
                    }
                  }}
                  alt="Dr. Lowrence Richard Abraham - Consultant General, Laparoscopic & Laser Surgeon"
                  className="w-full h-88 sm:h-96 lg:h-[480px] object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Clinical overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0b192c] uppercase tracking-wide">
                        Dr. Lowrence Richard Abraham
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                        MS (General Surgery) • Consultant Surgeon • KMC 203592 • 15+ Years Surgical Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-200/40 rounded-full blur-2xl pointer-events-none -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-300/30 rounded-full blur-2xl pointer-events-none -z-10" />
            </div>

          </div>

          {/* Under-hero statement */}
          <div className="mt-12 pt-5 border-t border-slate-200/80 text-center">
            <p className="text-xs sm:text-sm font-medium text-slate-500 italic max-w-3xl mx-auto">
              "Treatment and investigations are recommended based on individual clinical assessment and medical necessity."
            </p>
          </div>

        </div>
      </section>

      {/* SPECIALISED CARE SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              SPECIALISED CLINICAL PROCEDURES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b192c] tracking-tight">
              Focused treatment, explained simply
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              From common surgical problems to minimally invasive and laser procedures, your care is planned around your clinical needs.
            </p>
          </div>

          {/* 4 Clickable Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.slug}
                onClick={() => navigate(`/treatments/${service.slug}`)}
                className="group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white bg-slate-900/70 backdrop-blur-sm px-2 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0b192c] group-hover:text-sky-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-sky-600 group-hover:text-sky-700 flex items-center gap-1">
                      Learn More <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] text-slate-400">Day-Care / Minor</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Specialities Link */}
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/treatments')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 hover:border-sky-600 bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-sky-800 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Explore All 8 Surgical Specialities (Urology, Hernia, Laser & Complex Wounds)</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </button>
          </div>

        </div>
      </section>

      {/* 4-STEP CARE PROCESS HIGHLIGHT */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
                OUR METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c] mt-1">
                Healthcare without the hassle
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                A calm, structured 4-step surgical pathway designed so you always know what to expect.
              </p>
            </div>
            <div>
              <button
                onClick={() => navigate('/approach')}
                className="text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1.5"
              >
                <span>Read detailed approach</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-sky-600 font-mono tracking-wider bg-sky-50 px-2 py-1 rounded">
                01 — LISTEN
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Understand Your Concern
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We sit down and listen thoroughly to your history, past interventions, and concerns without rushing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-sky-600 font-mono tracking-wider bg-sky-50 px-2 py-1 rounded">
                02 — ASSESS
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Targeted Clinical Exam
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Perform only the clinical physical examinations and diagnostic tests that are genuinely indicated.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-sky-600 font-mono tracking-wider bg-sky-50 px-2 py-1 rounded">
                03 — EXPLAIN
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Clear Options & Recovery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Discuss the diagnosis, non-surgical alternatives, surgical techniques, recovery timelines, and costs openly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-sky-600 font-mono tracking-wider bg-sky-50 px-2 py-1 rounded">
                04 — GUIDE
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Coordinated Aftercare
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manage pre-operative preparation, smooth procedural execution, and direct post-op recovery follow-up.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-sky-50/70 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-950">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sky-600 shrink-0" />
              <span>
                <strong>We do not promise "no tests."</strong> When an investigation is genuinely needed, we explain why. The goal is appropriate care — not unnecessary procedures.
              </span>
            </div>
            <button
              onClick={() => navigate('/approach')}
              className="font-bold underline hover:text-sky-700 shrink-0"
            >
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* ABOUT DR. LOWRENCE OVERVIEW SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image (Clinical Suite & Consultation Environment) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50">
                <img
                  src="/images/Untitled design (2).png"
                  onError={(e) => {
                    e.currentTarget.src = '/images/Untitled design (3).png';
                  }}
                  alt="Modern private surgical consultation suite in Bengaluru"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 bg-white border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-700 uppercase">Consultant General Surgeon</span>
                    <span className="text-xs text-slate-500 font-mono">Reg: KMC 203592</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Dr. Lowrence Richard Abraham
                  </h4>
                  <p className="text-xs text-slate-500">
                    MS (General Surgery) • Senior Clinical Surgical Consultant
                  </p>
                </div>
              </div>
            </div>

            {/* About text */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                CREDENTIALS & BACKGROUND
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c] tracking-tight">
                15+ Years of Clinical and Surgical Experience
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dr. Lowrence has over 15 years of clinical and surgical experience spanning General Surgery, Trauma Surgery, Urology, Renal Transplantation, Minimal Access Surgery, Laser Surgery, Cosmetic Procedures and Advanced Wound Management.
              </p>

              {/* Prestigious Experience institutions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800">Bharati Medical College</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Pune Hospital Residency</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800">Kokilaben Ambani Hospital</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Senior Registrar — Urology</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800">Apollo Indraprastha</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Renal Transplant Experience</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate('/about')}
                  className="px-6 py-3 rounded-lg bg-[#0b192c] hover:bg-slate-800 text-white font-semibold text-sm transition-all"
                >
                  View Full Surgical Profile & Timeline
                </button>
                <button
                  onClick={() => openAppointmentModal()}
                  className="px-6 py-3 rounded-lg border border-sky-600 text-sky-700 hover:bg-sky-50 font-semibold text-sm transition-all"
                >
                  Consult Dr. Lowrence
                </button>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="tel:+917037306519"
                    className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                    title="Call Primary: +91 70373 06519"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>+91 70373 06519</span>
                  </a>
                  <a
                    href="tel:+916397204315"
                    className="px-3 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-xs flex items-center gap-1 transition-colors"
                    title="Call: +91 63972 04315"
                  >
                    <Phone className="w-3 h-3 text-sky-600" />
                    <span>+91 63972 04315</span>
                  </a>
                  <a
                    href="tel:+919113869966"
                    className="px-3 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-xs flex items-center gap-1 transition-colors"
                    title="Call: +91 91138 69966"
                  >
                    <Phone className="w-3 h-3 text-sky-600" />
                    <span>+91 91138 69966</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK PATIENT GUIDE PREVIEW */}
      <section className="py-14 bg-gradient-to-br from-sky-900 to-[#0b192c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold tracking-wider text-sky-300 uppercase">
                PATIENT EDUCATION & REASSURANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Have questions before your surgical appointment?
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Read our comprehensive patient guides on ZSR Circumcision, laser proctology, hernia repairs, what happens during the initial consultation, and realistic recovery expectations.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => navigate('/patient-guide')}
                className="px-5 py-3 rounded-lg bg-white text-slate-900 hover:bg-sky-50 font-semibold text-sm text-center shadow transition-all"
              >
                Read Patient Guide
              </button>
              <button
                onClick={() => navigate('/faqs')}
                className="px-5 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm text-center transition-all"
              >
                View Frequently Asked Questions
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

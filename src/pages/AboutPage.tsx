import React, { useState } from 'react';
import { 
  Calendar, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Stethoscope, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  MapPin, 
  Phone,
  ZoomIn,
  ZoomOut,
  X,
  Maximize2,
  BadgeCheck
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const AboutPage: React.FC = () => {
  const { navigate, openAppointmentModal } = useNavigation();
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  const openCertModal = () => {
    setZoomScale(1);
    setIsCertModalOpen(true);
  };

  const closeCertModal = () => {
    setIsCertModalOpen(false);
    setZoomScale(1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'About Dr. Lowrence' }]} />

      {/* Main Profile Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>CONSULTANT PROFILE</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
                  Dr. Lowrence Richard Abraham
                </h1>
                <p className="text-sm sm:text-base font-semibold text-sky-700 mt-2">
                  MS (General Surgery) | Consultant General, Laparoscopic, Laser & Cosmetic Surgeon
                </p>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Dr. Lowrence has over 15 years of clinical and surgical experience spanning General Surgery, Trauma Surgery, Urology, Renal Transplantation, Minimal Access Surgery, Laser Surgery, Cosmetic Procedures and Advanced Wound Management.
              </p>

              {/* Statistics highlight */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0b192c]">
                    15+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Years' Experience
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-600">
                    MS
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    General Surgery
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-mono">
                    203592
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    KMC Reg. No.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="about-meet-consult-btn"
                  onClick={() => openAppointmentModal()}
                  className="px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Meet / Consult Dr. Lowrence</span>
                </button>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="tel:+917037306519"
                    className="px-3.5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                    title="Call Primary: +91 70373 06519"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>+91 70373 06519</span>
                  </a>
                  <a
                    href="tel:+916397204315"
                    className="px-3 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-xs flex items-center gap-1 transition-colors"
                    title="Call: +91 63972 04315"
                  >
                    <Phone className="w-3 h-3 text-sky-600" />
                    <span>+91 63972 04315</span>
                  </a>
                  <a
                    href="tel:+919113869966"
                    className="px-3 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-xs flex items-center gap-1 transition-colors"
                    title="Call: +91 91138 69966"
                  >
                    <Phone className="w-3 h-3 text-sky-600" />
                    <span>+91 91138 69966</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Surgical / Clinical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                <img
                  src="/images/Untitled design (1).png"
                  onError={(e) => {
                    e.currentTarget.src = '/images/Untitled design.png';
                  }}
                  alt="Precision surgical laser and laparoscopic equipment in an advanced clinic"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 bg-white border-t border-slate-100">
                  <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                    Clinical Standards & Environment
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Surgical interventions conducted using sterile instrumentation, minimal-access optical laparoscopy, and precision laser consoles in Bengaluru.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MEDICAL REGISTRATION / CREDENTIALS CARD (KARNATAKA MEDICAL COUNCIL) */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>OFFICIAL STATUTORY CREDENTIAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c]">
              Karnataka Medical Council Registration
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
              Registered Medical Practitioner — Karnataka Medical Council
            </p>
          </div>

          {/* Credentials Visual Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Official Records & Qualifications Breakdown */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                
                {/* Status Badge Strip */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-900 font-bold text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-600" />
                    <span>Reg. No. : <strong className="font-mono text-sm">203592</strong></span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>Date of Registration : <strong>29 JUL 2026</strong></span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs">
                    Sl. No. : 161459
                  </div>
                </div>

                {/* Practitioner Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase block">Registered Name</span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">DR. LOWRENCE RICHARD ABRAHAM</p>
                  </div>
                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase block">Registering Authority</span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">Karnataka Medical Council (Bengaluru)</p>
                  </div>
                </div>

                {/* Degrees & Institutions */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Verified Qualifications & Universities
                  </h4>
                  
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">
                          M.S. (General Surgery) — 2015
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Bharati Vidyapeeth Deemed University Medical College, Pune (Bharati Vidyapeeth Deemed University)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">
                          Bachelor of Medicine & Bachelor of Surgery (MBBS) — 2010
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Terna Medical College & Hospital, Navi Mumbai (Maharashtra University of Health Sciences, Nashik)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legal compliance notice */}
                <div className="text-xs text-slate-500 border-t border-slate-100 pt-3">
                  <p className="leading-relaxed">
                    Registered under the <strong>Karnataka Medical Registration Act 34 of 1961</strong>. Legally qualified to practice Modern Scientific Medicine, Surgery, Obstetrics and Gynaecology with verified council credentials.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={openCertModal}
                  className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>Enlarge / Zoom Certificate</span>
                </button>
                <a
                  href="/images/karnataka_medical_council_certificate.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Open Full Resolution</span>
                </a>
              </div>

            </div>

            {/* Right Column: Certificate Preview Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-100 to-slate-200/80 p-6 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
              <div 
                onClick={openCertModal}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all max-w-sm bg-white border border-slate-200"
              >
                <img
                  src="/images/karnataka_medical_council_certificate.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('ChatGPT') === -1) {
                      target.src = '/images/ChatGPT Image Sep 18, 2026, 06_05_29 PM.png';
                    } else if (target.src.indexOf('kmc_') === -1) {
                      target.src = '/images/kmc_certificate.png';
                    }
                  }}
                  alt="Karnataka Medical Council Certificate of Registration - Dr. Lowrence Richard Abraham"
                  className="w-full h-auto object-contain max-h-[440px] group-hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-sky-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center">
                  <div className="p-3 rounded-full bg-white text-sky-700 shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="text-white font-bold text-xs sm:text-sm drop-shadow-md">
                    Click to Open Interactive Zoom Lightbox
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-3 font-medium">
                Official Registration Document • Reg. No. 203592 • Karnataka Medical Council
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE & TIMELINE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
              INSTITUTIONAL FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c] mt-1">
              Professional Experience & Academic Training
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Extensive surgical training and clinical tenures across premier apex teaching hospitals and tertiary healthcare institutions:
            </p>
          </div>

          <div className="relative border-l-2 border-sky-200 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            
            {/* Timeline item 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-sky-600" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  Postgraduate Surgical Residency
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Bharati Medical College / Hospital, Pune
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  Comprehensive master of surgery training spanning major abdominal surgery, elective general surgery, acute trauma, gastrointestinal operations, and emergency surgical intensive care.
                </p>
              </div>
            </div>

            {/* Timeline item 2 */}
            <div className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-sky-600" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  Specialized Urology Fellowship & Clinical Tenure
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Senior Registrar — Urology, Kokilaben Dhirubhai Ambani Hospital
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  Advanced exposure to state-of-the-art endourology, holmium laser stone fragmentation, prostate interventions, reconstructive urology, and complex surgical management at one of India's foremost tertiary care medical centres.
                </p>
              </div>
            </div>

            {/* Timeline item 3 */}
            <div className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-sky-600" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  Renal Transplant & Vascular Access
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Renal Transplant Experience — Apollo Indraprastha Hospital
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  High-volume clinical surgical experience in kidney transplant donor and recipient surgical protocols, organ retrieval, vascular anastomosis, native AV fistula creation, and long-term immunosuppressive surgical management.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* UROLOGY & SPECIALIZED SURGICAL EXPERTISE */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
              SPECIALIZED CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c] mt-1">
              Urology & Renal Care Experience
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              His urology and specialized surgical portfolio covers precise diagnostic and therapeutic interventions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Endourology
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Minimally invasive, incision-free optical endoscopic management for renal, ureteric, and bladder stones utilizing laser lithotripsy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Renal Surgery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clinical evaluation and surgical management for benign and complex kidney pathologies, renal cysts, and obstructive uropathy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Reconstructive Urology
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Management of urethral strictures, optical internal urethrotomy, and anatomical surgical reconstruction for smooth urinary outflow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Kidney Transplant Procedures
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Surgical evaluation, recipient and donor anatomical assessments, vascular surgical technique, and post-transplant complications management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm">
                05
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Vascular Access Procedures
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Microsurgical native Arteriovenous (AV) Fistula creation (Radiocephalic & Brachiocephalic) and fistula salvage for hemodialysis patients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm">
                06
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Laser & Stapler Proctology
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Day-care laser proctology (LHP for piles, FiLaC for fistula, fissure laser) and precision ZSR stapler circumcision.
              </p>
            </div>

          </div>

          {/* CTA Banner */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-[#0b192c]">
                Have a surgical concern or seeking a second clinical opinion?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Consult with Dr. Lowrence Richard Abraham in Bengaluru. Transparent diagnosis with practical, individualized next steps.
              </p>
            </div>
            <button
              onClick={() => openAppointmentModal()}
              className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm whitespace-nowrap shadow transition-all cursor-pointer"
            >
              Meet / Consult Dr. Lowrence
            </button>
          </div>

        </div>
      </section>

      {/* CERTIFICATE LIGHTBOX / ZOOM MODAL */}
      {isCertModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-3 sm:p-6"
          onClick={closeCertModal}
        >
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-[#0b192c] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-none">
                    Karnataka Medical Council Registration Certificate
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Dr. Lowrence Richard Abraham • Reg. No: 203592 • Date: 29 JUL 2026
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomScale(s => Math.max(0.7, s - 0.25))}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomScale(1)}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 cursor-pointer"
                  title="Reset Zoom"
                >
                  {Math.round(zoomScale * 100)}%
                </button>
                <button
                  onClick={() => setZoomScale(s => Math.min(2.5, s + 0.25))}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <a
                  href="/images/karnataka_medical_council_certificate.png"
                  download="KMC_Certificate_Dr_Lowrence_Richard_Abraham.png"
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors hidden sm:inline-flex"
                  title="Download Certificate"
                >
                  <Maximize2 className="w-4 h-4" />
                </a>
                <button
                  onClick={closeCertModal}
                  className="p-1.5 rounded-lg bg-red-500/20 hover:bg-red-500 text-red-200 hover:text-white transition-colors ml-2 cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable image canvas */}
            <div className="flex-1 overflow-auto p-4 sm:p-8 bg-slate-100 flex items-center justify-center">
              <div 
                className="transition-transform duration-200 origin-center shadow-2xl bg-white rounded-lg p-2 max-w-full"
                style={{ transform: `scale(${zoomScale})` }}
              >
                <img
                  src="/images/karnataka_medical_council_certificate.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('ChatGPT') === -1) {
                      target.src = '/images/ChatGPT Image Sep 18, 2026, 06_05_29 PM.png';
                    } else if (target.src.indexOf('kmc_') === -1) {
                      target.src = '/images/kmc_certificate.png';
                    }
                  }}
                  alt="Karnataka Medical Council Registration Certificate - Dr. Lowrence Richard Abraham"
                  className="max-h-[75vh] w-auto mx-auto object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Modal Footer Note */}
            <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-600 flex items-center justify-between shrink-0">
              <span className="font-semibold text-slate-700">Karnataka Medical Council • Reg. No. 203592</span>
              <span className="hidden sm:inline">Use Zoom In/Out or click outside to dismiss</span>
              <button
                onClick={closeCertModal}
                className="font-bold text-sky-700 hover:underline cursor-pointer"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

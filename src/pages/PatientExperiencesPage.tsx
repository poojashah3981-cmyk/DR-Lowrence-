import React from 'react';
import { 
  Play, 
  Clock, 
  ShieldCheck, 
  Film, 
  Info, 
  Calendar,
  AlertCircle 
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { PATIENT_EXPERIENCES } from '../data/patientExperiencesData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const PatientExperiencesPage: React.FC = () => {
  const { openVideoModal, openAppointmentModal } = useNavigation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'Patient Experiences' }]} />

      {/* Hero Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-sky-50/60 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-4">
          <span className="text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
            RECORDED CLINICAL EXPERIENCES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
            Hear it from our patients
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Real patient perspectives sharing their surgical consultations, clinical decision-making, and aftercare experience under Dr. Lowrence in Bengaluru.
          </p>
        </div>
      </section>

      {/* 3 Premium Video Placeholders Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PATIENT_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Video Placeholder Container with Poster & Play Button */}
                <div 
                  onClick={() => openVideoModal(exp)}
                  className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer flex items-center justify-center group/player"
                >
                  <img
                    src={exp.posterImage}
                    onError={(e) => {
                      e.currentTarget.src = '/images/Untitled design.png';
                    }}
                    alt={exp.topic}
                    className="w-full h-full object-cover opacity-60 group-hover/player:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover/player:bg-slate-950/20 transition-colors" />

                  {/* Pulsing play icon */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-sky-500/95 text-white flex items-center justify-center shadow-lg shadow-sky-500/40 group-hover/player:scale-110 group-hover/player:bg-sky-400 transition-all duration-200">
                    <Play className="w-6 h-6 ml-1 text-white fill-white" />
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{exp.duration}</span>
                  </div>

                  {/* Treatment tag */}
                  <div className="absolute top-3 left-3 bg-sky-950/90 border border-sky-800 text-sky-200 text-[10px] font-semibold px-2.5 py-0.5 rounded">
                    {exp.treatment}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                      {exp.title}
                    </div>
                    <h3 className="text-base font-bold text-[#0b192c] group-hover:text-sky-700 transition-colors">
                      {exp.topic}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Consent</span>
                    </span>

                    <button
                      onClick={() => openVideoModal(exp)}
                      className="font-bold text-sky-600 hover:text-sky-700 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Watch Experience</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Ethical Consent Disclaimer */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 text-slate-600 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Info className="w-5 h-5 text-sky-600 shrink-0" />
              <span>Ethical Notice on Patient Experiences</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              "Patient testimonials are published only with appropriate patient consent. Testimonials represent individual experiences and may not be representative of every patient."
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Medical outcomes, recovery durations, and anatomical suitability vary according to individual patient pathology and medical background. No clinical outcome is guaranteed without proper examination.
            </p>
          </div>

          {/* Consultation CTA */}
          <div className="bg-[#0b192c] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Discuss Your Case Directly with Dr. Lowrence
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Experience transparent clinical surgical evaluation in Bengaluru.
              </p>
            </div>
            <button
              onClick={() => openAppointmentModal()}
              className="px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow transition-all cursor-pointer whitespace-nowrap"
            >
              Book a Consultation
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ShieldCheck, 
  Activity, 
  Clock, 
  ArrowRight, 
  HelpCircle,
  Stethoscope,
  Sparkles
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { TreatmentItem } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface TreatmentDetailPageProps {
  treatment: TreatmentItem;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({ treatment }) => {
  const { openAppointmentModal, navigate } = useNavigation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs 
        items={[
          { label: 'Treatments', path: '/treatments' },
          { label: treatment.name }
        ]} 
      />

      {/* 1. Large Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white py-10 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>{treatment.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-tight">
                {treatment.name}
              </h1>

              <p className="text-base sm:text-lg font-medium text-sky-800 leading-snug">
                {treatment.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {treatment.shortDescription} At Dr. Lowrence Clinic in Bengaluru, we conduct thorough individual clinical assessments before advising any surgical or laser procedure.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id={`book-consultation-${treatment.slug}`}
                  onClick={() => openAppointmentModal(treatment.name)}
                  className="px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
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

              <div className="pt-3 flex items-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Doctor-Led Care</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Day-Care Options</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-sky-600" />
                  <span>Bengaluru Clinic</span>
                </span>
              </div>
            </div>

            {/* 2. Relevant Service Image (Clinical / surgical tech, NO DOCTOR PORTRAIT) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src={treatment.image}
                  onError={(e) => {
                    e.currentTarget.src = '/images/Untitled design.png';
                  }}
                  alt={treatment.imageAlt}
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-sm border border-slate-100 text-xs text-slate-700">
                  <span className="font-bold text-sky-700 block uppercase text-[10px]">
                    Clinical Assessment Standard
                  </span>
                  Treatment and investigations are recommended based on individual clinical evaluation and medical necessity.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Common Concerns & 4. Who May Benefit */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Common Concerns / Symptoms */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-sky-600" />
                <h2 className="text-xl font-bold text-[#0b192c]">
                  Common Symptoms & Concerns
                </h2>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Patients frequently consult Dr. Lowrence with the following clinical indications:
              </p>
              <ul className="space-y-3">
                {treatment.commonConcerns.map((concern, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who May Benefit */}
            <div className="bg-sky-50/40 rounded-2xl p-6 sm:p-8 border border-sky-100">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-[#0b192c]">
                  When Evaluation Is Considered
                </h2>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Who may benefit from clinical consultation and potential surgical or laser options:
              </p>
              <ul className="space-y-3">
                {treatment.whoMayBenefit.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Consultation Process */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
              STRUCTURED CLINICAL EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b192c] mt-1">
              What to Expect at Your Consultation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every consultation with Dr. Lowrence follows a comprehensive, patient-centered clinical workflow:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatment.consultationProcess.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2.5">
                <span className="text-xs font-bold text-sky-600 font-mono tracking-wider bg-sky-50 px-2 py-1 rounded inline-block">
                  STEP 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {step.step}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Treatment Options */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
              PROCEDURAL MODALITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b192c] mt-1">
              Treatment Options Available
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Techniques are selected strictly on medical indication, anatomical suitability, and patient preference:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatment.treatmentOptions.map((opt, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-colors shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#0b192c]">
                  {opt.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {opt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Recovery & Aftercare */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
                POST-PROCEDURE TIMELINE
              </span>
              <h2 className="text-2xl font-bold text-[#0b192c] mt-1">
                {treatment.recoveryInfo.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatment.recoveryInfo.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs for this treatment */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b192c]">
              Frequently Asked Questions: {treatment.name}
            </h2>
          </div>

          <div className="space-y-3">
            {treatment.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#0b192c] hover:text-sky-700 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-sky-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Medical Disclaimer & 10. Strong CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Medical disclaimer */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>Medical Disclaimer: </strong>
            {treatment.disclaimer || 'Information on this website is for general educational purposes and does not replace an individual medical consultation, diagnosis or treatment plan.'}
          </div>

          {/* CTA Box */}
          <div className="bg-[#0b192c] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ready to discuss your concern with Dr. Lowrence?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Consultations available in Bengaluru by prior appointment. Transparent evaluation and practical surgical planning.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                id="treatment-detail-book-btn"
                onClick={() => openAppointmentModal(treatment.name)}
                className="px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Book a Consultation
              </button>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="tel:+917037306519"
                  className="px-4 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
                  title="Call Primary: +91 70373 06519"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>+91 70373 06519</span>
                </a>
                <a
                  href="tel:+916397204315"
                  className="px-3.5 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition-all flex items-center gap-1.5"
                  title="Call: +91 63972 04315"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>+91 63972 04315</span>
                </a>
                <a
                  href="tel:+919113869966"
                  className="px-3.5 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition-all flex items-center gap-1.5"
                  title="Call: +91 91138 69966"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>+91 91138 69966</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

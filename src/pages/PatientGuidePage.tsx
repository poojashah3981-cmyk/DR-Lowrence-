import React, { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  FileText,
  HeartPulse,
  Droplets,
  Activity
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const PatientGuidePage: React.FC = () => {
  const { openAppointmentModal, navigate } = useNavigation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const guideFaqs = [
    {
      q: 'How long does the ZSR circumcision procedure take?',
      a: 'The actual device placement and stapling process typically takes 15 to 25 minutes once local anaesthesia is administered. You will spend a brief period in observation before being safely discharged home the same day.'
    },
    {
      q: 'What should I wear on the day of the procedure?',
      a: 'Wear loose-fitting, comfortable cotton trousers or track pants and snug-fitting cotton underwear that will hold the protective compression dressing securely without excessive friction.'
    },
    {
      q: 'How do the silicone ring and staples come off?',
      a: 'The silicone ring acts as a clean barrier while the underlying tissues heal. As the surgical wound edges knit together, the tiny titanium staples and silicone ring gradually dislodge and fall off naturally, typically between day 10 and day 21.'
    },
    {
      q: 'Can I shower with the dressing on?',
      a: 'The initial dressing must remain dry for the first 24 to 48 hours until you return for dressing inspection. After that, you will receive clear instructions on gentle lukewarm water washes and prescribed antiseptic ointment application.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'Patient Guide' }]} />

      {/* Hero Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-sky-50/60 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-4">
          <span className="text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
            CLINICAL EDUCATION & PREPARATION
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
            Patient Guide
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Clear, honest medical guidance on surgical preparation, what happens during consultation, recovery protocols, and when to seek advice.
          </p>
        </div>
      </section>

      {/* Main Feature: ZSR Circumcision Guide */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main feature banner */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0b192c] to-[#0f2744] text-white p-8 sm:p-12 shadow-xl border border-slate-800">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold tracking-wider text-sky-400 uppercase">
                FEATURED CLINICAL GUIDE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                ZSR Circumcision
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                A patient-friendly guide explaining the procedure, who may benefit, what the consultation involves, recovery expectations and when to seek medical advice.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-sky-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Stapler-Assisted Technology</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Day-Care Procedure</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <HeartPulse className="w-4 h-4 text-sky-400" />
                  <span>Local Anaesthetic Block</span>
                </span>
              </div>
            </div>
          </div>

          {/* Section: What happens at consultation? */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b192c]">
                What happens at consultation?
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              "Your symptoms, medical history and examination findings are reviewed. If ZSR circumcision is suitable, the procedure and alternatives are explained before you make a decision."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-sky-700 uppercase">1. Anatomical Sizing</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Precise measurement with specialized medical callipers to determine the exact diameter of the stapler bell for a tailored fit.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-sky-700 uppercase">2. Infection Clearance</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screening for active fungal or bacterial balanitis; any acute infection is treated first to guarantee sterile healing conditions.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-sky-700 uppercase">3. Informed Consent</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transparent discussion of local anaesthesia, post-op bandage care, work resumption timelines, and answering all personal questions.
                </p>
              </div>
            </div>
          </div>

          {/* Section: What should you expect? */}
          <div className="bg-sky-50/40 rounded-2xl p-8 border border-sky-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-600 text-white">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b192c]">
                What should you expect?
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              "Recovery varies between individuals. You will receive specific instructions about wound care, activity, hygiene, medications and follow-up."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <div className="text-xs sm:text-sm text-slate-700 space-y-0.5">
                  <strong className="block text-slate-900">Days 1 to 3</strong>
                  Compression bandage remains in place. Rest at home, manage mild soreness with prescribed analgesics, avoid strenuous movement.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <div className="text-xs sm:text-sm text-slate-700 space-y-0.5">
                  <strong className="block text-slate-900">Days 3 to 7</strong>
                  First dressing check at clinic. Return to sedentary desk work or college. Begin gentle hygiene cleanses as instructed.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <div className="text-xs sm:text-sm text-slate-700 space-y-0.5">
                  <strong className="block text-slate-900">Days 10 to 21</strong>
                  The silicone ring and staples spontaneously detach one by one during daily hygiene washing. A clean, uniform line emerges.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <div className="text-xs sm:text-sm text-slate-700 space-y-0.5">
                  <strong className="block text-slate-900">Weeks 4 to 6</strong>
                  Full biological tissue strengthening. Resume sexual activity, gym workouts, swimming, and heavy lifting after scheduled follow-up.
                </div>
              </div>
            </div>
          </div>

          {/* When to seek immediate advice */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>When to Contact the Clinic Promptly</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              While serious complications with stapler circumcision are rare, contact Dr. Lowrence’s desk immediately if you experience:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-900 list-disc pl-5">
              <li>Significant active bleeding soaking through dressings</li>
              <li>Sudden high fever (&gt;100.4°F) or persistent chills</li>
              <li>Severe progressive pain not relieved by medications</li>
              <li>Inability to pass urine comfortably after 6 hours</li>
            </ul>
          </div>

          {/* Guide FAQs */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-[#0b192c]">
              Frequently Asked Questions About ZSR Circumcision
            </h3>

            <div className="space-y-3">
              {guideFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="rounded-xl border border-slate-200 overflow-hidden bg-white">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm text-[#0b192c] hover:text-sky-700 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-sky-600 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-[#0b192c] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                Consult Dr. Lowrence for Clinical Evaluation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Understand whether ZSR stapler circumcision is the right choice for your clinical anatomy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => openAppointmentModal('ZSR Circumcision')}
                className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow transition-all cursor-pointer whitespace-nowrap"
              >
                Book a Consultation
              </button>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <a
                  href="tel:+917037306519"
                  className="px-3 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
                  title="Call: +91 70373 06519"
                >
                  +91 70373 06519
                </a>
                <a
                  href="tel:+916397204315"
                  className="px-3 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition-colors"
                  title="Call: +91 63972 04315"
                >
                  +91 63972 04315
                </a>
                <a
                  href="tel:+919113869966"
                  className="px-3 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition-colors"
                  title="Call: +91 91138 69966"
                >
                  +91 91138 69966
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

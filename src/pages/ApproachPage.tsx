import React from 'react';
import { 
  Calendar, 
  Phone, 
  CheckCircle, 
  ShieldAlert, 
  MessageSquare, 
  ClipboardCheck, 
  FileText, 
  Compass,
  ArrowRight,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ApproachPage: React.FC = () => {
  const { openAppointmentModal } = useNavigation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'Our Approach' }]} />

      {/* Hero Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-sky-50/60 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-4">
          <span className="text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
            OUR CLINICAL ETHOS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
            Healthcare without the hassle
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We understand that a medical problem can already be stressful. Our aim is to make the process easier: one doctor-led journey, clear communication and practical next steps.
          </p>
        </div>
      </section>

      {/* Highlight Box: "We do not promise 'no tests.'" */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 bg-sky-50/70 border-2 border-sky-200/80 shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-600 text-white shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0b192c]">
                  We do not promise “no tests.”
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When an investigation is genuinely needed, we explain why it is being advised. The goal is appropriate care — not unnecessary procedures.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  Modern ethical surgery avoids two extremes: we neither subject you to indiscriminate test bundles, nor do we compromise clinical safety by skipping critical pre-operative anatomical mapping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Visual Process */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
              THE PATIENT JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c]">
              Four Clear Steps from Concern to Recovery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold font-mono text-sky-600 bg-sky-50 px-2.5 py-1 rounded">
                    01
                  </span>
                  <MessageSquare className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0b192c]">
                  Listen
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Understand your concern and medical history. We take time to listen to your symptoms, previous treatments, and individual concerns in complete confidence.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                No rushed appointments
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold font-mono text-sky-600 bg-sky-50 px-2.5 py-1 rounded">
                    02
                  </span>
                  <ClipboardCheck className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0b192c]">
                  Assess
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Perform the examination and investigations that are clinically indicated. Only required tests are recommended to reach an accurate anatomical diagnosis.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Targeted investigations only
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold font-mono text-sky-600 bg-sky-50 px-2.5 py-1 rounded">
                    03
                  </span>
                  <FileText className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0b192c]">
                  Explain
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discuss the diagnosis, options, expected recovery and costs where applicable. You receive an honest breakdown of conservative vs. surgical options.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Transparent decision making
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold font-mono text-sky-600 bg-sky-50 px-2.5 py-1 rounded">
                    04
                  </span>
                  <Compass className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0b192c]">
                  Guide
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Coordinate treatment and follow-up so you know what happens next. Clear day-care planning, pre-op guidance, aftercare advice, and direct review.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Dedicated recovery support
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Practical Guarantees */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-[#0b192c]">
              What You Can Rely On
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our clinical practice in Bengaluru adheres to strict professional standards:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Direct Doctor Consultation</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  You are evaluated directly by Dr. Lowrence, not junior coordinators or marketing sales staff.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Conservative Options First</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  When a condition can be safely managed with dietary and medical interventions, surgery is not pushed.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Clear Financial Understanding</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Detailed advance explanation of procedure estimates, hospital charges, and insurance paperwork.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Continuity of Follow-up</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Structured post-procedure wound inspection and review to ensure complete clinical resolution.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => openAppointmentModal()}
              className="px-8 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
            >
              Book a Consultation with Dr. Lowrence
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

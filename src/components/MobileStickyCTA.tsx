import React, { useState } from 'react';
import { Phone, Calendar, MessageSquare, ChevronUp, ChevronDown, X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const MobileStickyCTA: React.FC = () => {
  const { openAppointmentModal } = useNavigation();
  const [showNumbersSheet, setShowNumbersSheet] = useState(false);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      {/* Quick Phone Numbers Strip */}
      <div className="flex items-center justify-between gap-1 pb-1.5 mb-1.5 border-b border-slate-100 text-[10px] text-slate-600 font-medium">
        <span className="flex items-center gap-1 text-slate-500 shrink-0">
          <Phone className="w-3 h-3 text-sky-600" />
          <span>Call:</span>
        </span>
        <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <a href="tel:+917037306519" className="text-sky-700 font-bold hover:underline" title="Call Primary">
            +91 70373 06519
          </a>
          <span className="text-slate-300">•</span>
          <a href="tel:+916397204315" className="text-sky-700 font-semibold hover:underline" title="Call Direct">
            +91 63972 04315
          </a>
          <span className="text-slate-300">•</span>
          <a href="tel:+919113869966" className="text-sky-700 font-semibold hover:underline" title="Call Direct">
            +91 91138 69966
          </a>
        </div>
      </div>

      {/* Expandable Numbers Panel */}
      {showNumbersSheet && (
        <div className="mb-2 p-3 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-800 space-y-2 text-xs">
          <div className="flex items-center justify-between pb-1 border-b border-slate-800">
            <span className="font-semibold text-slate-300 text-[11px] uppercase tracking-wider">
              Clinic Contact Numbers
            </span>
            <button 
              onClick={() => setShowNumbersSheet(false)}
              className="p-1 text-slate-400 hover:text-white"
              aria-label="Close numbers sheet"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-1.5">
            <a
              href="tel:+917037306519"
              className="flex items-center justify-between py-1.5 px-2.5 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 font-semibold"
            >
              <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> +91 70373 06519</span>
              <span className="text-[10px] text-sky-300 uppercase font-bold">Primary</span>
            </a>
            <a
              href="tel:+916397204315"
              className="flex items-center justify-between py-1.5 px-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium"
            >
              <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-sky-400" /> +91 63972 04315</span>
              <span className="text-[10px] text-slate-400 uppercase">Direct</span>
            </a>
            <a
              href="tel:+919113869966"
              className="flex items-center justify-between py-1.5 px-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium"
            >
              <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-sky-400" /> +91 91138 69966</span>
              <span className="text-[10px] text-slate-400 uppercase">Direct</span>
            </a>
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto grid grid-cols-12 gap-2 items-center">
        <div className="col-span-4 flex items-stretch rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
          <a
            href="tel:+917037306519"
            className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-slate-700 active:bg-slate-100 transition-colors"
            title="Call Primary Clinic: +91 70373 06519"
          >
            <Phone className="w-4 h-4 text-sky-600 mb-0.5" />
            <span className="text-[10px] font-semibold">Call Now</span>
          </a>
          <button
            onClick={() => setShowNumbersSheet(!showNumbersSheet)}
            className="px-1.5 bg-slate-100 border-l border-slate-200 text-slate-500 hover:text-slate-800 active:bg-slate-200 flex items-center justify-center"
            title="View all 3 numbers"
            aria-label="Toggle contact numbers"
          >
            {showNumbersSheet ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </button>
        </div>

        <a
          href="https://wa.me/917037306519?text=Hello%20Dr.%20Lowrence%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20surgical%20consultation."
          target="_blank"
          rel="noreferrer"
          className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 active:bg-emerald-100 transition-colors"
          title="WhatsApp Clinic"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        <button
          id="mobile-sticky-book-btn"
          onClick={() => openAppointmentModal()}
          className="col-span-5 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-xs shadow-sm shadow-sky-600/30 transition-all cursor-pointer whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Book Consult</span>
        </button>
      </div>
    </div>
  );
};

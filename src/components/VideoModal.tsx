import React from 'react';
import { X, Play, Clock, ShieldCheck, Film } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const VideoModal: React.FC = () => {
  const { activeVideo, closeVideoModal, openAppointmentModal } = useNavigation();

  if (!activeVideo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
      >
        {/* Header */}
        <div className="px-5 py-4 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-white">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-sky-400" />
            <h3 id="video-title" className="text-sm font-semibold text-slate-100 truncate">
              {activeVideo.title} • {activeVideo.topic}
            </h3>
          </div>
          <button
            onClick={closeVideoModal}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player / Interactive Placeholder Container */}
        <div className="relative aspect-video bg-black flex flex-col items-center justify-center text-center p-6 group">
          <img
            src={activeVideo.posterImage}
            alt={activeVideo.topic}
            className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Interactive Player Mock / Placeholder state */}
          <div className="relative z-10 max-w-md mx-auto space-y-3">
            <div className="w-16 h-16 rounded-full bg-sky-500/90 text-white flex items-center justify-center mx-auto shadow-lg shadow-sky-500/30 group-hover:bg-sky-400 transition-colors">
              <Play className="w-7 h-7 ml-1" />
            </div>

            <div className="space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-950 text-sky-300 border border-sky-800">
                {activeVideo.treatment}
              </span>
              <h4 className="text-lg font-bold text-white">
                {activeVideo.topic}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed px-4">
                {activeVideo.summary}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Recorded Experience Duration: {activeVideo.duration}</span>
              </span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Consent Verified</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer & Consent Notice */}
        <div className="p-5 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-[11px] text-slate-400 max-w-md leading-relaxed text-center sm:text-left">
            Patient testimonials are published only with appropriate patient consent. Testimonials represent individual experiences and may not be representative of every patient.
          </p>
          <button
            onClick={() => {
              closeVideoModal();
              openAppointmentModal(activeVideo.treatment);
            }}
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs whitespace-nowrap transition-colors"
          >
            Consult on This Treatment
          </button>
        </div>
      </div>
    </div>
  );
};

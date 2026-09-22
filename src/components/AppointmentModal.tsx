import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  User, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { TREATMENTS } from '../data/treatmentsData';
import { AppointmentFormData } from '../types';

export const AppointmentModal: React.FC = () => {
  const { isAppointmentModalOpen, closeAppointmentModal, selectedTreatmentForModal } = useNavigation();

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    treatment: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedTreatmentForModal) {
      setFormData((prev) => ({ ...prev, treatment: selectedTreatmentForModal }));
    }
  }, [selectedTreatmentForModal]);

  if (!isAppointmentModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setErrorMsg('Please enter your full name and contact phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setRefId(`DLC-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 700);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      treatment: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 01:00 PM)',
      message: ''
    });
    closeAppointmentModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="bg-[#0b192c] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Dr. Lowrence Richard Abraham Clinic
            </div>
            <h3 id="modal-title" className="text-xl font-bold tracking-tight text-white mt-0.5">
              Book a Surgical Consultation
            </h3>
            <p className="text-xs text-slate-300">
              Bengaluru, Karnataka • Call: <a href="tel:+917037306519" className="text-sky-300 hover:underline font-semibold">+91 70373 06519</a> / <a href="tel:+916397204315" className="text-sky-300 hover:underline font-semibold">+91 63972 04315</a> / <a href="tel:+919113869966" className="text-sky-300 hover:underline font-semibold">+91 91138 69966</a>
            </p>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Consultation Request Received
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your consultation request has been recorded.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-sky-700">{refId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Consultant:</span>
                  <span className="font-semibold text-slate-900">Dr. Lowrence Richard Abraham</span>
                </div>
                {formData.treatment && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Speciality / Concern:</span>
                    <span className="font-medium text-slate-800">{formData.treatment}</span>
                  </div>
                )}
                {formData.preferredDate && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Requested Date:</span>
                    <span className="font-medium text-slate-800">{formData.preferredDate}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-medium text-slate-800">Bengaluru, Karnataka</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Our surgical desk will contact you at <strong>{formData.phoneNumber}</strong> to confirm the exact consultation time and provide pre-consultation guidelines.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                <a
                  href="tel:+917037306519"
                  className="px-3.5 py-2 rounded-lg bg-sky-600 text-white font-medium text-xs hover:bg-sky-700 flex items-center gap-1.5"
                  title="Call Primary Line: +91 70373 06519"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Primary (+91 70373 06519)</span>
                </a>
                <a
                  href="tel:+916397204315"
                  className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-50 flex items-center gap-1"
                  title="Call: +91 63972 04315"
                >
                  <Phone className="w-3 h-3 text-sky-600" />
                  <span>+91 63972 04315</span>
                </a>
                <a
                  href="tel:+919113869966"
                  className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-50 flex items-center gap-1"
                  title="Call: +91 91138 69966"
                >
                  <Phone className="w-3 h-3 text-sky-600" />
                  <span>+91 91138 69966</span>
                </a>
                <button
                  onClick={resetForm}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium text-xs hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                {/* Treatment / Concern */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Treatment / Concern
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white text-slate-700"
                    >
                      <option value="">Select a surgical speciality...</option>
                      {TREATMENTS.map((t) => (
                        <option key={t.slug} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                      <option value="General Surgical Opinion">General Surgical Opinion / Second Opinion</option>
                      <option value="Other Surgical Concern">Other Surgical Concern</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white text-slate-700"
                    >
                      <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                      <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                      <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Medical Concern or Prior Diagnosis (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any key symptoms, prior test findings, or questions you have..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Registering Consultation...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Request a Consultation</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center leading-normal">
                Strict patient privacy maintained. No unsolicited spam. In-person clinical assessment conducted in Bengaluru, Karnataka.
              </p>
            </form>
          )}

          {/* Quick contact strip */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Bengaluru, Karnataka</span>
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-500 font-medium">Call:</span>
              <a 
                href="tel:+917037306519" 
                className="text-sky-600 font-semibold hover:underline flex items-center gap-1"
                title="Call: +91 70373 06519"
              >
                <Phone className="w-3 h-3" />
                <span>+91 70373 06519</span>
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="tel:+916397204315" 
                className="text-sky-600 font-medium hover:underline"
                title="Call: +91 63972 04315"
              >
                +91 63972 04315
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="tel:+919113869966" 
                className="text-sky-600 font-medium hover:underline"
                title="Call: +91 91138 69966"
              >
                +91 91138 69966
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="https://wa.me/917037306519" 
                target="_blank" 
                rel="noreferrer" 
                className="text-emerald-600 font-semibold hover:underline flex items-center gap-1 ml-1"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

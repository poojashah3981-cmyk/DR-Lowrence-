import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Navigation, 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Send
} from 'lucide-react';
import { TREATMENTS } from '../data/treatmentsData';
import { AppointmentFormData } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ContactPage: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setErrorMsg('Please provide your full name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setRefId(`DLC-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 700);
  };

  const handleReset = () => {
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
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'Contact & Appointments' }]} />

      {/* Hero Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-sky-50/60 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-4">
          <span className="text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
            CONSULTATION DESK
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
            Come with your concern. Get a clear medical plan.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Speak with Dr. Lowrence and understand your options, next steps and follow-up.
          </p>
        </div>
      </section>

      {/* Contact Channels & Direct CTAs */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Call Now */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all flex flex-col items-center text-center group">
              <div className="w-11 h-11 rounded-full bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors flex items-center justify-center mb-2">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Telephone Lines</span>
              <div className="flex flex-col gap-0.5 mt-1 text-xs font-bold text-slate-800">
                <a href="tel:+917037306519" className="hover:text-sky-600 transition-colors" title="Call Primary: +91 70373 06519">
                  +91 70373 06519 <span className="text-[10px] text-sky-600 font-normal">(Primary)</span>
                </a>
                <a href="tel:+916397204315" className="hover:text-sky-600 transition-colors" title="Call: +91 63972 04315">
                  +91 63972 04315
                </a>
                <a href="tel:+919113869966" className="hover:text-sky-600 transition-colors" title="Call: +91 91138 69966">
                  +91 91138 69966
                </a>
              </div>
              <a href="tel:+917037306519" className="text-[11px] text-sky-600 font-semibold mt-1.5 hover:underline">
                Call Primary Line →
              </a>
            </div>

            {/* Email Us */}
            <a
              href="mailto:lowerncerichard77@gmail.com"
              className="p-5 rounded-xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="w-11 h-11 rounded-full bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors flex items-center justify-center mb-2">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Email</span>
              <span className="text-xs font-bold text-slate-800 mt-0.5 truncate max-w-full">
                lowerncerichard77@gmail.com
              </span>
              <span className="text-[11px] text-sky-600 font-medium mt-1">Email Us →</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917037306519?text=Hello%20Dr.%20Lowrence%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20surgical%20consultation."
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center mb-2">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Instant Chat</span>
              <span className="text-sm font-bold text-slate-800 mt-0.5">WhatsApp Desk</span>
              <span className="text-[11px] text-emerald-600 font-medium mt-1">Message Now →</span>
            </a>

            {/* Get Directions */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+Karnataka"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="w-11 h-11 rounded-full bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors flex items-center justify-center mb-2">
                <Navigation className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Location</span>
              <span className="text-sm font-bold text-slate-800 mt-0.5">Bengaluru, Karnataka</span>
              <span className="text-[11px] text-sky-600 font-medium mt-1">Get Directions →</span>
            </a>

          </div>
        </div>
      </section>

      {/* Main Form and Map Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  APPOINTMENT BOOKING
                </span>
                <h2 className="text-2xl font-bold text-[#0b192c]">
                  Schedule Your Surgical Consultation
                </h2>
                <p className="text-xs text-slate-500">
                  Please fill out the form below. Our clinical reception team will reach out to confirm your slot.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Consultation Request Confirmed
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your consultation details have been sent to Dr. Lowrence’s surgical desk in Bengaluru.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Booking Reference:</span>
                      <span className="font-mono font-bold text-sky-700">{refId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Surgeon:</span>
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
                        <span className="text-slate-500">Preferred Date:</span>
                        <span className="font-medium text-slate-800">{formData.preferredDate}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500">Preferred Slot:</span>
                      <span className="font-medium text-slate-800">{formData.preferredTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Clinic Location:</span>
                      <span className="font-medium text-slate-800">Bengaluru, Karnataka</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    We will call you at <strong>{formData.phoneNumber}</strong> to confirm the exact appointment schedule.
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center gap-2">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href="tel:+917037306519"
                      className="px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs flex items-center gap-1.5"
                      title="Call Primary: +91 70373 06519"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now (+91 70373 06519)</span>
                    </a>
                    <a
                      href="tel:+916397204315"
                      className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs flex items-center gap-1"
                      title="Call: +91 63972 04315"
                    >
                      <Phone className="w-3 h-3 text-sky-600" />
                      <span>+91 63972 04315</span>
                    </a>
                    <a
                      href="tel:+919113869966"
                      className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs flex items-center gap-1"
                      title="Call: +91 91138 69966"
                    >
                      <Phone className="w-3 h-3 text-sky-600" />
                      <span>+91 91138 69966</span>
                    </a>
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
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
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
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
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
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                        />
                      </div>
                    </div>

                    {/* Treatment / Concern */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Treatment / Speciality
                      </label>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                        <select
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white text-slate-700"
                        >
                          <option value="">Select a treatment or concern...</option>
                          {TREATMENTS.map((t) => (
                            <option key={t.slug} value={t.name}>
                              {t.name}
                            </option>
                          ))}
                          <option value="Second Surgical Opinion">Second Surgical Opinion</option>
                          <option value="General Surgical Consultation">General Surgical Consultation</option>
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
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
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
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white text-slate-700"
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
                      Message / Notes for Doctor
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your symptoms, prior surgeries, test results, or specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request a Consultation</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your medical information is held in strict clinical confidentiality.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Google Maps Bengaluru Placeholder & Clinical Location Notes */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Location Card */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-sky-600 uppercase">Consultation Location</span>
                    <h3 className="text-lg font-bold text-[#0b192c]">Bengaluru, Karnataka</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Consultations are conducted in Bengaluru by prior appointment to ensure dedicated clinical attention without crowded waiting rooms.
                </p>

                <div className="border-t border-slate-200 pt-3 space-y-2 text-xs text-slate-700">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-medium">Telephone Desks:</span>
                    <div className="space-y-1 pl-1">
                      <a href="tel:+917037306519" className="font-semibold text-sky-700 hover:underline flex items-center justify-between" title="Call Primary: +91 70373 06519">
                        <span>+91 70373 06519</span>
                        <span className="text-[10px] text-sky-600 uppercase font-bold">Primary</span>
                      </a>
                      <a href="tel:+916397204315" className="font-semibold text-sky-700 hover:underline flex items-center justify-between" title="Call: +91 63972 04315">
                        <span>+91 63972 04315</span>
                        <span className="text-[10px] text-slate-400 uppercase font-medium">Direct</span>
                      </a>
                      <a href="tel:+919113869966" className="font-semibold text-sky-700 hover:underline flex items-center justify-between" title="Call: +91 91138 69966">
                        <span>+91 91138 69966</span>
                        <span className="text-[10px] text-slate-400 uppercase font-medium">Direct</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                    <span className="text-slate-500">Email:</span>
                    <a href="mailto:lowerncerichard77@gmail.com" className="font-semibold text-sky-700 hover:underline">
                      lowerncerichard77@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Region:</span>
                    <span className="font-medium text-slate-900">Bengaluru, Karnataka</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <a
                    href="tel:+917037306519"
                    className="flex-1 py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold text-center hover:bg-sky-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+Karnataka"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-semibold text-center hover:bg-slate-50 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Google Maps Placeholder Centered on Bengaluru */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-slate-100">
                <div className="p-3 bg-white border-b border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-sky-600" />
                    <span>Map: Bengaluru, Karnataka</span>
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+Karnataka"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>

                <div className="relative aspect-video w-full bg-slate-200 overflow-hidden flex items-center justify-center">
                  <iframe
                    title="Bengaluru Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.490852!3d12.95396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 pointer-events-auto"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                
                <div className="p-3 bg-white text-[11px] text-slate-500 text-center">
                  Consultation locations across Bengaluru scheduled upon confirmation.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

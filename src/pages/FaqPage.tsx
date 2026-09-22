import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  Calendar, 
  Phone, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { FAQS_DATA } from '../data/faqsData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const FaqPage: React.FC = () => {
  const { openAppointmentModal } = useNavigation();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['tests-needed', 'consult-location']);

  const categories = [
    'All',
    'Investigations & Tests',
    'Treatments',
    'Appointments',
    'Recovery & Care',
    'General'
  ];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    if (openFaqIds.includes(id)) {
      setOpenFaqIds(openFaqIds.filter((item) => item !== id));
    } else {
      setOpenFaqIds([...openFaqIds, id]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Hero Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-sky-50/60 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-4">
          <span className="text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
            QUESTIONS & ANSWERS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Clear, transparent answers about surgical consultations, diagnostic investigations, laser procedures, and consultation in Bengaluru.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search questions (e.g. tests, same day, laser, Bengaluru)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Category Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center text-slate-500 space-y-2">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold">No questions matched your search criteria.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="text-xs text-sky-600 underline font-semibold"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-sky-300 shadow-sm bg-white' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#0b192c] hover:text-sky-700 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-sky-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}

          {/* Quick Help Card */}
          <div className="mt-12 bg-sky-50 rounded-2xl p-6 sm:p-8 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#0b192c]">
                Have a specific clinical question not covered here?
              </h3>
              <p className="text-xs text-slate-600">
                Contact Dr. Lowrence’s consultation desk directly for personal guidance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => openAppointmentModal()}
                className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow transition-all cursor-pointer whitespace-nowrap"
              >
                Book a Consultation
              </button>
              <a
                href="tel:+917037306519"
                className="px-3 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-white text-xs font-semibold whitespace-nowrap transition-colors"
                title="Call Primary: +91 70373 06519"
              >
                +91 70373 06519
              </a>
              <a
                href="tel:+916397204315"
                className="px-3 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-white text-xs font-medium whitespace-nowrap transition-colors"
                title="Call: +91 63972 04315"
              >
                +91 63972 04315
              </a>
              <a
                href="tel:+919113869966"
                className="px-3 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-white text-xs font-medium whitespace-nowrap transition-colors"
                title="Call: +91 91138 69966"
              >
                +91 91138 69966
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  Filter, 
  CheckCircle, 
  Calendar, 
  ShieldCheck, 
  Activity, 
  Info 
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { TREATMENTS } from '../data/treatmentsData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const TreatmentsPage: React.FC = () => {
  const { navigate, openAppointmentModal } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Minimally Invasive & Laser',
    'General Surgery',
    'Urology & Renal',
    'Wound & Aesthetic'
  ];

  const filteredTreatments = TREATMENTS.filter((t) => {
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch = 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'Treatments & Specialities' }]} />

      {/* Header section */}
      <section className="py-10 lg:py-16 bg-gradient-to-b from-sky-50/60 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
            COMPREHENSIVE SURGICAL SERVICES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight mt-3">
            Surgical & Minimally Invasive Care
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            Specialized surgical care covering day-care laser proctology, modern stapler circumcision, laparoscopic abdominal repairs, endourology, and advanced wound management in Bengaluru.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 border-b border-slate-100 bg-slate-50/50 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search treatments or symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-12 lg:py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredTreatments.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Info className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-700">No treatments matched your search</h3>
              <p className="text-xs text-slate-500">Try clearing filters or search terms.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="text-xs font-bold text-sky-600 underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTreatments.map((treatment) => (
                <div
                  key={treatment.slug}
                  onClick={() => navigate(`/treatments/${treatment.slug}`)}
                  className="group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={treatment.image}
                      onError={(e) => {
                        e.currentTarget.src = '/images/Untitled design.png';
                      }}
                      alt={treatment.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/70 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
                    <span className="absolute top-3 left-3 text-[11px] font-semibold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-0.5 rounded">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h2 className="text-lg font-bold text-[#0b192c] group-hover:text-sky-600 transition-colors leading-snug">
                        {treatment.name}
                      </h2>
                      <p className="text-xs font-medium text-sky-700 mt-1 line-clamp-1">
                        {treatment.tagline}
                      </p>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                        {treatment.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-sky-600 group-hover:text-sky-700 flex items-center gap-1">
                        View Treatment <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Detailed Guide
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Under-grid Clinical note */}
          <div className="mt-14 p-6 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-sky-600 shrink-0" />
              <span>
                <strong>Evidence-Based Surgical Decision Making: </strong>
                All procedures, whether laser, laparoscopic or conventional, are selected after thorough clinical history and physical examination.
              </span>
            </div>
            <button
              onClick={() => openAppointmentModal()}
              className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold whitespace-nowrap shadow-sm text-xs cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

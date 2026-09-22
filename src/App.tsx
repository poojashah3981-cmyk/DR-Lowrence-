import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { VideoModal } from './components/VideoModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { ApproachPage } from './pages/ApproachPage';
import { PatientGuidePage } from './pages/PatientGuidePage';
import { PatientExperiencesPage } from './pages/PatientExperiencesPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

import { TREATMENTS } from './data/treatmentsData';

const MainAppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  // Scroll to top and update document title on route transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    let pageTitle = 'Dr. Lowrence Richard Abraham | Consultant General Surgeon, Bengaluru';
    
    if (currentPath === '/about') {
      pageTitle = 'About Dr. Lowrence Richard Abraham | Consultant General Surgeon';
    } else if (currentPath === '/treatments') {
      pageTitle = 'Surgical Treatments & Specialities | Dr. Lowrence Clinic Bengaluru';
    } else if (currentPath.startsWith('/treatments/')) {
      const slug = currentPath.replace('/treatments/', '');
      const t = TREATMENTS.find((item) => item.slug === slug);
      if (t) {
        pageTitle = `${t.name} in Bengaluru | Dr. Lowrence Richard Abraham`;
      }
    } else if (currentPath === '/approach') {
      pageTitle = 'Our Approach — Healthcare Without The Hassle | Dr. Lowrence';
    } else if (currentPath === '/patient-guide') {
      pageTitle = 'Patient Guide — ZSR Circumcision & Recovery | Dr. Lowrence';
    } else if (currentPath === '/patient-experiences') {
      pageTitle = 'Patient Experiences & Video Testimonials | Dr. Lowrence';
    } else if (currentPath === '/faqs') {
      pageTitle = 'Frequently Asked Questions | Dr. Lowrence Clinic Bengaluru';
    } else if (currentPath === '/contact') {
      pageTitle = 'Book a Consultation | Dr. Lowrence Richard Abraham, Bengaluru';
    }

    document.title = pageTitle;
  }, [currentPath]);

  // Page router
  const renderCurrentPage = () => {
    // Individual Treatment Detail Page
    if (currentPath.startsWith('/treatments/')) {
      const slug = currentPath.replace('/treatments/', '');
      const treatment = TREATMENTS.find((t) => t.slug === slug);
      if (treatment) {
        return <TreatmentDetailPage treatment={treatment} />;
      }
      return <TreatmentsPage />;
    }

    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/treatments':
        return <TreatmentsPage />;
      case '/approach':
        return <ApproachPage />;
      case '/patient-guide':
        return <PatientGuidePage />;
      case '/patient-experiences':
        return <PatientExperiencesPage />;
      case '/faqs':
        return <FaqPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-sky-100 selection:text-sky-900 pb-16 md:pb-0">
      {/* Sticky Header with Navigation and Consultation CTA */}
      <Header />

      {/* Main Dynamic View */}
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Trustworthy Dark Navy Footer */}
      <Footer />

      {/* Floating Appointment Booking Modal */}
      <AppointmentModal />

      {/* Patient Experience Video Modal */}
      <VideoModal />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCTA />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <MainAppContent />
    </NavigationProvider>
  );
}

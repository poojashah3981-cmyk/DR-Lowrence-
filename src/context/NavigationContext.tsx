import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PatientExperience } from '../types';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isAppointmentModalOpen: boolean;
  openAppointmentModal: (initialTreatment?: string) => void;
  closeAppointmentModal: () => void;
  selectedTreatmentForModal: string;
  activeVideo: PatientExperience | null;
  openVideoModal: (video: PatientExperience) => void;
  closeVideoModal: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedTreatmentForModal, setSelectedTreatmentForModal] = useState('');
  const [activeVideo, setActiveVideo] = useState<PatientExperience | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAppointmentModal = (initialTreatment?: string) => {
    if (initialTreatment) {
      setSelectedTreatmentForModal(initialTreatment);
    }
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  const openVideoModal = (video: PatientExperience) => {
    setActiveVideo(video);
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        isAppointmentModalOpen,
        openAppointmentModal,
        closeAppointmentModal,
        selectedTreatmentForModal,
        activeVideo,
        openVideoModal,
        closeVideoModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

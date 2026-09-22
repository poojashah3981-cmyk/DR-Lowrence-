export interface TreatmentItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  category: 'General Surgery' | 'Minimally Invasive & Laser' | 'Urology & Renal' | 'Wound & Aesthetic';
  image: string;
  imageAlt: string;
  commonConcerns: string[];
  whoMayBenefit: string[];
  consultationProcess: {
    step: string;
    description: string;
  }[];
  treatmentOptions: {
    title: string;
    description: string;
  }[];
  recoveryInfo: {
    title: string;
    points: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  disclaimer?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Treatments' | 'Investigations & Tests' | 'Recovery & Care' | 'Appointments';
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface PatientExperience {
  id: string;
  title: string;
  topic: string;
  treatment: string;
  duration: string;
  summary: string;
  posterImage: string;
}

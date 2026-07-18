export interface CaseStudy {
  id: string;
  patientName: string;
  age: number;
  condition: string;
  difficulty: "Mild" | "Moderate" | "Severe";
  durationMonths: number;
  beforeImg: string;
  afterImg: string;
  description: string;
  clinicalNotes: string;
  doctorInCharge: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Treatment" | "Pricing" | "Care & Wear";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  clinic: string;
  feedback: string;
  imageUrl: string;
  rating: number;
}

export interface TreatmentService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  suitableFor: string[];
  imageUrl: string;
}

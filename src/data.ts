import { CaseStudy, BlogPost, FAQItem, Testimonial, TreatmentService } from "./types";

export const brandHeroImage = "/images/smilyx-hero-banner.jpg";

export const services: TreatmentService[] = [
  {
    id: "digital-diagnostics",
    title: "Precision Digital diagnostics",
    shortDesc: "High-resolution 3D intraoral scans and panoramic radiographs that give the planning team a clear starting point.",
    fullDesc: "Every aligner case starts with accurate records. Instead of traditional putty impressions, we use laser-based intraoral scanners to capture a detailed, color-mapped 3D model of the teeth. Combined with digital cephalometric radiography, this gives our lab a reliable anatomic baseline for planning.",
    duration: "1 Session (30 mins)",
    suitableFor: ["Crowding", "Spacing", "Overbite", "Underbite", "Crossbite"],
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ortho-design",
    title: "Expert Orthodontic Planning",
    shortDesc: "Tooth-movement mapping by our clinical doctors, aligner planning expert, and certified dental technologist under licensed orthodontist supervision.",
    fullDesc: "Tooth movement needs careful planning. Smilyx uses digital setup software to review the force and sequence required for each tooth. Your plan is prepared by our clinical doctors, aligner design specialists, and an assisting certified dental technologist, with direct supervision from a licensed orthodontist. The goal is a clear step-by-step path that is comfortable, safe, and ready for review in 24 hours.",
    duration: "24 Hours",
    suitableFor: ["All malocclusions", "Custom case planning", "Relapse corrections"],
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "aligner-fabrication",
    title: "Medical-Grade Aligner Fabrication",
    shortDesc: "Multi-layer thermoformed polymers produced from accurate 3D printed models for a clear, close fit.",
    fullDesc: "Our manufacturing process uses Class-VI biocompatible PETG polyurethane materials. Each aligner sheet is thermoformed over a high-resolution 3D printed dental model, laser-trimmed to the scalloped gingival margin, and hand-polished. The result is a comfortable, clear tray with consistent gentle force.",
    duration: "7-10 Business Days",
    suitableFor: ["Direct patient setups", "Clinical partner labs", "Replacement sets"],
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-01",
    patientName: "Dr. Amanda Ross (Clinical Trial)",
    age: 28,
    condition: "Severe Anterior Crowding & Overlap",
    difficulty: "Severe",
    durationMonths: 11,
    beforeImg: "https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    description: "The patient presented with severe imbrication of the maxillary anterior region, specifically severe rotated central incisors and deep bite. Traditional metal braces were declined for aesthetic reasons.",
    clinicalNotes: "Treatment used 22 active stages of clear aligners. Precision buccal attachments were placed on teeth 12, 11, 21, and 22 to guide rotation. Interproximal reduction (IPR) of 0.2mm was applied on the lower anterior teeth.",
    doctorInCharge: "Dr. Marcus Vance, DDS, MS"
  },
  {
    id: "case-02",
    patientName: "Liam Sterling",
    age: 34,
    condition: "Maxillary Diastema (4.5mm Spacing Gap)",
    difficulty: "Moderate",
    durationMonths: 7,
    beforeImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    description: "Patient experienced social anxiety due to a highly noticeable midline gap between his upper central incisors. The goal was full space closure with stable posterior occlusion.",
    clinicalNotes: "Achieved full midline space closure over 14 active aligner trays. No stripping was needed. A lingual retainer wire was installed on completion to support long-term retention of the high-relapse anterior gap.",
    doctorInCharge: "Dr. Sarah Chen, Orthodontist"
  },
  {
    id: "case-03",
    patientName: "Sophia Martinez",
    age: 22,
    condition: "Mild Mandibular Crowding & Relapse",
    difficulty: "Mild",
    durationMonths: 4.5,
    beforeImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    description: "A classic case of post-orthodontic relapse. The patient forgot to wear her retainer years after traditional braces, leading to progressive lower incisor crowding.",
    clinicalNotes: "Minor alignment adjustments using 9 active stages. Custom scalloped laser trims were used to accommodate her low gumline. Relapse correction was completed inside five months with minimal discomfort.",
    doctorInCharge: "Dr. Marcus Vance, DDS, MS"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-01",
    slug: "how-clear-aligners-safely-move-teeth",
    title: "How Clear Aligners Safely Move Teeth: The Biomechanics",
    excerpt: "A clear look at bone remodeling, periodontal ligament response, and the controlled forces behind clear aligners.",
    content: "When you wear a new set of clear aligners, the tray applies light, planned pressure to specific teeth. That pressure starts a normal biological process called bone remodeling. On the pressure side, the periodontal ligament compresses and osteoclasts help resorb old bone. On the tension side, osteoblasts help build new bone. Smilyx Clear Aligners are made from medical polyurethane selected to keep these forces controlled and comfortable throughout treatment.",
    category: "Biomechanics",
    author: {
      name: "Dr. Marcus Vance",
      role: "Chief Orthodontist",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop"
    },
    date: "June 24, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "blog-02",
    slug: "ultimate-retainer-guide",
    title: "The Ultimate Retainer Guide: Protecting Your Smile Long Term",
    excerpt: "Why teeth can shift after treatment and how a clear retention plan helps protect the result.",
    content: "Finishing clear aligner treatment is a major step, but retention is what keeps the result stable. Teeth can shift because periodontal fibers and surrounding bone need time to settle after movement. This is known as post-treatment relapse. To protect your alignment, we recommend a clear thermoformed retainer. Most patients wear it 22 hours a day at first, then move to night-time wear once the supervising doctor confirms the case is stable.",
    category: "Post-Care",
    author: {
      name: "Dr. Sarah Chen",
      role: "Lead Orthodontist",
      avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=150&auto=format&fit=crop"
    },
    date: "July 02, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "blog-03",
    slug: "clear-aligners-vs-traditional-braces",
    title: "Clear Aligners vs. Traditional Braces: A Clinical Comparison",
    excerpt: "We compare clarity, oral hygiene, eating freedom, office visits, and overall lifestyle impact to help you decide which treatment fits your path.",
    content: "Metal brackets still have an important role in complex orthodontic and surgical cases. For many mild to moderate cases, clear aligners offer a more convenient option. They are removable, so brushing and flossing are simpler. Food choices are easier because trays come out before meals. Aligners also avoid common bracket issues such as broken wires or soft-tissue irritation. With the right case selection and planning, aligner treatment can be efficient and predictable.",
    category: "Education",
    author: {
      name: "Dr. Amanda Ross",
      role: "Clinical Director",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop"
    },
    date: "July 10, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  }
];

export const FAQs: FAQItem[] = [
  {
    category: "General",
    question: "What makes Smilyx Clear Aligners different from standard aligners?",
    answer: "Smilyx Clear Aligners use multi-layer polymers selected for steady orthodontic force. Each setup is custom-designed and approved by a licensed, board-certified orthodontist rather than left to an algorithm alone."
  },
  {
    category: "Treatment",
    question: "How many hours a day must I wear my aligners?",
    answer: "For effective teeth movement, aligners must be worn for 20 to 22 hours daily. They should only be removed to eat, drink anything other than cool water, brush, and floss."
  },
  {
    category: "Treatment",
    question: "How long does the average Smilyx alignment take?",
    answer: "Many cases finish in 6 to 12 months. Mild cases may take about 4 months, while complex cases can take 18 months or longer depending on the treatment goals."
  },
  {
    category: "Care & Wear",
    question: "Are clear aligners painful to wear?",
    answer: "You may feel tight pressure during the first 24 to 48 hours of a new tray. That usually means the aligner is active. The soreness is temporary and should settle quickly."
  },
  {
    category: "Care & Wear",
    question: "How do I clean and sanitize my aligners?",
    answer: "Rinse them with cool water every time you take them out. Brush them gently with a soft-bristled toothbrush and a clear, mild liquid soap (avoid colored toothpastes, which can scratch or stain the clear polymer). You can also submerge them in standard orthodontic retainer cleaning tablets."
  },
  {
    category: "Pricing",
    question: "How do I submit a trial case?",
    answer: "Dental practitioners and trial patients can submit a trial case via our online portal. Simply fill out the 'Submit Trial Case' form with your basic details, and our orthodontic lab team will contact you to coordinate your 3D digital scan or upload existing clinical STL files."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    name: "Dr. Catherine Bennett",
    role: "Clinical Partner",
    clinic: "Bennett Aesthetic Dentistry",
    feedback: "Smilyx has made our clear aligner workflow much easier. Their digital setup turnaround is fast, and the polished trim line has reduced soft-tissue irritation complaints from my patients.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t-02",
    name: "Jeremy Thorne",
    role: "Relapse Patient",
    clinic: "Smilyx Member",
    feedback: "I wore braces as a teenager but stopped wearing my retainer, and my lower teeth became crowded again. Smilyx corrected the relapse in 5 months. The trays were clear enough that most people did not notice them.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t-03",
    name: "Elena Rostova",
    role: "Verified Patient",
    clinic: "Smilyx Member",
    feedback: "I had a large gap between my front teeth for years. Smilyx designed a 7-month plan that closed it, and the support team guided me through each tray change. I feel much more comfortable smiling now.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    rating: 5
  }
];

export const officeAddress = "100 Dental Science Pkwy, Suite 400, Singapore 048582";
export const officeHours = [
  { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "9:00 AM - 3:00 PM" },
  { days: "Sunday", hours: "Closed" }
];
export const officeContact = {
  phone: "+65 6789 0123",
  email: "partner@smilyx-aligners.com"
};

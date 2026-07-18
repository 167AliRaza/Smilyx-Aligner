import { CaseStudy, BlogPost, FAQItem, Testimonial, TreatmentService } from "./types";

export const brandHeroImage = "/src/assets/images/smilyx_hero_banner_1783856560206.jpg";

export const services: TreatmentService[] = [
  {
    id: "digital-diagnostics",
    title: "Precision Digital diagnostics",
    shortDesc: "High-resolution 3D intraoral scans and panoramic radiographs that capture every micrometer of your current dentition.",
    fullDesc: "Every great smile transformation begins with perfect data. Instead of uncomfortable traditional putty impressions, we utilize state-of-the-art laser-based intraoral scanners to capture a hyper-accurate, color-mapped 3D model of your teeth in under two minutes. Combined with digital cephalometric radiography, our lab establishes an absolute anatomic baseline.",
    duration: "1 Session (30 mins)",
    suitableFor: ["Crowding", "Spacing", "Overbite", "Underbite", "Crossbite"],
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ortho-design",
    title: "Expert Orthodontic Planning",
    shortDesc: "Bespoke tooth-movement mapping designed by our dedicated doctors and an aligner expert, assisted by a certified dental technologist, under licensed orthodontist supervision.",
    fullDesc: "We don't leave teeth movement to chance. Smilyx's specialized digital setup suite simulates the precise force vectors required for each tooth. Your custom plan is crafted by our dedicated clinical doctors, aligner design specialists, and an assisting certified dental technologist, directly supervised by a licensed orthodontist. This creates an optimal step-by-step path to your target smile, ensuring comfortable, safe, and highly predictable results in 24 hours.",
    duration: "24 Hours",
    suitableFor: ["All malocclusions", "Custom case planning", "Relapse corrections"],
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "aligner-fabrication",
    title: "Medical-Grade Aligner Fabrication",
    shortDesc: "Multi-layered thermoformed polymers 3D printed with micron-level accuracy for supreme clarity and optimal snugness.",
    fullDesc: "Our high-tech manufacturing facility uses class-VI biocompatible PETG polyurethane materials. Every aligner sheet is thermoformed over high-resolution 3D printed dental models, laser-trimmed to your exact scalloped gingival margin, and hand-polished. This ensures maximum comfort, near-invisible clarity, and consistent, gentle physiological force.",
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
    clinicalNotes: "Treatment utilized 22 active stages of clear aligners. Precision buccal attachments were placed on teeth 12, 11, 21, and 22 to guide rotation vectors. Interproximal reduction (IPR) of 0.2mm was applied on the lower anterior teeth.",
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
    clinicalNotes: "Achieved full midline space closure over 14 active aligner trays. Zero stripping was needed. A lingual retainer wire was installed on completion to guarantee long-term retention of the high-relapse anterior gap.",
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
    clinicalNotes: "Minor alignment adjustments using 9 active stages. Custom scalloped laser trims were utilized to accommodate her low gumline. Full relapse correction completed inside five months with minimal discomfort.",
    doctorInCharge: "Dr. Marcus Vance, DDS, MS"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-01",
    title: "How Clear Aligners Safely Move Teeth: The Biomechanics",
    excerpt: "Discover the fascinating science of bone remodeling, periodontal ligament compression, and the engineered forces behind clear orthodontic aligners.",
    content: "When you slip on a new pair of clear aligners, you are applying highly calculated force vectors to your dentition. Beneath the surface, this light continuous pressure triggers a biological process called bone remodeling. On the side of the tooth where pressure is applied, the periodontal ligament gets compressed, prompting cells called osteoclasts to dissolve old bone tissue. On the opposite side, the ligament is stretched, signaling osteoblasts to build new bone. Smilyx Clear Aligners are crafted from advanced medical polyurethane to ensure these biomechanical forces stay in the safe, biological zone—preventing discomfort while guaranteeing rapid results.",
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
    title: "The Ultimate Retainer Guide: Protecting Your Smile Long Term",
    excerpt: "Why teeth want to slip back to their old crooked positions and how modern retention protocols safeguard your alignment investment.",
    content: "You've successfully completed your clear aligner journey and your teeth look absolutely flawless. But the work doesn't stop here. Teeth have 'mesial drift' and elastic memory within their periodontal fibers, meaning they naturally want to slip back to their old crowded coordinates. This is known as post-treatment relapse. To safeguard your smile, we recommend wearing a heavy-duty, clear thermoformed retainer. At first, you'll wear it 22 hours a day for three months while the alveolar bone around your newly moved teeth fully solidifies. Thereafter, sliding it in only while you sleep is enough to lock your results in place for life.",
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
    title: "Clear Aligners vs. Traditional Braces: A Clinical Comparison",
    excerpt: "We compare clarity, oral hygiene, eating freedom, office visits, and overall lifestyle impact to help you decide which treatment fits your path.",
    content: "While metal brackets have their place in complex surgical jaw setups, clear aligners represent a massive leap forward in comfort and lifestyle freedom. First, hygiene is uncompromised: aligners are completely removable, allowing you to floss and brush normally without navigating around wires. Second, there are no food restrictions—simply pop them out before enjoying crunchy apples or sticky caramel. Finally, aligners require fewer emergency clinic appointments for broken brackets or painful poking wires. Modern polymer engineering ensures aligner treatment is just as rapid as braces for 90% of standard crowding and spacing cases.",
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
    answer: "Smilyx Clear Aligners are engineered using premium multi-layer polymers, which retain their orthodontic moving force up to 40% longer than traditional materials. Each setup is custom-designed and approved by a licensed, board-certified orthodontist, rather than auto-generated by algorithms alone, ensuring precise biological safety."
  },
  {
    category: "Treatment",
    question: "How many hours a day must I wear my aligners?",
    answer: "For effective teeth movement, aligners must be worn for 20 to 22 hours daily. They should only be removed to eat, drink anything other than cool water, brush, and floss."
  },
  {
    category: "Treatment",
    question: "How long does the average Smilyx alignment take?",
    answer: "Most smiles are fully transformed in 6 to 12 months. Mild cases can be completed in as little as 4 months, while highly complex cases may take up to 18 months."
  },
  {
    category: "Care & Wear",
    question: "Are clear aligners painful to wear?",
    answer: "You will experience a sensation of light, tight pressure during the first 24-48 hours of starting a new tray stage. This is a positive sign indicating the orthodontic forces are actively moving your teeth. This transient soreness fades quickly."
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
    feedback: "Partnering with Smilyx has transformed my clear aligner workflow. Their digital setup turnarounds are remarkably fast, and the thermoformed trim line is polished so beautifully that my patients never complain of gum irritation. The biological predictability is peerless.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t-02",
    name: "Jeremy Thorne",
    role: "Relapse Patient",
    clinic: "Smilyx Member",
    feedback: "I wore braces as a teenager but neglected my retainer, causing major crowding on my lower teeth. Smilyx fixed my relapse in just 5 months! The trays were so clear that my coworkers didn't even notice I was wearing them. Absolutely flawless experience.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t-03",
    name: "Elena Rostova",
    role: "Verified Patient",
    clinic: "Smilyx Member",
    feedback: "I had a massive gap between my front teeth my whole life. Smilyx designed a 7-month plan that closed it completely. Their customer support team and partner orthodontists guided me through every tray change. Now I smile with 100% confidence!",
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

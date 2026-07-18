import { Shield, Sparkles, Award, Star, Microscope, Users } from "lucide-react";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";

export default function AboutUs() {
  const team = [
    {
      name: "Dr. Marcus Vance, DDS, MS",
      role: "Supervising Orthodontist",
      bio: "Veteran board-certified orthodontist with over 18 years of experience. Actively reviews and supervises every individual custom staging plan for absolute safety.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop"
    },
 
    {
      name: "Dr. Amanda Ross, DDS",
      role: "Clinical Treatment Doctor",
      bio: "Experienced clinician dedicated to clinical validation, patient assessment, and personalized biomechanical safety controls.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Alex Mercer, CO",
      role: "Lead Aligner Planning Expert",
      bio: "Specialist in computer-aided staging and polymer behavior, optimizing tooth-movement sequences for rapid, snug, and comfortable seating.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Jordan Brooks, CDT",
      role: "Certified Dental Technologist",
      bio: "High-precision digital design specialist assisting our doctors in sculpting accurate dental alignment plans.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=300&auto=format&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Award className="w-6 h-6 text-brand-600" />,
      title: "Expert Oversight",
      desc: "Every single clear aligner setup is designed by our team of dedicated clinical doctors and an aligner planning expert, assisted by a certified dental technologist, under the direct supervision of a licensed master orthodontist."
    },
    {
      icon: <Microscope className="w-6 h-6 text-brand-600" />,
      title: "Biomaterial Innovation",
      desc: "Our premium Class-VI PETG polymers are multi-layered to exert a persistent, gentle pressure that avoids root resorption while maintaining clarity."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-600" />,
      title: "Micron-Level Precision",
      desc: "Each clear tray is laser-trimmed exactly to your scalloped gingival margin, eliminating gum irritation, and hand-polished at our laboratory."
    }
  ];

  return (
    <div id="about-us-page" className="pb-20 bg-white space-y-24">
      {/* Hero Intro */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Clinic laboratory background"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-400 px-4 py-1.5 rounded-full border border-brand-500/20 text-xs font-mono font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>The Smilyx Foundation</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            About Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Founded by veteran clinical orthodontists, Smilyx Clear Aligners is built upon clinical precision, biocompatible material engineering, and zero-error workflows.
          </p>
        </Reveal>
      </section>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <Reveal variant="left" className="lg:col-span-6 relative">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
              alt="Smilyx Team at work"
              className="rounded-[40px] shadow-2xl relative z-10 w-full aspect-[4/3] object-cover border border-slate-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-100 rounded-full -z-10 filter blur-xl opacity-50" />
          </Reveal>

          <Reveal variant="right" className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-brand-600">
              <Sparkles className="w-5 h-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                Our Genesis Story
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight leading-none">
              Where Technology Meets Real Clinical Expertise.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              In 2021, our founders realized clear aligner treatments were becoming hyper-commercialized. Tech startups were mailing aligners directly to consumers, skipping basic orthodontic examinations, relying on unsupervised algorithms, and causing serious dental damage.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Smilyx Clear Aligners was created to restore clinical safety. We combined the cost-saving power of modern 3D thermoforming technology with strict medical supervision. Today, we supply clear aligners directly to doctor partners and direct patients, ensuring every case is double-verified for absolute stability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Clinical Values */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <Reveal className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
              Core Pillars
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Our Foundational Beliefs
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We never compromise on diagnostic accuracy or materials. Here are the values that define our medical laboratory.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" childClassName="h-full">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 space-y-4 text-left"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">{val.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Team grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
            The Planning Team
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Meet Our Planning Experts
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Our treatment plans are designed by our dedicated clinical doctors and an aligner planning expert, assisted by a certified dental technologist, all under licensed orthodontist supervision.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" childClassName="h-full">
          {team.map((member, idx) => (
            <div
              key={idx}
              id={`team-card-${idx}`}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 text-left flex flex-col h-full"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-tight">{member.name}</h3>
                  <span className="text-xs font-bold text-brand-600 block">{member.role}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed pt-2 border-t border-slate-50 mt-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </section>
    </div>
  );
}

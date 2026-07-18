import { useState } from "react";
import { Check, ShieldCheck, Sparkles, Smile, Ruler, Users, ChevronRight } from "lucide-react";
import { services } from "../data";

export default function HowWeTreat() {
  const [activeTab, setActiveTab] = useState("crowding");

  const malocclusions = [
    {
      id: "crowding",
      title: "Anterior Crowding",
      desc: "Teeth overlap, rotate, or bunch together due to lack of alveolar ridge space. Corrected via calculated expansion and subtle interproximal alignment vectoring.",
      recoveryTime: "6 - 11 Months",
      difficulty: "Mild to Severe"
    },
    {
      id: "diastema",
      title: "Diastema & Gaps",
      desc: "Excessive space between teeth, most prominent between upper central incisors. Rectified using localized translational constriction and post-treatment retention cables.",
      recoveryTime: "4 - 8 Months",
      difficulty: "Mild to Moderate"
    },
    {
      id: "overbite",
      title: "Deep Overbite",
      desc: "Upper teeth significantly overlap the lower teeth vertically. Remedied using absolute or relative incisor intrusion vectors combined with molar extrusion.",
      recoveryTime: "9 - 14 Months",
      difficulty: "Moderate to Severe"
    },
    {
      id: "relapse",
      title: "Post-Ortho Relapse",
      desc: "Teeth shift back after forgetting to wear retainers post-traditional braces. Extremely rapid correction utilizing rapid-sequence micro-trays.",
      recoveryTime: "3 - 6 Months",
      difficulty: "Mild"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Digital Intraoral Scan",
      subtitle: "The 3D Diagnostic Phase",
      desc: "Our doctors take a high-density, color-mapped laser scan of your teeth using intraoral wands. No messy goop, no gagging. In less than 120 seconds, we map your entire dentition with micron-level accuracy.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "02",
      title: "Orthodontic Setup & Planning",
      subtitle: "Expert Movement Vectoring",
      desc: "Your custom clear aligner plan is designed by our specialized team of dedicated doctors and an aligner specialist, assisted by a certified dental technologist, under the direct supervision of a licensed master orthodontist. We use state-of-the-art staging software to simulate the exact force vectors, mapping your optimal progress week by week.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "03",
      title: "Precise Thermoforming & Trim",
      subtitle: "Medical-Grade Aligner Fabrication",
      desc: "Using Class-VI biocompatible multi-layer polymers, we 3D-print your dental models at extreme resolution and thermoform each aligner. Each tray is laser-scalloped to match your exact gumline, then hand-polished to guarantee absolute comfort.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "04",
      title: "Active Wear & Monitoring",
      subtitle: "Your Micro-Transition Journey",
      desc: "You wear each aligner tray for 22 hours daily, switching to a new stage every 7 to 10 days. As you move through the sequence, your teeth are gently guided into place. We coordinate brief virtual check-ins with our clinical team to ensure absolute safety.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div id="how-we-treat-page" className="pb-20 bg-white space-y-24">
      {/* Intro Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Clinic backdrop"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-400 px-4 py-1.5 rounded-full border border-brand-500/20 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Workflow Design</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            How We Treat
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Smilyx Clear Aligners replaces the painful trial-and-error of traditional wire braces with fully simulated, 3D laser-mapped biological clear aligners. Here is our end-to-end design sequence.
          </p>
        </div>
      </section>

      {/* Sequential Treatment Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
            The 4-Step Cycle
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Our Engineered Treatment Sequence
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Every Smilyx aligner is manufactured with clinical rigor to guarantee a comfortable, hyper-precise dental fit.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={step.number}
                id={`treatment-step-${step.number}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 relative ${isEven ? "" : "lg:order-last"}`}>
                  <div className="absolute -inset-4 bg-brand-50/50 rounded-[40px] -z-10" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-[30px] shadow-lg aspect-[16/10] object-cover w-full border border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-brand-600 text-white font-display font-black text-2xl px-5 py-2.5 rounded-2xl shadow-lg shadow-brand-500/20">
                    {step.number}
                  </span>
                </div>

                {/* Copy */}
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Orthodontist Supervised</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Micro-level accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive treatable malocclusions list */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Explanatory intro */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
                Anatomic Spectrum
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Anatomical Conditions We Correct
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clear aligners are no longer limited to simple minor straighteness adjustments. Due to advanced multi-force attachment anchoring, Smilyx treatable parameters now cover complex orthodontic structural shifts.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-100 space-y-3">
                <div className="flex items-center space-x-2 text-brand-600">
                  <Ruler className="w-5 h-5" />
                  <span className="font-bold text-xs text-slate-800">Biomechanical Tolerances</span>
                </div>
                <p className="text-slate-500 text-xs">
                  Our materials retain steady orthodontic translation vectors under variable thermal conditions (hot beverages or cold desserts).
                </p>
              </div>
            </div>

            {/* Interactive Tabbed Box */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-100 space-y-6">
              {/* Tab headers */}
              <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
                {malocclusions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-150 cursor-pointer ${
                      activeTab === item.id
                        ? "bg-brand-600 text-white shadow-md shadow-brand-100"
                        : "text-slate-500 hover:text-brand-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.title.split(" ")[1] || item.title}
                  </button>
                ))}
              </div>

              {/* Tab Body */}
              {malocclusions.map((item) => {
                if (item.id !== activeTab) return null;
                return (
                  <div key={item.id} className="space-y-4 animate-fadeIn">
                    <h3 className="font-display font-black text-xl text-slate-900">
                      {item.title} Treatment Plan
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Difficulty Profile</span>
                        <span className="font-display font-bold text-sm text-slate-800">{item.difficulty}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Treatment Timeline</span>
                        <span className="font-display font-bold text-sm text-slate-800">{item.recoveryTime}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

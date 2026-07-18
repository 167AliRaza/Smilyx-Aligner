import { ArrowRight, Calendar } from "lucide-react";
import Reveal from "./Reveal";

interface CTASectionProps {
  onSubmitCaseClick: () => void;
  onScheduleMeetingClick: () => void;
}

export default function CTASection({
  onSubmitCaseClick,
  onScheduleMeetingClick
}: CTASectionProps) {
  return (
    <section id="mid-page-cta" className="relative py-24 px-4 overflow-hidden bg-slate-900">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
          alt="Professional orthodontic setting"
          className="w-full h-full object-cover opacity-20 filter grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-950" />
      </div>

      <Reveal className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <span className="font-mono text-xs font-bold text-brand-400 uppercase tracking-widest block">
          Streamline Your Workflow Today
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          Ready to submit your clinical case to us?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Submit your patient’s digital scans (STL) or take advantage of our complimentary trial setup. Our board-certified master orthodontists will map out a custom tooth movement staging plan within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button
            id="cta-submit-case-button"
            onClick={onSubmitCaseClick}
            className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-display font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-lg shadow-brand-500/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Submit Trial Case</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="cta-schedule-meeting-button"
            onClick={onScheduleMeetingClick}
            className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border-2 border-white/20 hover:border-white font-display font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Meeting</span>
          </button>
        </div>
      </Reveal>
    </section>
  );
}

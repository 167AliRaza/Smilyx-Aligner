import { Calendar, User, ShieldCheck } from "lucide-react";
import { CaseStudy } from "../types";

interface CaseCardProps {
  caseStudy: CaseStudy;
  onSelect: () => void;
}

export default function CaseCard({ caseStudy, onSelect }: CaseCardProps) {
  const getDifficultyStyles = (difficulty: string) => {
    switch (difficulty) {
      case "Mild":
        return "bg-teal-50 text-teal-700 border-teal-100";
      case "Moderate":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "Severe":
        return "bg-rose-50 text-rose-700 border-rose-100";
      default:
        return "bg-slate-50 text-slate-700 border-slate-100";
    }
  };

  return (
    <div
      id={`case-card-${caseStudy.id}`}
      onClick={onSelect}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
    >
      {/* Visual before/after side by side preview */}
      <div className="grid grid-cols-2 gap-px bg-slate-100 relative aspect-[16/10] overflow-hidden">
        <div className="relative">
          <img
            src={caseStudy.beforeImg}
            alt="Before"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <span className="absolute bottom-2 left-2 bg-slate-900/80 text-[10px] font-bold text-white px-2 py-0.5 rounded-full">
            Before
          </span>
        </div>
        <div className="relative">
          <img
            src={caseStudy.afterImg}
            alt="After"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <span className="absolute bottom-2 right-2 bg-brand-600/90 text-[10px] font-bold text-white px-2 py-0.5 rounded-full">
            After
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Case Study #{caseStudy.id.replace("case-", "")}
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getDifficultyStyles(
                caseStudy.difficulty
              )}`}
            >
              {caseStudy.difficulty} Complexity
            </span>
          </div>

          <h3 className="font-display font-bold text-lg text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
            {caseStudy.condition}
          </h3>

          <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
            {caseStudy.description}
          </p>
        </div>

        {/* Stats footer */}
        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-50 text-[11px] font-semibold text-slate-500">
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand-500" />
            <span>{caseStudy.durationMonths} Months</span>
          </div>
          <div className="flex items-center space-x-1.5 justify-end text-right">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
            <span className="truncate">{caseStudy.doctorInCharge.split(",")[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

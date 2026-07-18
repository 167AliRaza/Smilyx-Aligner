import { Star, Quote } from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      id={`testimonial-card-${testimonial.id}`}
      className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-slate-100">
        <Quote className="w-12 h-12 stroke-[1.5]" />
      </div>

      <div className="space-y-4 relative z-10">
        {/* Stars */}
        <div className="flex text-amber-400">
          {Array.from({ length: testimonial.rating }).map((_, idx) => (
            <Star key={idx} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Feedback Text */}
        <p className="text-slate-600 text-sm leading-relaxed italic">
          "{testimonial.feedback}"
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center space-x-4 pt-6 border-t border-slate-50 mt-6 relative z-10">
        <img
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-50"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-display font-extrabold text-sm text-slate-900 leading-none">
            {testimonial.name}
          </h4>
          <p className="text-xs text-brand-600 font-semibold mt-1">
            {testimonial.role}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            {testimonial.clinic}
          </p>
        </div>
      </div>
    </div>
  );
}

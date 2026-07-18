import { Star, ShieldCheck, CheckCircle, Award, Briefcase, Zap, Heart } from "lucide-react";
import Reveal from "../components/Reveal";

export default function AdultOrtho() {
  return (
    <div id="adult-ortho-page" className="pb-20 bg-white space-y-24">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Adult smiling confidently backdrop"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 px-4 py-1.5 rounded-full border border-brand-500/20 text-xs font-mono font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Adult Orthodontics</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight italic">
            Orthodontics For Adults
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            It is never too late to secure a healthy, harmonious, and aesthetically flawless smile. Discrete orthodontic systems designed to fit your professional life.
          </p>
        </Reveal>
      </section>

      {/* Main Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="left" className="space-y-6 text-left">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">Sophisticated Orthodontics</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              Designed For Professional Lives.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Orthodontic treatment is highly effective at any age. In fact, over 25% of all orthodontic patients today are adults. Aligning your teeth not only boosts self-confidence, but it also dramatically reduces risks of uneven wear, periodontal pocketing, temporomandibular joint (TMJ) strain, and plaque build-up.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Invisible Options</h4>
                  <p className="text-slate-500 text-xs">Utilize Invisalign or premium clear aligners that remain completely discrete in the boardroom.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Flexible Appointment Cadences</h4>
                  <p className="text-slate-500 text-xs">Brief clinical check-ins spaced every 8 to 12 weeks to fit busy, demanding corporate schedules.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Stable Physiological Longevity</h4>
                  <p className="text-slate-500 text-xs">Prevent future periodontal issues and secure your natural teeth alignment for decades to come.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" className="relative">
            <img
              src="https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=800"
              alt="Adult smiling confidently in business setting"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-xl hidden sm:block max-w-xs text-left">
              <Heart className="w-8 h-8 text-brand-600 mb-2" />
              <h4 className="font-display font-bold text-slate-900 text-sm">Better Bone Health</h4>
              <p className="text-slate-500 text-xs mt-1">Properly aligned teeth make brushing and flossing highly efficient, safeguarding bone health.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Advanced Clinical Tech */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 text-center">
        <Reveal className="max-w-4xl mx-auto px-4 space-y-8">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">No Wait Diagnostic Blueprint</span>
          <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight">Your 24-Hour Path Commences Now</h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            By combining intraoral wands with ultra-fast cloud processing, we generate your personalized tooth movement simulations in under 24 hours. We can begin manufacturing your alignment sequence immediately.
          </p>
        </Reveal>
      </section>
    </div>
  );
}

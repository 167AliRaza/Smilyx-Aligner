import { Shield, Sparkles, Star, CheckCircle, Clock, Heart, Zap } from "lucide-react";

export default function Invisalign() {
  return (
    <div id="invisalign-treatment-page" className="pb-20 bg-white space-y-24 animate-fadeIn">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Clear Aligner Trays"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 px-4 py-1.5 rounded-full border border-brand-500/20 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>State-Of-The-Art Clear Aligners</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight italic">
            Invisalign Treatment
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Uncompromised aesthetics and precise tooth movement vectors. The modern clear alternative to traditional wire braces, engineered for comfort and predictable clinical success.
          </p>
        </div>
      </section>

      {/* Intro Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
              Why Clear Aligners?
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              A Clear Path to a Confidence-Boosting Smile.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Invisalign and Smilyx Clear Aligners utilize removable, near-invisible medical polyurethane trays to shift teeth progressively into their ideal positions. By relying on custom thermoformed aligners scanned to your exact teeth boundaries, we eliminate wire pokes, food restrictions, and heavy clinic visits.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Completely Removable</h4>
                  <p className="text-slate-500 text-xs">Take them out to eat your favorite foods, brush, and floss with complete ease.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Virtually Invisible</h4>
                  <p className="text-slate-500 text-xs">High-clarity polymer makes your orthodontic treatment completely discrete.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Pristine Scalloped Fit</h4>
                  <p className="text-slate-500 text-xs">Laser-trimmed to match your unique gumline perfectly to protect soft tissue.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800"
              alt="Patient wearing clear aligners"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3] border border-slate-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 max-w-xs space-y-1 text-left hidden sm:block">
              <Zap className="w-8 h-8 text-brand-400" />
              <p className="font-display font-extrabold text-lg text-white">24-Hour Design</p>
              <p className="text-slate-400 text-xs leading-relaxed">Your custom tooth-movement simulation is generated in just 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Staging process */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">The Clear Aligner Journey</span>
            <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight">How It Works Step-By-Step</h2>
            <p className="text-slate-500 text-xs sm:text-sm">We combine digital precision and clinical craftsmanship to ensure your treatment is safe, rapid, and predictable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-display font-black text-lg">1</div>
              <h3 className="font-display font-bold text-lg text-slate-900">3D Digital Scan</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                We capture a high-resolution 3D record of your dentition using laser intraoral scanners. Absolutely no goopy molds or gagging.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-display font-black text-lg">2</div>
              <h3 className="font-display font-bold text-lg text-slate-900">24-Hour Treatment Plan</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our specialized team of dedicated doctors and an aligner planning expert, assisted by an on-staff certified dental technologist, maps your treatment under licensed orthodontist supervision. A complete 3D teeth movement simulation is ready in 24 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-display font-black text-lg">3</div>
              <h3 className="font-display font-bold text-lg text-slate-900">Active Stage Wear</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Slip on your customized aligners. Wear each tray for 22 hours daily, transitioning to the next tray in the sequence every week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alignment Solutions list */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-10">
        <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight">What Invisalign Can Treat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Gapped Teeth",
            "Anterior Crowding",
            "Mild Overbites",
            "Underbite Shift",
            "Crossbite Realignment",
            "Open Bites",
            "Post-Ortho Relapse",
            "Cosmetic Arch Styling"
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 font-display font-semibold text-xs sm:text-sm text-slate-800 hover:border-brand-300 hover:bg-brand-50/20 transition-all">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

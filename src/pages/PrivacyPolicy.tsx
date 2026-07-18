import { Shield, Lock, FileText, CheckCircle } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div id="privacy-policy-page" className="pb-20 bg-white space-y-16 animate-fadeIn">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Secure server grid"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-400 px-4 py-1.5 rounded-full border border-brand-500/20 text-xs font-mono font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Confidentiality Protocol</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            How Smilyx Clear Aligners safeguards patient 3D dental datasets, intraoral scans, dental photographs, and personal identity.
          </p>
        </div>
      </section>

      {/* Legal Text Content */}
      <section className="max-w-3xl mx-auto px-4 text-left font-sans text-slate-600 text-sm sm:text-base leading-relaxed space-y-8">
        <div className="flex items-center space-x-3 bg-brand-50/50 p-4 rounded-2xl border border-brand-50">
          <Shield className="w-6 h-6 text-brand-600 shrink-0" />
          <p className="text-xs text-brand-900 font-semibold leading-relaxed">
            We operate fully secure, ISO 27001-compliant digital infrastructure. Your 3D clinical STL models and medical photographs are encrypted at rest and in transit.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">1. Medical Data Collection</h2>
          <p>
            Smilyx Clear Aligners collects and processes patient dental scans, panoramic radiographs, intraoral photos, and medical history documents supplied by authorized dental practitioners or patients themselves. This collection is strictly required to model tooth translation trajectories and manufacture thermoformed aligners safely.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">2. HIPAA & PDPA Compliance</h2>
          <p>
            We process health records in strict compliance with the Health Insurance Portability and Accountability Act (HIPAA) and the Personal Data Protection Act (PDPA). Patient names, ages, and identities are separated from 3D diagnostic STL models inside our internal laboratory database to maintain clinical anonymity.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">3. Third-Party Lab Sharing</h2>
          <p>
            We never sell or distribute clinical data. Diagnostic material is only visible to licensed orthodontists planning your cases, laboratory technicians fabricating the physical polymers, and your referring primary dentist.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">4. Retention & Deletion</h2>
          <p>
            By default, patient 3D dental STL scans are retained for five years in our active diagnostic archives to coordinate relapse trays, should you lose your retainers. You can request immediate permanent deletion of your files by contacting us at our partner portal email.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-100 text-slate-400 text-xs">
          <p>Last Revised: July 12, 2026</p>
          <p className="mt-1">Smilyx Clear Aligners Compliance Division (Singapore)</p>
        </div>
      </section>
    </div>
  );
}

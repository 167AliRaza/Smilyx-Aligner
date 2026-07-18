# Product

## Register

brand

## Platform

web

## Users

The primary audience is **dental practitioners and clinical partners** — orthodontists, general dentists, and clinic owners who outsource clear-aligner treatment planning and fabrication to a specialist lab. Their context is professional and evaluative: they arrive comparing labs, weighing clinical credibility, turnaround, and material quality before they trust an outside setup with their own patients' outcomes. The job to be done is "find an aligner lab I can confidently route cases to," and the site succeeds when a practitioner submits their first trial case.

Patients (adults, and parents of kids in ortho) are a real but **secondary** audience. Their content — testimonials, case studies, treatment explainers, the FAQ — exists mainly as proof that reassures the practitioner, and secondarily to capture direct patient inquiries. When the two audiences conflict, the practitioner wins the layout and the voice.

## Product Purpose

Smilyx is a clear-aligner orthodontic lab. The site's purpose is to convert visiting clinicians into case-submitting partners by making the lab's clinical rigor legible: the digital diagnostics, the orthodontist-supervised setup design, the medical-grade fabrication, and the speed of turnaround. Success is a submitted trial case; the fallback is a booked design meeting with an orthodontist.

## Positioning

Orthodontist-supervised, custom-designed clear-aligner setups delivered in 24 hours — human clinical judgment on every case, not algorithm-only planning, and not slow. Speed backed by rigor is the claim every screen reinforces.

## Conversion & proof

- Primary CTA: **Submit a trial case** (send a case / STL files to the lab). Secondary CTA: **Book a design meeting** with an orthodontist for clinics not yet ready to commit a case.
- The line a visitor remembers after 10 seconds: a specialist aligner lab that turns a case around in 24 hours with a licensed orthodontist reviewing every stage.
- Belief ladder — what a practitioner must believe, in order, before submitting a case:
  1. This is a serious clinical lab, not a consumer teeth-straightening brand.
  2. Every setup is designed and supervised by licensed orthodontists, not auto-generated.
  3. The materials and fabrication are medical-grade and precise (biocompatible polymers, laser-trimmed margins).
  4. The turnaround (24-hour digital setup, sub-10-day fabrication) is genuinely fast without cutting corners.
  5. Real clinics and patients already trust the results (partner testimonials, documented cases).
  6. Submitting a trial case is low-friction and low-risk.
- Proof on hand (in `src/data.ts`): three documented clinical case studies with stage counts and clinical notes; a clinical-partner testimonial (Dr. Catherine Bennett) plus patient testimonials; named supervising doctors. Note: current names/imagery read as placeholder — replace with real, verifiable partner proof before launch.

## Brand Personality

Precision-engineered and clinical. The voice is that of a specialist medical-device and diagnostics lab: exact, evidence-led, confident, and calm — it explains force vectors, materials, and process because specificity *is* the reassurance. It speaks clinician-to-clinician, respecting the reader's expertise rather than selling to them. Warm through competence and real human clinicians, never through gimmick or hype. The feeling a visitor should leave with is **clinical confidence and trust**: "these people know exactly what they are doing."

## Anti-references

- **Consumer DTC / gimmicky** (SmileDirect-style mail-order aesthetic): pastels, subscription-box tone, hype. It undercuts clinical credibility with the practitioner audience.
- **Generic dental-clinic template**: teal-and-white, stock smiling faces, everything rounded, forgettable.
- **Sterile / lifeless**: so clinical it feels cold and untrustworthy; precision must not tip into an empty hospital-software feel.
- **Generic SaaS slop**: gradient blobs, the hero-metric template, identical card grids, tiny tracked eyebrows over every section, AI-default conventions.

## Design Principles

- **Show the rigor, don't claim it.** Make the clinical process visible — scan, orthodontist review, fabrication, materials, force mapping. Proof through specificity beats adjectives.
- **Clinician-to-clinician.** Vocabulary, precision, and evidence a practitioner respects. Patients appear as documented proof, not as the primary voice.
- **One path to the case.** Every screen drives toward Submit a Trial Case, with Book a Design Meeting as the warm, lower-commitment fallback. Don't dilute with competing consumer CTAs.
- **Credible, not cold.** Precision without sterility. Warmth comes from real outcomes and named human clinicians, not from decoration or gimmick.
- **Speed is the earned headline.** The 24-hour turnaround is a repeated, evidence-backed advantage — stated with the process that makes it believable, never as an empty boast.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Body text ≥4.5:1 contrast (≥3:1 for large text), full keyboard operability, visible focus states, and a `prefers-reduced-motion` alternative for every animation. Audience skews professional and includes older clinicians and patients, so legibility and restrained motion matter.

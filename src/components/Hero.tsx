"use client";

import { ArrowRight, Clock, Star, Heart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { brandHeroImage } from "../data";
import Reveal from "./Reveal";
import { motionEase } from "./motionPresets";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero-section" className="relative min-h-[90vh] xl:min-h-[760px] 2xl:min-h-[820px] flex items-center justify-center pt-24 xl:pt-28 pb-16 xl:pb-20 overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={brandHeroImage}
          alt="Modern clinical aligner laboratory"
          className="w-full h-full object-cover scale-105"
          initial={shouldReduceMotion ? false : { scale: 1.08 }}
          animate={shouldReduceMotion ? undefined : { scale: 1.03 }}
          transition={{ duration: 8, ease: motionEase }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/40" />
      </div>

      <div className="layout-container relative z-10">
        <div className="max-w-3xl xl:max-w-4xl mx-auto space-y-8 xl:space-y-9 text-center text-white">
          <Reveal variant="scale" className="inline-flex items-center space-x-2 bg-brand-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-brand-500/30">
            <Clock className="w-4 h-4 text-brand-400" />
            <span className="font-mono text-xs font-bold text-brand-300 uppercase tracking-wider">
              Full setup in 24 hours
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight text-white italic text-balance">
            Digital Planning <br />
            <span className="text-brand-400">
              for Clear Aligner Care.
            </span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-base sm:text-lg text-slate-200 font-sans max-w-xl mx-auto leading-relaxed">
              Smilyx Clear Aligners couples digital movement simulations with a custom design plan by our dedicated doctor team, assisted by a certified dental technologist and supervised by licensed orthodontists.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="hero-primary-cta"
              onClick={onCtaClick}
              className="bg-brand-600 hover:bg-brand-700 text-white font-display font-bold uppercase tracking-widest text-xs px-8 xl:px-9 py-4 rounded-full xl:rounded-xl shadow-lg shadow-brand-500/20 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Submit Trial Case</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-4 px-2 py-1 justify-center">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80"
                  alt="Patient portrait"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=80"
                  alt="Patient portrait"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=80"
                  alt="Patient portrait"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left text-xs">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-slate-400 font-semibold">1,200+ planned cases</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

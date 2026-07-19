import React from "react";

interface LogoProps {
  showText?: boolean;
  iconOnly?: boolean;
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({
  showText = true,
  iconOnly = false,
  className = "",
  variant = "light",
}: LogoProps) {
  const isDark = variant === "dark";

  // Clinical-blue mark on cool neutrals. Matches the design-system Precision-Blue Rule.
  // Theme-based colors for the wordmark
  const primaryTextColor = isDark ? "text-white" : "text-slate-900";
  const secondaryTextColor = isDark ? "text-slate-300" : "text-slate-500";

  return (
    <div className={`flex items-center space-x-3.5 ${className}`}>
      {/* High-Fidelity SVG Icon with the clinical-blue circle and tooth mark */}
      <svg
        viewBox="0 0 100 100"
        className="w-11 h-11 shrink-0 select-none overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Radial gradient for premium clinical-blue circle depth */}
          <radialGradient id="logo-brand-radial" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#0077b6" />
          </radialGradient>
        </defs>

        {/* Outer Circular Background */}
        <circle cx="50" cy="50" r="41" fill="url(#logo-brand-radial)" />

        {/* High-fidelity tooth shape centered inside the circle */}
        <path
          d="M 50,26
             C 55,26 58,22 63.5,22
             C 69,22 72,26 72,34
             C 72,44 67.5,49 67.5,56
             C 67.5,65 61.5,72 61.5,72
             C 59.5,72 58.5,70 56.5,62
             C 55.5,55 53.5,53 50,53
             C 46.5,53 44.5,55 43.5,62
             C 41.5,70 40.5,72 38.5,72
             C 38.5,72 32.5,65 32.5,56
             C 32.5,49 28,44 28,34
             C 28,26 31,22 36.5,22
             C 42,22 45,26 50,26 Z"
          fill="white"
        />

        {/* The medical cross centered in the upper-mid section of the tooth */}
        <path
          d="M 47.5,34 H 52.5 V 38.5 H 57 V 43.5 H 52.5 V 48 H 47.5 V 43.5 H 43 V 38.5 H 47.5 Z"
          fill="#0077b6"
        />

        {/* 3D wrapping orbit ring (Swoosh) crossing in front of the tooth, matching the exact taper and angle */}
        <path
          d="M 11.5,54
             C 20,62 38,65 52,61
             C 68,57 82,46 88.5,38
             C 78,47 62,55 48,56
             C 32,57 18,54 11.5,54 Z"
          fill="white"
          opacity="0.95"
        />
      </svg>

      {/* Brand Text styled with Modern/Professional Font (SmilyX clear aligners) */}
      {showText && !iconOnly && (
        <div className="flex flex-col text-left leading-none">
          <span className={`text-xl sm:text-[23px] font-extrabold tracking-[0.03em] ${primaryTextColor} font-display uppercase`}>
            SmilyX
          </span>
          <span className={`text-[9px] sm:text-[10px] font-extrabold tracking-[0.28em] ${secondaryTextColor} font-display uppercase mt-1`}>
            clear aligners
          </span>
        </div>
      )}
    </div>
  );
}

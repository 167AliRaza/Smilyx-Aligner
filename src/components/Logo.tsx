import React from "react";
import Image from "next/image";

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

  // Dynamic theme colors for the wordmark based on header state
  const primaryTextColor = isDark ? "text-white" : "text-slate-900";
  const secondaryTextColor = isDark ? "text-brand-300" : "text-brand-600";

  return (
    <div className={`flex items-center space-x-3.5 ${className}`}>
      {/* Premium Vélourcare Emblem Mark */}
      <Image
        src="/images/logo-emblem.png"
        alt="Vélourcare Ortho Emblem"
        width={104}
        height={76}
        className="h-10 xl:h-12 w-auto object-contain select-none shrink-0"
        priority
      />

      {/* Brand Wordmark styled alongside the logo mark */}
      {showText && !iconOnly && (
        <div className="flex flex-col text-center items-center leading-none select-none">
          <span
            className={`text-lg sm:text-xl xl:text-[22px] font-extrabold tracking-[0.05em] ${primaryTextColor} font-display uppercase`}
          >
            Vélourcare
          </span>
          <span
            className={`text-[9px] sm:text-[10px] xl:text-[11px] font-extrabold ${secondaryTextColor} font-display uppercase mt-1.5`}
            style={{ letterSpacing: "0.45em", paddingLeft: "0.45em" }}
          >
            O R T H O
          </span>
        </div>
      )}
    </div>
  );
}

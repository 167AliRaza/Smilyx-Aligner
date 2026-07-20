"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import {
  motionViewport,
  reducedRevealTransition,
  reducedRevealVariants,
  revealTransition,
  revealVariants,
} from "./motionPresets";

type RevealProps = HTMLMotionProps<"div"> & {
  variant?: keyof typeof revealVariants;
  delay?: number;
};

export default function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  transition,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={shouldReduceMotion ? reducedRevealVariants : revealVariants[variant]}
      transition={{
        ...(shouldReduceMotion ? reducedRevealTransition : revealTransition),
        delay: shouldReduceMotion ? 0 : delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

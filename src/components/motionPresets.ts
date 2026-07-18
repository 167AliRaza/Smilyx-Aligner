import type { Transition, Variants } from "motion/react";

export const motionViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -80px 0px",
} as const;

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const revealTransition: Transition = {
  duration: 0.55,
  ease: motionEase,
};

export const reducedRevealTransition: Transition = {
  duration: 0.18,
  ease: "linear",
};

export const revealVariants: Record<"up" | "soft" | "scale" | "left" | "right", Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  soft: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
};

export const reducedRevealVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

import type { Transition, Variants } from "motion/react";

export const motionViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -80px 0px",
} as const;

export const motionEase = [0.25, 1, 0.5, 1] as const;

export const revealTransition: Transition = {
  duration: 0.82,
  ease: motionEase,
};

export const reducedRevealTransition: Transition = {
  duration: 0.2,
  ease: "linear",
};

export const revealVariants: Record<"up" | "soft" | "scale" | "left" | "right", Variants> = {
  up: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  soft: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, y: 10, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -22 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 22 },
    visible: { opacity: 1, x: 0 },
  },
};

export const reducedRevealVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "motion/react";
import {
  motionViewport,
  reducedRevealTransition,
  reducedRevealVariants,
  revealTransition,
  revealVariants,
} from "./motionPresets";

type RevealGroupProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  childClassName?: string;
  itemVariant?: keyof typeof revealVariants;
  stagger?: number;
};

export default function RevealGroup({
  children,
  className,
  childClassName,
  itemVariant = "up",
  stagger = 0.055,
  ...props
}: RevealGroupProps) {
  const shouldReduceMotion = useReducedMotion();
  const items = Children.toArray(children);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : Math.min(stagger, 0.5 / Math.max(items.length, 1)),
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={containerVariants}
      {...props}
    >
      {items.map((child, idx) => (
        <motion.div
          className={childClassName}
          key={idx}
          variants={shouldReduceMotion ? reducedRevealVariants : revealVariants[itemVariant]}
          transition={shouldReduceMotion ? reducedRevealTransition : revealTransition}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

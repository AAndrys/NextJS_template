export const pageMotionProps = {
  initial: { opacity: 0.01 },
  animate: { opacity: 1 },
  exit: { opacity: 0.01 },
  transition: { duration: 0.6 },
};

export const svgMotionProps = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  exit: { pathLength: 0, opacity: 0 },
  transition: { duration: 0.3 },
};

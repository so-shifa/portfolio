import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return { ref, opacity, y };
};

export default useScrollAnimation;

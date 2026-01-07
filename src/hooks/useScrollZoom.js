import { useScroll, useTransform } from "framer-motion";

export const useScrollZoom = (ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return { scale, opacity };
};

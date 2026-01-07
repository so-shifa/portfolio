import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursorPosition } from "../hooks/useCursorPosition";
import useScrollAnimation from "../hooks/useScrollAnimation";
import location from "../assets/location.png";

const LocationMap = () => {
  const { ref, opacity, y } = useScrollAnimation(0.2);
  const cursorPos = useCursorPosition();

  // Glow offset only (NOT pin position)
  const [glowOffset, setGlowOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const offsetX = (cursorPos.x / window.innerWidth - 0.5) * 40;
    const offsetY = (cursorPos.y / window.innerHeight - 0.5) * 40;

    setGlowOffset({ x: offsetX, y: offsetY });
  }, [cursorPos]);

  return (
    <section ref={ref} className="relative py-22 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div style={{ opacity, y }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
            Location
          </h2>
          <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary">
            Based in Hyderabad, India 🇮🇳
          </p>
          
        </motion.div>

        {/* Map */}
        <motion.div
          className="relative glass rounded-3xl overflow-hidden h-[350px] w-[200px] md:w-[600px] mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Map image */}
          <img
            src={location}
            className="absolute inset-0 w-full h-full object-cover opacity-80 dark:opacity-60 scale-110"
          />

          {/* FIXED PIN (Hyderabad position) */}
          <div
            className="absolute z-10"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Glow that follows cursor */}
            <motion.div
              className="absolute -inset-10 bg-light-accent dark:bg-dark-accent rounded-full"
              style={{
                x: glowOffset.x,
                y: glowOffset.y,
              }}
              animate={{ opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.div
              className="absolute -inset-6 bg-light-secondary dark:bg-dark-secondary rounded-full"
              style={{
                x: glowOffset.x * 0.6,
                y: glowOffset.y * 0.6,
              }}
              animate={{ opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* PIN ICON (never moves) */}
            <div className="relative w-12 h-12 bg-gradient-to-br from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent rounded-full shadow-2xl flex items-center justify-center text-2xl border-4 border-light-bg dark:border-dark-bg">
              📍
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-light-textSecondary dark:text-dark-textSecondary">
            💡{" "}
            <span className="font-medium">
              Open to remote opportunities worldwide
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;

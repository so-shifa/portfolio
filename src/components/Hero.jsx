import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const titleText = "Shifa Tasneem";
  const subtitleText = "Frontend Developer";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-light-accent/20 dark:bg-dark-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-light-secondary/20 dark:bg-dark-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-light-primary/10 dark:bg-dark-primary/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            {titleText.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.05,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
                className="inline-block bg-gradient-to-br from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl md:text-4xl font-light text-light-textSecondary dark:text-dark-textSecondary tracking-wide">
            {subtitleText}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building responsive, role-based web applications with clean code and
          intuitive user experiences. Specializing in React, Tailwind CSS, and
          modern frontend architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 glass rounded-full overflow-hidden"
          >
            <span className="relative z-10 font-medium text-light-text dark:text-dark-text">
              View My Work
            </span>
            <motion.div
              className="absolute inset-0 bg-light-primary dark:bg-dark-primary"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 border-2 border-light-primary dark:border-dark-primary rounded-full font-medium text-light-primary dark:text-dark-primary hover:bg-light-primary hover:text-light-bg dark:hover:bg-dark-primary dark:hover:text-dark-bg transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-light-primary dark:border-dark-primary rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-light-primary dark:bg-dark-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiRedux,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const TechStack = () => {
  const { ref, opacity, y } = useScrollAnimation(0.2);

  const technologies = [
    {
      name: "React.js",
      icon: SiReact,
      description: "Component-based UI",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      description: "Core language",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description: "Utility-first CSS",
    },
    {
      name: "Git",
      icon: SiGit,
      description: "Version control",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      description: "Code hosting",
    },
    {
      name: "Redux",
      icon: SiRedux,
      description: "State management",
    },
    {
      name: "Postman",
      icon: SiPostman,
      description: "API testing",
    },
    {
      name: "Figma",
      icon: SiFigma,
      description: "Design tool",
    },
  ];

  return (
    <section ref={ref} className="relative py-10 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div style={{ opacity, y }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-black/70 dark:text-light-bg/80 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative glass p-6 rounded-2xl cursor-pointer overflow-hidden"
            >
              {/* SHINE LAYER */}
              {/* SHINE LAYER */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <span
                  className="
      absolute top-[-20%] left-[-70%]
      w-[40%] h-[450%]
      bg-gradient-to-r
      from-transparent
      via-white/30
      to-transparent
      rotate-12
      translate-x-0
      group-hover:translate-x-[420%]
      transition-transform duration-700 ease-out
    "
                />
              </span>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="text-5xl text-light-primary dark:text-light-accent">
                  <tech.icon />
                </div>
                <h3 className="font-bold">{tech.name}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

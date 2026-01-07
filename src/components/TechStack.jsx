import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const TechStack = () => {
  const { ref, opacity, y } = useScrollAnimation(0.2);

  const technologies = [
    {
      name: "React.js",
      icon: "⚛️",
      color: "from-blue-400 to-cyan-400",
      description: "Component-based UI",
    },
    {
      name: "JavaScript",
      icon: "📜",
      color: "from-yellow-400 to-orange-400",
      description: "Core language",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      color: "from-teal-400 to-blue-500",
      description: "Utility-first CSS",
    },
    {
      name: "Git/GitHub",
      icon: "🔧",
      color: "from-gray-400 to-gray-600",
      description: "Version control",
    },
    {
      name: "REST APIs",
      icon: "🔌",
      color: "from-green-400 to-emerald-500",
      description: "Data integration",
    },
    {
      name: "Redux",
      icon: "🗄️",
      color: "from-purple-400 to-pink-500",
      description: "State management",
    },
    {
      name: "Postman",
      icon: "📮",
      color: "from-orange-400 to-red-500",
      description: "API testing",
    },
    {
      name: "Figma",
      icon: "🎯",
      color: "from-pink-400 to-rose-500",
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
              className="group relative glass p-6 rounded-2xl cursor-pointer"
            >
              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="text-5xl">{tech.icon}</div>
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

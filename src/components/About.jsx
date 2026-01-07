import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useParallax } from "../hooks/useParallax";

const About = () => {
  const { ref, opacity, y } = useScrollAnimation(0.2);
  const [parallaxRef, offset] = useParallax(0.3);

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Projects Built" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-8 overflow-hidden">
      {/* Background Parallax */}
      <motion.div
        ref={parallaxRef}
        style={{ y: offset }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 right-20 w-64 h-64 bg-light-accent/10 dark:bg-dark-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-light-secondary/10 dark:bg-dark-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      {/* MAIN animated container (ONLY HERE y is used) */}
      <motion.div
        style={{ opacity, y }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-light-primary dark:bg-dark-primary mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">
              Crafting Digital Experiences
            </h3>

            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              I'm a Frontend Developer passionate about building responsive and
              intuitive web applications. With expertise in React.js and modern
              frontend technologies, I transform ideas into seamless digital
              experiences.
            </p>

            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              Currently interning at ROBOWAVES, I work on real-time dashboards,
              REST API integration, and reusable UI components within Agile
              teams. I believe in writing clean, scalable code that makes a
              difference.
            </p>

            <Link
              to="/info"
              className="inline-flex items-center gap-2 text-light-primary dark:text-dark-primary font-medium group"
            >
              Learn more about me
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-light-primary dark:text-dark-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="glass p-8 rounded-3xl">
          <h4 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
            Core Skills
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "JavaScript",
              "Tailwind CSS",
              "REST APIs",
              "Git/GitHub",
              "Agile/Scrum",
              "Responsive Design",
              "UI/UX",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-light-accent/20 dark:bg-dark-accent/10 border border-light-primary/30 dark:border-dark-primary/30 rounded-full text-sm font-medium text-light-text dark:text-dark-text"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

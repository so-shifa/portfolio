import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Experience = () => {
  const { ref, opacity, y } = useScrollAnimation(0.2);

  const experiences = [
    {
      role: "Front End Developer Intern",
      company: "ROBOWAVES",
      period: "Aug 2025 – Dec 2025",
      location: "Remote",
      description:
        "Working on real-time dashboards and role-based web applications",
      highlights: [
        "Developed reusable and responsive UI components using React.js and Tailwind CSS",
        "Integrated REST APIs and handled front-end data rendering with error states",
        "Collaborated in Agile environment with daily stand-ups and sprint planning",
        "Used Git and GitHub for version control and collaborative development",
      ],
      current: true,
    },
    {
      role: "Java Full Stack Training",
      company: "JSpiders, Hyderabad",
      period: "2025",
      location: "Hyderabad, India",
      description: "Comprehensive training in full-stack development",
      highlights: [
        "Core Java, SQL, JDBC fundamentals",
        "Servlets and web development",
        "Database design and management",
        "Backend development practices",
      ],
      current: false,
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div style={{ opacity, y }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-black/70 dark:text-light-bg/80 max-w-2xl mx-auto">
            My professional journey and learning experiences
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-5/12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-2xl relative overflow-hidden group"
                >
                  {exp.current && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg text-xs font-bold rounded-full">
                      Current
                    </span>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-light-primary dark:text-dark-accent font-medium mb-2">
                    {exp.company}
                  </p>

                  <p className="text-black/70 dark:text-light-bg/80 mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm flex gap-2"
                      >
                        <span className="text-light-primary dark:text-dark-accent">
                          •
                        </span>
                        <span>{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

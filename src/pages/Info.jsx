import { motion } from "framer-motion";
import { useScrollZoom } from "../hooks/useScrollZoom";
import Footer from "../components/Footer";
import LocationMap from "../components/LocationMap";
const Info = () => {
  const scale = useScrollZoom();

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Shadan College of Engineering and Technology, JNTUH",
      period: "2021 – 2025",
      grade: "66%",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior Kalasala, Hyderabad",
      period: "2019 – 2021",
      grade: "65%",
    },
    {
      degree: "Class X (CBSE)",
      institution: "Azra Public School, Hyderabad",
      period: "2019",
      grade: "78%",
    },
  ];

  const skills = {
    "Frontend Development": [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Implementation",
    ],
    "State Management": [
      "React Hooks",
      "Context API",
      "Redux (Basics)",
      "Component State",
    ],
    "Tools & Technologies": [
      "Git & GitHub",
      "Postman",
      "Jira",
      "Figma",
      "VS Code",
      "Chrome DevTools",
    ],
    "Backend Exposure": [
      "REST APIs",
      "JSON",
      "API Integration",
      "Core Java",
      "SQL",
    ],
    Methodologies: [
      "Agile/Scrum",
      "SDLC",
      "Component-Based Architecture",
      "Version Control",
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Zoom Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale }}
          className="max-w-4xl mx-auto px-6 text-center "
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold pb-5 mb-8 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent"
          >
            Hey, I'm Shifa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed"
          >
            A passionate{" "}
            <span className="text-light-primary dark:text-dark-accent font-semibold">
              Frontend Developer
            </span>{" "}
            from Hyderabad, India. I build responsive, user-focused web
            applications that combine clean code with intuitive design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-sm text-light-textSecondary dark:text-dark-textSecondary"
          >
            <p>Scroll down to learn more ↓</p>
          </motion.div>
        </motion.div>
      </section>

      {/* My Journey */}
      <section className="relative py-22 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
              My Journey
            </h2>

            <div className="space-y-6 text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              <p>
                My journey into tech began with curiosity about how websites
                work. What started as tinkering with HTML and CSS evolved into a
                deep passion for creating seamless digital experiences.
              </p>

              <p>
                During my time at ROBOWAVES, I've had the opportunity to work on
                real-world projects, collaborating with cross-functional teams
                to build role-based dashboards and integrate complex REST APIs.
                This experience has taught me not just about code, but about
                building solutions that truly matter to users.
              </p>

              <p>
                I believe in writing clean, maintainable code and staying
                curious about new technologies. Whether it's implementing a new
                design system, optimizing performance, or learning the latest
                React features, I'm always eager to grow and improve.
              </p>

              <p>
                Beyond coding, I'm passionate about collaborative work
                environments and Agile methodologies. I love being part of a
                team where ideas flow freely and everyone is working towards
                creating something meaningful.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Deep Dive */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary max-w-3xl">
              A comprehensive look at my technical toolkit and areas of
              expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-light-accent/20 dark:bg-dark-accent/10 border border-light-primary/30 dark:border-dark-primary/30 rounded-full text-sm text-light-text dark:text-dark-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      {/* <section className="relative py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary">
              My academic background and qualifications
            </p>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
                  {edu.degree}
                </h3>
                <p className="text-light-primary dark:text-dark-accent font-medium mb-2">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-4 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  <span>📅 {edu.period}</span>
                  <span>•</span>
                  <span>📊 {edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Philosophy */}
      <section className="relative pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-3xl text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-light-text dark:text-dark-text">
              My Philosophy
            </h2>
            <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed italic">
              Build simple things well. Focus on clarity, usability and steady
              improvement over perfection.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="pb-20">
        <LocationMap />
      </div>

      <Footer />
    </div>
  );
};

export default Info;

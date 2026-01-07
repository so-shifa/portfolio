import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { projects } from "../utils/projectData";

const Projects = () => {
  const { ref, opacity, y } = useScrollAnimation(0.2);
  const navigate = useNavigate();

  return (
    <section id="projects" ref={ref} className="relative py-10 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div style={{ opacity, y }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-black/70 dark:text-light-bg/80 max-w-2xl mx-auto">
            Showcasing my best work in frontend development
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group relative glass rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-light-primary dark:group-hover:text-dark-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-black/70 dark:text-light-bg/80 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-light-primary dark:text-dark-accent font-medium">
                  <span>View Project</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

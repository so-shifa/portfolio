import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { projects } from "../utils/projectData";

const Projects = () => {
  const { ref, opacity, y } = useScrollAnimation(0.2);
  const navigate = useNavigate();

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div style={{ opacity, y }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="opacity-70 max-w-2xl mx-auto">
            Selected work focused on UI, interaction, and real-world frontend
            systems
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => {
            const preview = project.media?.[0];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="group glass rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Media */}
                <div className="relative h-72 overflow-hidden">
                  {preview?.type === "video" ? (
                    <video
                      src={preview.src}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={preview?.src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="opacity-70 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 font-medium text-light-primary">
                    <span>View Project</span>
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

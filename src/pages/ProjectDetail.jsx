import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectById, projects } from "../utils/projectData";
import Footer from "../components/Footer";

const ProjectDetail = () => {
 const { slug } = useParams();
  const navigate = useNavigate();
 const project = getProjectById(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 glass rounded-full font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

 const currentIndex = projects.findIndex((p) => p.id === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-accent transition-colors"
        >
          <span>←</span>
          <span>Back to Home</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-3xl overflow-hidden glass"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="px-3 py-1 glass text-sm font-bold rounded-full text-light-primary dark:text-dark-accent">
                  {project.role}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
                {project.title}
              </h1>

              <p className="text-xl text-light-primary dark:text-dark-accent font-medium">
                {project.tagline}
              </p>

              <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex items-center gap-4 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                <span>⏱️ {project.timeline}</span>
                <span>•</span>
                <span>👤 {project.role}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-light-accent/20 dark:bg-dark-accent/10 border border-light-primary/30 dark:border-dark-primary/30 rounded-full text-sm font-medium text-light-text dark:text-dark-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl flex items-start gap-4"
                >
                  <span className="text-2xl">✓</span>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">
              Challenges & Solutions
            </h2>
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              {project.challenges}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-8 text-center">
              Next Project
            </h2>
            <Link to={`/projects/${nextProject.id}`} className="block group">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass p-6 rounded-3xl overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="h-48 rounded-2xl overflow-hidden">
                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2 group-hover:text-light-primary dark:group-hover:text-dark-accent transition-colors">
                      {nextProject.title}
                    </h3>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                      {nextProject.description}
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
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

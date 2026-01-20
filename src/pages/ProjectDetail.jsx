import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { getProjectById, projects } from "../utils/projectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = getProjectById(id);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="opacity-70">Project not found</p>
      </div>
    );
  }

  /* ---------------- MEDIA ---------------- */
  const media = project.media || [];
  const activeMedia = media[activeIndex];

  /* ---------------- NEXT PROJECT LOGIC ---------------- */
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const nextPreview = nextProject.media?.[0];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Back */}
      <Link
        to="/"
        className="inline-block mb-10 text-sm opacity-60 hover:opacity-100 transition"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
        <p className="max-w-3xl text-lg opacity-70">{project.description}</p>
      </motion.div>

      {/* Media Section */}
      <div className="grid lg:grid-cols-[3fr_1fr] gap-10 mb-24">
        {/* Main Media */}
        <div className="glass rounded-3xl overflow-hidden">
          {activeMedia?.type === "video" ? (
            <video
              src={activeMedia.src}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={activeMedia?.src}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative min-w-[120px] aspect-video rounded-xl overflow-hidden transition border ${
                index === activeIndex
                  ? "border-light-primary scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  muted
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
        {/* Left */}
        <div className="space-y-14">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Overview</h2>
            <p className="text-lg leading-relaxed opacity-80">
              {project.longDescription}
            </p>
          </div>

          {project.features?.length > 0 && (
            <div>
              <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <li key={feature} className="glass rounded-xl px-5 py-4">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div>
              <h2 className="text-3xl font-semibold mb-4">Challenges</h2>
              <p className="opacity-80 leading-relaxed">{project.challenges}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Project Info</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {project.role && <li>Role: {project.role}</li>}
              {project.timeline && <li>Timeline: {project.timeline}</li>}
            </ul>
          </div>

          {project.figma && (
            <a
              href={project.figma.link}
              target="_blank"
              rel="noreferrer"
              className="group block glass rounded-2xl overflow-hidden"
            >
              <img
                src={project.figma.preview}
                alt="Figma Design"
                className="h-44 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-4 text-sm opacity-80">Open Figma Design →</div>
            </a>
          )}

          {project.techStack?.length > 0 && (
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs glass"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🔥 NEXT PROJECT */}
      <div className="mt-32">
        <h2 className="text-3xl font-semibold mb-8">Next Project</h2>

        <motion.div
          whileHover={{ y: -6 }}
          onClick={() => navigate(`/projects/${nextProject.id}`)}
          className="group grid md:grid-cols-2 gap-8 glass rounded-3xl overflow-hidden cursor-pointer"
        >
          <div className="h-64 overflow-hidden">
            {nextPreview?.type === "video" ? (
              <video
                src={nextPreview.src}
                muted
                autoPlay
                loop
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={nextPreview?.src}
                alt={nextProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            )}
          </div>

          <div className="p-8 flex flex-col justify-center">
            <p className="text-sm opacity-60 mb-2">Up Next</p>
            <h3 className="text-2xl font-bold mb-3">{nextProject.title}</h3>
            <p className="opacity-70 mb-4 line-clamp-3">
              {nextProject.description}
            </p>
            <span className="text-light-primary font-medium">
              View Project →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;

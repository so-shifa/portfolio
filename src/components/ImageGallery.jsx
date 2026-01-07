import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ImageGallery = () => {
  const { ref, opacity, y } = useScrollAnimation(0.2);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      title: "Clean Code",
      description: "Writing maintainable code",
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      title: "Development",
      description: "Building web applications",
    },
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
      title: "Workspace",
      description: "Where magic happens",
    },
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      title: "Collaboration",
      description: "Team work makes dream work",
    },
    {
      url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      title: "Design",
      description: "UI/UX focused",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div style={{ opacity, y }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-black/70 dark:text-light-bg/80 max-w-2xl mx-auto">
            A glimpse into my development journey
          </p>
         
        </motion.div>

        {/* Gallery */}
        <div className="relative ">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 py-10 scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none" }}
          >
            {images.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative flex-shrink-0 w-80 h-96 group"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden glass">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-light-bg/90 via-light-bg/40 to-transparent dark:from-dark-bg/90 dark:via-dark-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-black/70 dark:text-light-bg/80">
                      {image.description}
                    </p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-12 h-12 glass rounded-full flex items-center justify-center font-bold text-light-primary dark:text-dark-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-0 left-0 bottom-8 w-20 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-8 w-20 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;

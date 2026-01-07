import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/info" },
        { name: "Projects", path: "/#projects" },
        { name: "Contact", path: "/#contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "GitHub", path: "https://github.com/so-shifa", external: true },
        { name: "LinkedIn", path: "#", external: true },
        {
          name: "Email",
          path: "mailto:shifa.codess@gmail.com",
          external: true,
        },
      ],
    },
  ];

  const scrollToSection = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-light-primary/20 dark:border-dark-primary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-light-primary/5 dark:bg-dark-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/">
              <motion.h3
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
                  shifa
                </span>
              </motion.h3>
            </Link>
            <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
              Frontend Developer crafting beautiful and functional web
              experiences.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-light-accent dark:bg-dark-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-light-accent dark:bg-dark-accent"></span>
              </span>
              <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                Available for work
              </span>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-light-text dark:text-dark-text mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-accent transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={(e) => scrollToSection(e, link.path)}
                        className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-accent transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-light-primary/50 dark:via-dark-primary/50 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
            © {currentYear} Shifa Tasneem. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-light-textSecondary dark:text-dark-textSecondary">
            <span>Built with React & Tailwind CSS</span>
            <span>•</span>
            <motion.a
              href="https://github.com/so-shifa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="hover:text-light-primary dark:hover:text-dark-accent transition-colors"
            >
              View Source
            </motion.a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center text-xl shadow-lg z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Info", path: "/info" },
  { label: "Work", id: "projects", scroll: true },
  { label: "Contact", id: "contact", scroll: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleScrollLink = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "glass" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
              shifa
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.scroll ? (
                <button
                  key={link.label}
                  onClick={() => handleScrollLink(link.id)}
                  className="text-black/70 dark:text-light-bg/80 hover:text-light-primary dark:hover:text-light-accent"
                >
                  {link.label}
                </button>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-light-primary dark:text-light-accent"
                      : "text-black/70 dark:text-light-bg/80 hover:text-light-primary dark:hover:text-light-accent"
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}

            {/* ✅ THEME TOGGLE (FIXED & SIMPLE) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative w-14 h-7 rounded-full glass flex items-center p-1"
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-light-primary dark:bg-light-accent"
                animate={{ x: isDark ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full glass flex items-center p-1"
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-light-primary dark:bg-light-accent"
                animate={{ x: isDark ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>

            <button onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) =>
                link.scroll ? (
                  <button
                    key={link.label}
                    onClick={() => handleScrollLink(link.id)}
                    className="block w-full text-left text-black/70 dark:text-light-bg/80"
                  >
                    {link.label}
                  </button>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="block text-black/70 dark:text-light-bg/80"
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

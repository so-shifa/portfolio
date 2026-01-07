import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ContactForm = () => {
  const { ref, opacity, y } = useScrollAnimation(0.2);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await new Promise((r) => setTimeout(r, 1500));
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div style={{ opacity, y }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-black/70 dark:text-light-bg/80 max-w-2xl mx-auto">
            Have a project in mind? Let's work together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 glass rounded-xl"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 glass rounded-xl"
                required
              />
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 glass rounded-xl resize-none"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-light-bg dark:text-dark-bg font-bold rounded-xl"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-4">Let’s Connect</h3>
            <p className="text-black/70 dark:text-light-bg/80">
              Hyderabad, India
              <br />
              shifa.codess@gmail.com
              <br />
              +91 9515591776
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

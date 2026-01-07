const Contact = () => {
  return (
    <section className="py-32 text-center">
      <h2 className="heading text-4xl mb-6">Let’s Connect</h2>

      <p className="text-muted mb-10">
        Open to frontend roles, collaborations and creative projects.
      </p>

      <a
        href="mailto:yourmail@gmail.com"
        className="inline-block px-10 py-4 rounded-full
        bg-gradient-to-br from-[#E6DADA] to-[#274046]
        text-black font-medium hover:scale-105 transition"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;

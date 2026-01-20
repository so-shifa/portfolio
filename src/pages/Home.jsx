import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ImageGallery from "../components/ImageGallery";
import ContactForm from "../components/ContactForm";
import LocationMap from "../components/LocationMap";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      {/* <ImageGallery /> */}
      <ContactForm />
      <LocationMap />
      <Footer />
    </main>
  );
};

export default Home;

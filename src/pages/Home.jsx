import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ImageGallery from "../components/ImageGallery";
import ContactForm from "../components/ContactForm";
import LocationMap from "../components/LocationMap";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <ImageGallery />
      <ContactForm />
      <LocationMap />
      <Footer />
    </main>
  );
};

export default Home;

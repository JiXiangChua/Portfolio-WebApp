import AboutSection from "./ui/sections/About";
import EngagedSection from "./ui/sections/Engaged";
import Footer from "./ui/sections/Footer";
import HeroBanner from "./ui/sections/HeroBanner";
import ProjectsSection from "./ui/sections/Projects";

export default function HomePage() {
  return (
    <main className="container">
      <section id="hero">
        <HeroBanner />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="engaged">
        <EngagedSection />
      </section>
      <footer id="photography">
        <Footer />
      </footer>
    </main>
  );
}

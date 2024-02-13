import AboutSection from "./ui/sections/About";
import EngagedSection from "./ui/sections/Engaged";
import Footer from "./ui/sections/Footer";
import HeroBanner from "./ui/sections/HeroBanner";

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
        <p>Projects</p>
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

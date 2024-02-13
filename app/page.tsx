import HeroBanner from "./ui/sections/HeroBanner";

export default function HomePage() {
  return (
    <main>
      <section id="hero">
        <HeroBanner />
      </section>
      <section id="introduction">
        <p>Introduction</p>
      </section>
      <section id="projects">
        <p>Projects</p>
      </section>
      <section id="engaged">
        <p>Engaged</p>
      </section>
      <footer id="photography">
        <p>Footer - photography</p>
      </footer>
    </main>
  );
}

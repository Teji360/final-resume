import Hero from "./components/Hero";
import Education from "./components/Education";
import Work from "./components/Work"
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div className="bg-black snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen">

      <section id="hero" className="snap snap-center">
        <Hero />
      </section>

      <section id="education" className="snap snap-center">
        <Education />
      </section>

      <section id="work" className="snap snap-center">
        <Work />
      </section>

      <section id="projects" className="snap snap-center">
        <Projects />
      </section>
      
    </div>
  );
}

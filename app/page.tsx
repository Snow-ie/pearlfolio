import Skills from "./components/Skills";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </>
  );
}

import type { Metadata } from "next";
import { ProjectCard } from "../project-card";
import { allProjects } from "../project-data";
import Link from "next/link";
import { WebGLAura } from "../experience-layer";

export const metadata: Metadata = {
  title: "Projects | Zubair Zafar",
  description: "Explore 17 software engineering and applied AI projects built by Zubair Zafar.",
};

export default function ProjectsPage() {
  return (
    <>
      <a className="skipLink" href="#project-catalog">Skip to project catalog</a>
      <main>
        <nav className="nav shell" aria-label="Primary navigation">
          <Link className="wordmark" href="/" aria-label="Zubair Zafar home">
            ZZ<span>.</span>
          </Link>
          <div className="navLinks">
            <Link href="/">Home</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#about">About</Link>
            <a href="/Zubair-Zafar-CV.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="mailto:zubairzafar480@gmail.com">Contact</a>
          </div>
        </nav>

        <header className="projectsHero shell" id="top">
          <WebGLAura />
          <p className="kicker" data-reveal><span className="statusDot" /> Complete project catalog</p>
          <h1 data-reveal>Seventeen builds. <span className="heroAccent">One habit of shipping.</span></h1>
          <div className="projectsHeroFooter" data-reveal>
            <p>Hackathon systems and research tools sit beside mobile products and developer platforms. Each project starts with a real problem and ends with working software.</p>
            <div>
              <strong>{allProjects.length}</strong>
              <span>projects</span>
            </div>
          </div>
        </header>

        <section className="section projectsCatalog" id="project-catalog">
          <div className="shell">
            <div className="catalogIntro" data-reveal>
              <p className="eyebrow">All work</p>
              <p>Open any project to view its source and learn how it was built.</p>
            </div>
            <div className="projectGrid">
              {allProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
          </div>
        </section>

        <section className="projectsContact">
          <div className="shell" data-reveal>
            <p>Have a project in mind?</p>
            <a href="mailto:zubairzafar480@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <footer className="footer shell">
          <p>© 2026 Zubair Zafar</p>
          <div>
            <Link href="/">Home</Link>
            <a href="https://github.com/zubair480" target="_blank" rel="noreferrer">GitHub</a>
            <a href="/Zubair-Zafar-CV.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}

import type { Metadata } from "next";
import { ProjectCard } from "../project-card";
import { allProjects } from "../project-data";
import Link from "next/link";
import { WebGLAura } from "../experience-layer";

const projectCategories = [
  {
    id: "agentic-ai",
    label: "Agentic AI and research",
    description:
      "Autonomous agents and evidence systems built for trustworthy decisions and faster research.",
  },
  {
    id: "products-and-tools",
    label: "Products and developer tools",
    description:
      "Full stack products and tools that remove friction from everyday work.",
  },
  {
    id: "mobile-vision-learning",
    label: "Mobile vision and learning",
    description:
      "Private mobile experiences that use vision audio and structured learning.",
  },
] as const;

const hackathonWins = [
  {
    placement: "2nd place",
    event: "CrewAI Hackathon",
    project: "ROOT",
    description:
      "Fourteen autonomous agents coordinate employee onboarding from a single Zendesk request.",
    proof: "A week of provisioning compressed into minutes",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7487710934313013248/",
  },
  {
    placement: "2nd place",
    event: "Auth0 × Stripe Hackathon",
    project: "Clip Police",
    description:
      "A multi-agent creator protection platform that finds unauthorized video reposts across the web.",
    proof: "Podium finish at Okta’s San Francisco headquarters",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7488853520134107136/",
  },
  {
    placement: "1st place",
    event: "Amadeus × Etihad",
    project: "Smart CPM Parser",
    description:
      "A cargo-message parser that validates and corrects operational CPM messages before they reach production workflows.",
    proof: "95% fewer entry errors · shipped into production",
    href: "https://github.com/zubair480/amadeus_hackathon2",
  },
] as const;

export const metadata: Metadata = {
  title: "Projects | Zubair Zafar",
  description:
    "Explore 20 software engineering and applied AI projects, including three hackathon-winning builds by Zubair Zafar.",
};

export default function ProjectsPage() {
  return (
    <>
      <a className="skipLink" href="#project-catalog">Skip to project catalog</a>
      <main>
        <nav className="nav shell" aria-label="Primary navigation">
          <Link className="wordmark" href="/" aria-label="Zubair Zafar home">
            <span className="wordmarkMonogram" aria-hidden="true">
              <span>Z</span><span>Z</span>
            </span>
            <span className="wordmarkName" aria-hidden="true">
              <strong>Zubair Zafar</strong>
              <small>Software Engineer</small>
            </span>
          </Link>
          <div className="navLinks">
            <Link href="/">Home</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#about">About</Link>
            <a href="/zubair_cv.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="mailto:zubairzafar480@gmail.com">Contact</a>
          </div>
        </nav>

        <header className="projectsHero shell" id="top">
          <WebGLAura />
          <p className="kicker" data-reveal><span className="statusDot" /> 3× hackathon winner · complete project catalog</p>
          <h1 data-reveal>Twenty builds. <span className="heroAccent">One habit of shipping.</span></h1>
          <div className="projectsHeroFooter" data-reveal>
            <p>Hackathon systems and research tools sit beside mobile products and developer platforms. Each project starts with a real problem and ends with working software.</p>
            <div>
              <strong>{allProjects.length}</strong>
              <span>projects</span>
            </div>
          </div>
        </header>

        <section className="hackathonSpotlight" aria-labelledby="hackathon-wins-title">
          <div className="shell">
            <div className="hackathonSpotlightHeader" data-reveal>
              <p className="eyebrow">Hackathon record</p>
              <div className="hackathonStatement">
                <strong aria-hidden="true">3×</strong>
                <h2 id="hackathon-wins-title">Three hackathon wins. Built under pressure.</h2>
              </div>
              <p>
                From autonomous agents to aviation operations, each podium finish
                started with a working product and ended with measurable impact.
              </p>
            </div>

            <div className="hackathonWinGrid">
              {hackathonWins.map((win, index) => (
                <a
                  className="hackathonWinCard"
                  href={win.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${win.project}, ${win.placement} at ${win.event}`}
                  data-reveal
                  key={win.project}
                >
                  <div className="hackathonWinTop">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{win.placement}</span>
                  </div>
                  <p className="hackathonEvent">{win.event}</p>
                  <h3>{win.project}</h3>
                  <p className="hackathonWinDescription">{win.description}</p>
                  <div className="hackathonWinProof">
                    <span>{win.proof}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section projectsCatalog" id="project-catalog">
          <div className="shell">
            <div className="catalogIntro" data-reveal>
              <p className="eyebrow">Browse by category</p>
              <p>Every project is here. Choose an area or explore the full catalog.</p>
            </div>

            <nav className="categoryNav" aria-label="Project categories" data-reveal>
              {projectCategories.map((category) => {
                const count = allProjects.filter(
                  (project) => project.category === category.label,
                ).length;

                return (
                  <a href={`#${category.id}`} key={category.id}>
                    {category.label}
                    <span>{count}</span>
                  </a>
                );
              })}
            </nav>

            <div className="projectCategoryStack">
              {projectCategories.map((category, index) => {
                const projects = allProjects.filter(
                  (project) => project.category === category.label,
                );

                return (
                  <section className="projectCategory" id={category.id} key={category.id}>
                    <div className="projectCategoryHeader" data-reveal>
                      <p className="projectCategoryIndex">
                        {String(index + 1).padStart(2, "0")} / {projects.length}
                      </p>
                      <h2>{category.label}</h2>
                      <p>{category.description}</p>
                    </div>
                    <div className="projectGrid">
                      {projects.map((project) => (
                        <ProjectCard project={project} key={project.title} />
                      ))}
                    </div>
                  </section>
                );
              })}
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
            <a href="/zubair_cv.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}

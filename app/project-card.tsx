import type { Project } from "./project-data";

export function ProjectCard({ project }: { project: Project }) {
  const mediaHref = project.liveHref ?? project.href;

  return (
    <article className="projectCard" data-reveal>
      <a
        className="projectMedia"
        href={mediaHref}
        target="_blank"
        rel="noreferrer"
        aria-label={project.liveHref ? `Open ${project.title} live` : `View ${project.title} project`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- Project screenshots are optimized local WebP assets. */}
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1200"
          height="675"
          loading="lazy"
          style={{ objectPosition: project.imagePosition ?? "center" }}
        />
        {project.liveHref ? (
          <span className="projectLiveBadge"><i aria-hidden="true" /> Live</span>
        ) : null}
        <span className="projectMediaLaunch" aria-hidden="true">↗</span>
      </a>

      <div className="projectCardBody">
        <div className="projectTop">
          <span className="projectNumber">{project.number}</span>
          <span className="projectLaunch" aria-hidden="true">↗</span>
        </div>
        <p className="projectEyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="projectDescription">{project.description}</p>
        <p className="projectProof">{project.proof}</p>
        <ul className="tagList" aria-label={`${project.title} technologies`}>
          {project.stack.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="projectActions">
          {project.liveHref ? (
            <a
              className="projectAction projectActionLive"
              href={project.liveHref}
              target="_blank"
              rel="noreferrer"
            >
              {project.liveLabel ?? "Live demo"} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          <a
            className="projectAction projectActionSource"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            {project.linkLabel ?? "Source code"} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

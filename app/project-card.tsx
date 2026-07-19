import type { Project } from "./project-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      className="projectCard"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${project.title} project`}
      data-reveal
    >
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
    </a>
  );
}

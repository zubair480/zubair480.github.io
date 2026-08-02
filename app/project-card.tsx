import type { Project } from "./project-data";

function ProjectImage({ project }: { project: Project }) {
  if (!project.image || !project.imageAlt) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- Project screenshots are optimized local WebP assets.
    <img
      className="projectImage"
      src={project.image}
      alt={project.imageAlt}
      width={project.presentation === "mobile" ? 415 : 1400}
      height={project.presentation === "mobile" ? 900 : 633}
      loading="lazy"
      decoding="async"
      style={{ objectPosition: project.imagePosition ?? "center" }}
    />
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.presentation === "browser") {
    return (
      <div className="projectBrowserStage">
        <div className="projectBrowserFrame">
          <div className="projectBrowserBar" aria-hidden="true">
            <span className="browserDots"><i /><i /><i /></span>
            <span className="browserAddress">estateagent.ai / analyze</span>
            <span className="browserSecure">Secure</span>
          </div>
          <div className="projectBrowserScreen">
            <ProjectImage project={project} />
          </div>
        </div>
      </div>
    );
  }

  if (project.presentation === "mobile") {
    return (
      <div className="projectMobileStage">
        <div className="projectMobileNotes" aria-hidden="true">
          <span>Device-native</span>
          <strong>Safety guidance<br />without the cloud.</strong>
          <ul>
            <li>Offline inference</li>
            <li>Camera evidence</li>
            <li>Private by design</li>
          </ul>
        </div>
        <div className="projectPhone">
          <span className="projectPhoneSpeaker" aria-hidden="true" />
          <ProjectImage project={project} />
          <span className="projectPhoneHome" aria-hidden="true" />
        </div>
      </div>
    );
  }

  if (project.presentation === "audit") {
    return (
      <div
        className="projectAuditStage"
        role="img"
        aria-label="AgenticAudit compliance evidence pipeline from web scan to verified risk report"
      >
        <div className="auditHeader">
          <span>AgenticAudit / evidence console</span>
          <strong><i aria-hidden="true" /> Pipeline live</strong>
        </div>
        <div className="auditFlow" aria-hidden="true">
          <div><small>01</small><strong>Scan</strong><span>Live web data</span></div>
          <b>→</b>
          <div><small>02</small><strong>Verify</strong><span>Rules + RAG</span></div>
          <b>→</b>
          <div><small>03</small><strong>Evidence</strong><span>Audit-ready</span></div>
        </div>
        <div className="auditFooter" aria-hidden="true">
          <span>GDPR</span><span>SOC 2</span><span>HIPAA</span><span>PCI</span>
          <strong>Risk ↓</strong>
        </div>
      </div>
    );
  }

  return <ProjectImage project={project} />;
}

export function ProjectCard({ project }: { project: Project }) {
  const mediaHref = project.liveHref ?? project.href;
  const presentation = project.presentation ?? "image";

  return (
    <article className={`projectCard projectCard--${presentation}`} data-reveal>
      <a
        className={`projectMedia projectMedia--${presentation}`}
        href={mediaHref}
        target="_blank"
        rel="noreferrer"
        aria-label={project.liveHref ? `Open ${project.title} live` : `View ${project.title} project`}
      >
        <ProjectVisual project={project} />
        {project.liveHref ? (
          <span className="projectLiveBadge"><i aria-hidden="true" /> Live website</span>
        ) : null}
        <span className="projectMediaLaunch" aria-hidden="true">↗</span>
      </a>

      <div className="projectCardBody">
        <div className="projectTop">
          <span className="projectNumber">{project.number}</span>
          <span className="projectFormat">
            {project.presentation === "browser"
              ? "Web product"
              : project.presentation === "mobile"
                ? "Mobile app"
                : project.presentation === "audit"
                  ? "System"
                  : "Project"}
          </span>
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

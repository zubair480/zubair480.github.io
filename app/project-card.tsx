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

function ProjectConceptVisual({ project }: { project: Project }) {
  const kind = project.visual;

  return (
    <div
      className={`projectConceptStage projectConceptStage--${kind}`}
      role="img"
      aria-label={`Product interface illustration for ${project.title}`}
    >
      {kind === "judge" ? (
        <>
          <div className="conceptBar"><span>JudgeAgent / handoff 04</span><strong>Verdict ready</strong></div>
          <div className="judgeVisual">
            <div className="judgeScore"><strong>92</strong><span>Evidence score</span></div>
            <div className="judgeRubric" aria-hidden="true">
              <span><i>Goal fit</i><b>Pass</b></span>
              <span><i>Evidence</i><b>Pass</b></span>
              <span><i>Safety</i><b>Review</b></span>
            </div>
          </div>
        </>
      ) : null}

      {kind === "research" ? (
        <>
          <div className="conceptBar"><span>Thread / paper 07</span><strong>Local model</strong></div>
          <div className="researchVisual" aria-hidden="true">
            <div className="researchPaper"><small>Methodology</small><i /><i /><i /><b>Grounded summary</b></div>
            <div className="researchGraph">
              <span className="graphLine graphLineOne" /><span className="graphLine graphLineTwo" />
              <i className="graphNode graphNodeOne" /><i className="graphNode graphNodeTwo" /><i className="graphNode graphNodeThree" />
              <strong>Knowledge<br />graph</strong>
            </div>
          </div>
        </>
      ) : null}

      {kind === "flashcard" ? (
        <>
          <div className="conceptBar"><span>FlashCard / generated 024</span><strong>Scan ready</strong></div>
          <div className="flashcardVisual" aria-hidden="true">
            <div className="networkCard networkCardBack" />
            <div className="networkCard networkCardFront">
              <small>AI BUILDER</small><strong>ZZ</strong><span>San Francisco</span>
              <i className="qrMark" />
            </div>
            <p>Profile → card → lead</p>
          </div>
        </>
      ) : null}

      {kind === "compatibility" ? (
        <>
          <div className="conceptBar"><span>Compatibility / model scan</span><strong>Supported</strong></div>
          <div className="compatibilityVisual" aria-hidden="true">
            <div className="compatModel"><small>INPUT</small><strong>ResNet-50</strong><span>ONNX · FP16</span></div>
            <b>→</b>
            <div className="compatMatrix">
              <span><i>Conv2D</i><b>✓</b></span><span><i>BatchNorm</i><b>✓</b></span><span><i>Runtime</i><b>Ready</b></span>
            </div>
          </div>
        </>
      ) : null}

      {kind === "loan" ? (
        <>
          <div className="conceptBar"><span>Micro Loan / live offer</span><strong>Private</strong></div>
          <div className="loanVisual" aria-hidden="true">
            <div className="loanOffer"><small>Your offer</small><strong>$2,400</strong><span><i /> 12 months</span></div>
            <div className="loanTerms"><span>Monthly <b>$218</b></span><span>APR <b>8.9%</b></span><i /><em>Adjust terms</em></div>
          </div>
        </>
      ) : null}

      {kind === "hifz" ? (
        <>
          <div className="conceptBar"><span>Hifz / daily review</span><strong>Offline</strong></div>
          <div className="hifzVisual" aria-hidden="true">
            <div className="hifzProgress"><strong>12</strong><span>verses due</span></div>
            <div className="hifzSession"><small>Surah progress</small><i /><i /><i /><span>Listen · Recite · Review</span></div>
          </div>
        </>
      ) : null}

      {kind === "signal" ? (
        <>
          <div className="conceptBar"><span>Signal SF / Saturday</span><strong>3 matches</strong></div>
          <div className="signalVisual" aria-hidden="true">
            <div className="signalMap"><i className="mapRoute" /><b className="mapPin mapPinOne" /><b className="mapPin mapPinTwo" /><b className="mapPin mapPinThree" /></div>
            <div className="signalPlan"><span><small>10:00</small> Design meetup</span><span><small>14:30</small> AI builders</span><b>No conflicts</b></div>
          </div>
        </>
      ) : null}

      {kind === "creative" ? (
        <>
          <div className="conceptBar"><span>Codic / voice canvas</span><strong>Generating</strong></div>
          <div className="creativeVisual" aria-hidden="true">
            <div className="voiceWave">{Array.from({ length: 13 }, (_, index) => <i key={index} />)}</div>
            <b>→</b>
            <div className="creativeCanvas"><span /><span /><strong>Prompt<br />to image</strong></div>
          </div>
        </>
      ) : null}
    </div>
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

  if (project.presentation === "concept") {
    return <ProjectConceptVisual project={project} />;
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
                  : project.presentation === "concept"
                    ? "Product"
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

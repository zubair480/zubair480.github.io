/* eslint-disable @next/next/no-img-element -- Small local brand marks keep the static GitHub Pages output simple. */
import { ProjectCard } from "./project-card";
import { allProjects, featuredProjects } from "./project-data";
import { WebGLAura } from "./experience-layer";
import { HeroAward } from "./hero-award";
import { SiteFooter } from "./site-footer";

const capabilities = [
  {
    label: "01 / Product engineering",
    title: "Full stack systems people enjoy using",
    copy: "I work from interface decisions through APIs and data models. The result is a clear path from idea to reliable product.",
    tools: "React · Node.js · Python · SQL",
  },
  {
    label: "02 / Applied AI",
    title: "AI that earns its place in the workflow",
    copy: "I work across agents and computer vision plus local models and evaluation. Every choice stays anchored to evidence and a real user need.",
    tools: "PyTorch · LLMs · RAG · OpenCV",
  },
  {
    label: "03 / Platforms",
    title: "Infrastructure that stays out of the way",
    copy: "I design fast APIs and resilient edge pipelines. My developer tools make complex systems easier to operate.",
    tools: "Cloudflare · Docker · CI/CD · REST",
  },
];

const experience = [
  {
    period: "Since 2024",
    company: "Eastern Illinois University",
    logo: "/experience/eastern-illinois-university.webp",
    logoAlt: "Eastern Illinois University logo",
    logoWidth: 500,
    logoHeight: 453,
    logoClass: "experienceLogoEiu",
    role: "Graduate Assistant · Software Engineer",
    detail:
      "Building and operating APIs for 7K+ active users while researching deep learning systems for medical imaging.",
    highlights: [
      "Architected REST APIs with role based access for 7K+ active users. Query optimization and database indexing cut response time by 65%.",
      "Integrated Twilio SMS and automated workflows. This reduced manual data entry by 40% and request processing time by 25%.",
      "Containerized services with Docker and partnered with systems teams on dependable CI/CD deployments.",
      "Trained YOLOv8 and PyTorch models on 80K+ MRI scans. The system reached 97.2% test accuracy and a 95.8% F1 score.",
    ],
  },
  {
    period: "2023 to 2024",
    company: "WPBrigade",
    logo: "/experience/wpbrigade.webp",
    logoAlt: "WPBrigade logo",
    logoWidth: 520,
    logoHeight: 114,
    logoClass: "experienceLogoWpbrigade",
    role: "Backend Software Engineer",
    detail:
      "Shipped production WordPress products with 15K+ active installations and mentored the next cohort of developers.",
    highlights: [
      "Developed and maintained 5+ production plugins with custom APIs plus optimized schemas and webhook integrations.",
      "Built a modular PHP and MySQL framework used by 200+ nontechnical users. It reduced deployment time by 60%.",
      "Mentored three junior developers and delivered secure coding bootcamps reaching 100+ students.",
    ],
  },
  {
    period: "2023",
    company: "Etihad Aviation Group",
    logo: "/experience/etihad-airways.webp",
    logoAlt: "Etihad Airways logo",
    logoWidth: 620,
    logoHeight: 220,
    logoClass: "experienceLogoEtihad",
    role: "Software Engineering Intern",
    detail:
      "Productionized a hackathon winning cargo parser that eliminated 95% of data entry errors and reduced manual processing.",
    highlights: [
      "Scaled Smart CPM Parser from a winning prototype into a production tool. Manual processing fell by 30%.",
      "Replaced paper workflows with Power Apps and Power Automate. Cargo data accuracy improved by 40%.",
      "Combined Timatic APIs with spaCy to verify travel requirements for 200+ countries in real time.",
      "Created a developer tool that generated UML diagrams from Python codebases for 15+ internal projects.",
    ],
  },
  {
    period: "2022 to 2023",
    company: "CarChaze",
    logo: "/experience/carchaze.webp",
    logoAlt: "CarChaze logo",
    logoWidth: 400,
    logoHeight: 400,
    logoClass: "experienceLogoCarchaze",
    role: "Software Engineer",
    detail:
      "Built the marketplace experience and core APIs for a vehicle platform serving 2K+ monthly users.",
    highlights: [
      "Developed the MERN marketplace experience with MongoDB plus Express and React with Node.js.",
      "Engineered 10+ core REST endpoints and improved data processing performance by 15%.",
      "Managed Firebase and Heroku deployments through continuous integration and delivery workflows.",
    ],
  },
];

const recognition = [
  {
    result: "4th place",
    title: "Google Code Jam",
    logo: "/recognition/google-code-jam.webp",
    logoAlt: "Google Code Jam logo",
    logoWidth: 500,
    logoHeight: 225,
    logoClass: "recognitionLogoCodeJam",
    detail: "Placed 1622 worldwide in an international problem solving competition.",
  },
  {
    result: "16th place",
    title: "Meta Hacker Cup",
    logo: "/recognition/meta-hacker-cup.webp",
    logoAlt: "Meta Hacker Cup logo",
    logoWidth: 600,
    logoHeight: 93,
    logoClass: "recognitionLogoMeta",
    detail: "Earned a national top 20 placement in 2023.",
  },
  {
    result: "25 days",
    title: "Advent of Code",
    logo: "/recognition/advent-of-code.webp",
    logoAlt: "Advent of Code star logo",
    logoWidth: 128,
    logoHeight: 128,
    logoClass: "recognitionLogoAdvent",
    detail: "Completed the full 2022 challenge through daily algorithmic problem solving.",
  },
  {
    result: "Team lead",
    title: "CS50 Puzzle Day",
    logo: "/recognition/cs50-puzzle-day.webp",
    logoAlt: "CS50 Puzzle Day logo",
    logoWidth: 400,
    logoHeight: 400,
    logoClass: "recognitionLogoCs50",
    detail: "Led a top performing team in Harvard CS50 Puzzle Day 2023.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zubair Zafar",
  jobTitle: "Software Engineer",
  email: "mailto:zubairzafar480@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/zubair480",
    "https://linkedin.com/in/zubair480",
    "https://leetcode.com/zubair480",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Eastern Illinois University" },
    { "@type": "CollegeOrUniversity", name: "Government College University Faisalabad" },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main-content">Skip to main content</a>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Zubair Zafar home">
            <span className="wordmarkLetters" aria-hidden="true">ZZ</span>
            <span className="wordmarkDot" aria-hidden="true">.</span>
          </a>
          <div className="navLinks">
            <a href="/projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="/zubair_cv.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="mailto:zubairzafar480@gmail.com">Contact</a>
          </div>
        </nav>

        <header className="hero shell" id="top">
          <WebGLAura />
          <p className="kicker mobileKicker"><span className="statusDot" /> Software engineer · AI builder · San Francisco</p>
          <div className="heroCopy">
            <p className="kicker"><span className="statusDot" /> Software engineer · AI builder · San Francisco</p>
            <div className="heroAwardReveal">
              <HeroAward />
            </div>
            <h1>
              <span className="heroLine">I turn ambitious</span>
              <span className="heroLine">systems into</span>
              <span className="heroAccent">useful products.</span>
            </h1>
            <p className="heroText">
              I’m Zubair Zafar. I build full stack applications with applied AI
              and developer tools that make complex work feel simple.
            </p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="/projects">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="button buttonGhost" href="/zubair_cv.pdf" target="_blank" rel="noreferrer">View my CV <span aria-hidden="true">↗</span></a>
              <a className="heroContact" href="mailto:zubairzafar480@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="heroAside" aria-label="Portrait of Zubair Zafar">
            <figure className="portraitFrame" data-parallax>
              <img
                src="/zubair-zafar-golden-gate.jpeg"
                alt="Zubair Zafar standing in front of the Golden Gate Bridge at sunset"
                width={1200}
                height={1600}
                fetchPriority="high"
              />
              <figcaption className="portraitCaption">
                <strong>Zubair Zafar</strong>
                <span>San Francisco CA</span>
              </figcaption>
            </figure>
          </aside>
        </header>

        <section className="proofBar" aria-label="Selected outcomes">
          <div className="shell proofGrid">
            <div data-reveal><strong>7K+</strong><span>users served</span></div>
            <div data-reveal><strong>15K+</strong><span>product installs</span></div>
            <div data-reveal><strong>97.2%</strong><span>MRI model accuracy</span></div>
            <div data-reveal><strong>3×</strong><span>hackathon wins</span></div>
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="sectionIntro" data-reveal>
            <p className="eyebrow">What I do</p>
            <h2>Engineering with a product point of view.</h2>
            <p>I love solving technical problems that make people’s lives easier.</p>
          </div>
          <div className="capabilityGrid">
            {capabilities.map((item) => (
              <article className="capabilityCard" key={item.label} data-reveal>
                <p className="cardLabel">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span>{item.tools}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section workSection" id="work">
          <div className="shell">
            <div className="sectionIntro workIntro" data-reveal>
              <p className="eyebrow">Featured work</p>
              <h2>Selected work with measurable outcomes.</h2>
            </div>
            <div className="projectGrid">
              {featuredProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
            <a className="allWork" href="/projects">
              Explore all {allProjects.length} projects <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section shell experienceSection" id="experience">
          <div className="sectionIntro" data-reveal>
            <p className="eyebrow">Experience</p>
            <h2>From production software to research labs.</h2>
          </div>
          <div className="experienceList">
            {experience.map((item) => (
              <details className="experienceRow" key={item.company} data-reveal>
                <summary className="experienceSummary">
                  <p className="experiencePeriod">{item.period}</p>
                  <div className="experienceIdentity">
                    <span className={`experienceLogo ${item.logoClass}`}>
                      <img
                        src={item.logo}
                        alt={item.logoAlt}
                        width={item.logoWidth}
                        height={item.logoHeight}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <div>
                      <h3>{item.company}</h3>
                      <p className="experienceRole">{item.role}</p>
                    </div>
                  </div>
                  <p className="experienceDetail">{item.detail}</p>
                  <span className="expandIcon" aria-hidden="true">+</span>
                </summary>
                <div className="experienceExpanded">
                  <p>Selected outcomes</p>
                  <ul>
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="section recognitionSection">
          <div className="shell">
            <div className="recognitionLead" data-reveal>
              <p className="eyebrow">Recognition</p>
              <h2>Results that traveled beyond the repo.</h2>
              <p>Competitive programming taught me to stay calm with hard problems and deliver under pressure.</p>
            </div>
            <div className="recognitionGrid">
              {recognition.map((item) => (
                <article key={item.title} data-reveal>
                  <p className="recognitionResult">{item.result}</p>
                  <span className={`recognitionLogo ${item.logoClass}`}>
                    <img
                      src={item.logo}
                      alt={item.logoAlt}
                      width={item.logoWidth}
                      height={item.logoHeight}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <div className="recognitionCopy">
                    <h3>{item.title}</h3>
                    <span>{item.detail}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section credentialsSection">
          <div className="shell">
            <div className="sectionIntro" data-reveal>
              <p className="eyebrow">Education &amp; community</p>
              <h2>Learning in public. Teaching along the way.</h2>
              <p>Strong engineering is a team sport. I invest in the communities and classrooms that helped me grow.</p>
            </div>
            <div className="credentialGrid">
              <article className="credentialPanel educationPanel" data-reveal>
                <p className="panelLabel">Education</p>
                <div className="credentialItem">
                  <span className="credentialLogo credentialLogoEiu">
                    <img src="/experience/eastern-illinois-university.webp" alt="Eastern Illinois University logo" width="500" height="453" loading="lazy" />
                  </span>
                  <div className="credentialCopy">
                    <span className="credentialPeriod">2024 to 2026</span>
                    <h3>Eastern Illinois University</h3>
                    <p>M.S. Computer &amp; Information Technology · GPA 4.0</p>
                    <span className="scholarshipBadge">Fully funded master’s scholarship recipient</span>
                  </div>
                </div>
                <div className="credentialItem">
                  <span className="credentialLogo credentialLogoGcuf">
                    <img src="/credentials/gcuf.png" alt="Government College University Faisalabad logo" width="180" height="50" loading="lazy" />
                  </span>
                  <div className="credentialCopy">
                    <span className="credentialPeriod">2019 to 2023</span>
                    <h3>Government College University Faisalabad</h3>
                    <p>Bachelor of Computer Science</p>
                  </div>
                </div>
              </article>
              <article className="credentialPanel communityPanel" data-reveal>
                <p className="panelLabel">Teaching &amp; community</p>
                <ul>
                  <li>
                    <span className="communityLogo communityLogoCodeInPlace"><img src="/credentials/code-in-place.ico" alt="Stanford Code in Place logo" width="64" height="64" loading="lazy" /></span>
                    <div className="communityRole"><strong>4× Python Teacher</strong><span>Stanford Code in Place · 2023 to 2026</span></div>
                  </li>
                  <li>
                    <span className="communityLogo"><img src="/credentials/icodeguru.png" alt="iCodeGuru logo" width="40" height="40" loading="lazy" /></span>
                    <div className="communityRole"><strong>DSA Instructor &amp; Senior Moderator</strong><span>iCodeGuru · since 2023</span></div>
                  </li>
                  <li>
                    <span className="communityLogo"><img src="/credentials/wordpress.png" alt="WordPress logo for WordSprint Developers Hackathon" width="500" height="500" loading="lazy" /></span>
                    <div className="communityRole"><strong>Organizer</strong><span>WordSprint Developers Hackathon · 2024</span></div>
                  </li>
                  <li>
                    <span className="communityLogo"><img src="/credentials/lablab.ico" alt="lablab.ai logo" width="48" height="48" loading="lazy" /></span>
                    <div className="communityRole"><strong>Business &amp; Tech Mentor</strong><span>lablab.ai · 2023 to 2024</span></div>
                  </li>
                </ul>
              </article>
            </div>
            <div className="profileFacts">
              <a
                className="problemSolvingFact"
                href="https://leetcode.com/zubair480"
                target="_blank"
                rel="noreferrer"
                aria-label="View Zubair Zafar on LeetCode"
                data-reveal
              >
                <p className="panelLabel">Problem solving</p>
                <span className="leetcodeLogo">
                  <img src="/credentials/leetcode.png" alt="LeetCode logo" width="512" height="512" loading="lazy" />
                </span>
                <strong>460</strong>
                <span>LeetCode questions solved</span>
                <span className="factArrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contactSection">
          <div className="shell contactInner" data-reveal>
            <p className="eyebrow">Let’s build something useful</p>
            <h2>Have a hard problem worth solving?</h2>
            <a href="mailto:zubairzafar480@gmail.com">zubairzafar480@gmail.com <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}

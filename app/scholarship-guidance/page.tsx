import type { Metadata } from "next";
import Link from "next/link";
import { WebGLAura } from "../experience-layer";
import { ScholarshipGreeting } from "../scholarship-greeting";
import {
  CopyEmailButton,
  MaterialTabs,
  WebinarPlayer,
} from "../scholarship-media";
import { SiteFooter } from "../site-footer";

// Unlisted: shared through the /g link rather than linked from the site, and
// kept out of search results. Crawling stays allowed on purpose, because a
// robots.txt block would stop crawlers ever reading the noindex directive.
export const metadata: Metadata = {
  title: "Scholarship guidance | Zubair Zafar",
  description:
    "For anyone applying to a funded MS or PhD: the webinar, the CV I actually applied with, and the email I sent to professors.",
  robots: { index: false, follow: false },
};

const WEBINAR_URL = "https://www.facebook.com/share/v/fsHR7Ns4pQ9EK5ea/";
const CV_FILE_ID = "1Bz7v5nsQcNNaLQqVFfnaedWz4jeYkLc2";
const CV_VIEW_URL = `https://drive.google.com/file/d/${CV_FILE_ID}/view`;
const CV_PREVIEW_URL = `https://drive.google.com/file/d/${CV_FILE_ID}/preview`;

// Sent 4 April 2024. The professor's name and address are removed; the rest is
// the email exactly as it went out.
const EMAIL_SUBJECT =
  "PhD Candidate | BSCS (CGPA: 3.32) | IELTS: 6.5 | Ex-Intern: Etihad Airways | Hackathon Organizer & Mentor @ Stanford & Lablab";

const EMAIL_OPENING = [
  "Dear Professor [name],",
  "The purpose of this email is to express my interest in conducting research work alongside you in the area of Machine Learning and Computer Vision.",
  "Here’s a detailed breakdown of some of my work during my Undergraduate from Government College University Faisalabad (See transcript):",
];

const EMAIL_BULLETS = [
  "Won the Amadeus Hackathon 2022, leading to an internship at Etihad Aviation Center in Abu Dhabi. (See here)",
  "Section Leader of Stanford Code in Place (1.1% from Pakistan) teaches Python to 20 international students. (See here)",
  "Real-time safety equipment detection application using OAK-D camera, YOLOv8, Numpy, and Pandas along with Flask. (See here)",
  "1st position in Advent of Code Pakistan Leaderboard (See here)",
  "Led a top-performing team in the CS50 Puzzle Day 2023, organized by Harvard University. (See here)",
  "Organized WordSprint Developers Hackathon, 300+ participants registered, 14 teams (six each) submitted projects, and 8 participents got job offers. (See here)",
  "Tech and Business Mentor at lablab.ai hackathons. (See here)",
  "Voluntarily Taught Data Structures and Algorithms to underprivileged students (See here)",
];

const EMAIL_CLOSING = [
  "Please find my CV attached. I am open to providing any additional information that may be helpful and would love to arrange a meeting to discuss this further.",
  "Thank you for your time. I am enthusiastic about the opportunity to work with you.",
];

const EMAIL_SIGNOFF = ["Warm Regards", "Muhammad Zubair Zafar", "Profile: LinkedIn"];

// What the copy button puts on the clipboard.
const EMAIL_PLAIN = [
  `Subject: ${EMAIL_SUBJECT}`,
  "",
  ...EMAIL_OPENING,
  "",
  ...EMAIL_BULLETS.map((line) => `- ${line}`),
  "",
  ...EMAIL_CLOSING,
  "",
  ...EMAIL_SIGNOFF,
].join("\n");

const EMAIL_NOTES = [
  {
    label: "The subject line does the work",
    copy: "Every credential is in the subject, so a professor sees the case before deciding whether to open anything.",
  },
  {
    label: "The first sentence names the research",
    copy: "No throat clearing and no flattery. It says which area, so the professor knows in one line whether to keep reading.",
  },
  {
    label: "Every claim carries a link",
    copy: "Each line ends with proof. Nothing has to be taken on trust, and the whole thing stays readable in about twenty seconds.",
  },
  {
    label: "It asks for one specific thing",
    copy: "It closes by asking for a meeting. A message with no clear ask is the easiest kind to leave unanswered.",
  },
];

const MAIL_TEMPLATE = [
  "Hi Zubair,",
  "",
  "I watched the webinar. Here is where I am:",
  "",
  "Degree, university and CGPA:",
  "Test scores (and which ones I still need):",
  "What I have built or published (links):",
  "MS or PhD, and the research area:",
  "Countries and intake I am targeting:",
  "The one thing I am most stuck on:",
  "",
  "Thank you,",
].join("\n");

const MAILTO_URL =
  "mailto:zubairzafar480@gmail.com?subject=" +
  encodeURIComponent("Scholarship guidance") +
  "&body=" +
  encodeURIComponent(MAIL_TEMPLATE);

const CHECKLIST = [
  "Your degree, university, and CGPA",
  "Your test scores, and which ones you still need to take",
  "What you have actually built or published, with links",
  "Whether you are aiming at an MS or a PhD, and in what area",
  "The countries and the intake you are targeting",
  "The one thing you are most stuck on right now",
];

function CvPanel() {
  return (
    <div className="cvPanel">
      <div className="cvPreview">
        <iframe
          src={CV_PREVIEW_URL}
          title="The CV used for scholarship applications"
          loading="lazy"
          allow="autoplay"
        />
      </div>
      <div className="panelAside">
        <p>
          This is the document that actually went out with the applications,
          left as it was rather than tidied up afterwards. Notice how much of it
          is evidence with a link behind it, and how little of it is adjectives
          about myself.
        </p>
        <a
          className="panelAction"
          href={CV_VIEW_URL}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Drive <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}

function EmailPanel() {
  return (
    <div className="emailPanel">
      <article className="letter">
        <header className="letterHeader">
          <p className="letterField">
            <span>Subject</span>
            {EMAIL_SUBJECT}
          </p>
          <p className="letterField">
            <span>To</span>
            <em>a professor whose research matched mine</em>
          </p>
        </header>
        <div className="letterBody">
          {EMAIL_OPENING.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul>
            {EMAIL_BULLETS.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {EMAIL_CLOSING.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="letterAttachment">
            <span aria-hidden="true">📎</span> Muhammad Zubair Zafar CV.pdf
          </p>
          <p className="letterSignoff">
            {EMAIL_SIGNOFF.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </div>
        <CopyEmailButton text={EMAIL_PLAIN} />
      </article>

      <aside className="panelAside">
        <p className="panelAsideLabel">Why it worked</p>
        <ul className="noteList">
          {EMAIL_NOTES.map((note) => (
            <li key={note.label}>
              <strong>{note.label}</strong>
              <span>{note.copy}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default function ScholarshipGuidancePage() {
  return (
    <>
      <a className="skipLink" href="#step-one">Skip to the steps</a>
      <main>
        <nav className="nav shell" aria-label="Primary navigation">
          <Link className="wordmark" href="/" aria-label="Zubair Zafar home">
            <span className="wordmarkLetters" aria-hidden="true">ZZ</span>
            <span className="wordmarkDot" aria-hidden="true">.</span>
          </Link>
          <div className="navLinks">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <a href="mailto:zubairzafar480@gmail.com">Contact</a>
          </div>
        </nav>

        <header className="guidanceHero shell">
          <WebGLAura />
          <p className="kicker" data-reveal>
            <span className="statusDot" /> Scholarship guidance · for MS and PhD applicants
          </p>
          <ScholarshipGreeting />
          <h1 data-reveal>
            Everything I have on <span className="heroAccent">getting funded.</span>
          </h1>
          <p className="guidanceLede" data-reveal>
            If you are working toward a funded MS or PhD, this is everything I
            have. I would rather hand you the real material than a paragraph of
            encouragement, so below is the webinar I recorded, the CV I actually
            applied with, and the email I actually sent to professors. Three
            steps, in order, then write to me.
          </p>
        </header>

        <section className="guidanceReassure" aria-labelledby="reassure-title">
          <div className="shell guidanceReassureInner" data-reveal>
            <h2 id="reassure-title">Before you start, one thing.</h2>
            <p>
              I applied with a <strong>3.32 CGPA</strong> and a{" "}
              <strong>6.5 IELTS</strong>. I mention that because almost everyone
              who writes to me has already decided they are not competitive
              enough, usually on the basis of one number. I was not the strongest
              applicant on paper. What I had was evidence I could point at.
            </p>
          </div>
        </section>

        <section className="guidanceStepSection" id="step-one">
          <div className="shell">
            <p className="stepTag" data-reveal>
              <span>Step 01</span> Watch this first
            </p>
            <h2 className="stepTitle" data-reveal>
              The whole process, end to end.
            </h2>
            <p className="stepLede" data-reveal>
              How to build the CV and how to apply for fully funded scholarships
              in the US. It answers most of what people ask me before they ask
              it, which is why everyone starts here.
            </p>
            <div data-reveal>
              <WebinarPlayer watchUrl={WEBINAR_URL} />
            </div>
          </div>
        </section>

        <section className="guidanceStepSection guidanceStepSectionAlt" id="step-two">
          <div className="shell">
            <p className="stepTag" data-reveal>
              <span>Step 02</span> Then study these two
            </p>
            <h2 className="stepTitle" data-reveal>
              The documents that did the work.
            </h2>
            <p className="stepLede" data-reveal>
              Both are real. Use the shape of them and put your own evidence in.
            </p>
            <div data-reveal>
              <MaterialTabs
                tabs={[
                  {
                    id: "cv",
                    label: "The CV I applied with",
                    meta: "Not my current CV",
                    panel: <CvPanel />,
                  },
                  {
                    id: "email",
                    label: "The email to professors",
                    meta: "Sent April 2024",
                    panel: <EmailPanel />,
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="guidanceStepSection" id="step-three">
          <div className="shell guidanceTalkInner">
            <p className="stepTag" data-reveal>
              <span>Step 03</span> Then write to me
            </p>
            <h2 className="stepTitle" data-reveal>
              Send one complete message.
            </h2>
            <p className="stepLede" data-reveal>
              I get a lot of these, and the ones I can answer properly are the
              ones that do not need three rounds of questions first. Put it all
              in the first message and I can usually give you something specific
              straight away.
            </p>
            <ul className="guidanceChecklist" data-reveal>
              {CHECKLIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="guidanceTalkActions" data-reveal>
              <a className="button" href={MAILTO_URL}>
                Email me <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button buttonGhost"
                href="https://linkedin.com/in/zubair480"
                target="_blank"
                rel="noreferrer"
              >
                Message me on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="guidanceTalkNote" data-reveal>
              The email button opens a message already laid out with those
              points, so you only have to fill it in. I read everything. Replies
              can take a few days, but I get to all of them.
            </p>
          </div>
        </section>

        <SiteFooter includeHome />
      </main>
    </>
  );
}

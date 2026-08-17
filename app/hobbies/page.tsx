/* eslint-disable @next/next/no-img-element -- Local hobby images are optimized for static GitHub Pages output. */
import type { Metadata } from "next";
import Link from "next/link";
import { WebGLAura } from "../experience-layer";
import { hobbies } from "../hobby-data";
import { SiteFooter } from "../site-footer";

export const metadata: Metadata = {
  title: "Hobbies | Zubair Zafar",
  description:
    "Away from the keyboard: swimming, cooking, skateboarding, driving, hiking, badminton, pickleball and lifting. The eight things Zubair Zafar keeps coming back to.",
};

// Cards run three to a row. Whatever is left over on the final row stretches to
// fill the six column grid so the row never ends short.
const remainder = hobbies.length % 3;
const firstWideIndex = hobbies.length - remainder;
const wideSpan = remainder === 1 ? "6" : "3";

export default function HobbiesPage() {
  return (
    <>
      <a className="skipLink" href="#hobby-list">Skip to hobbies</a>
      <main>
        <nav className="nav shell" aria-label="Primary navigation">
          <Link className="wordmark" href="/" aria-label="Zubair Zafar home">
            <span className="wordmarkLetters" aria-hidden="true">ZZ</span>
            <span className="wordmarkDot" aria-hidden="true">.</span>
          </Link>
          <div className="navLinks">
            <Link href="/">Home</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#about">About</Link>
            <Link href="/projects">Projects</Link>
            <a href="/zubair_cv.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="mailto:zubairzafar480@gmail.com">Contact</a>
          </div>
        </nav>

        <header className="projectsHero shell" id="top">
          <WebGLAura />
          <p className="kicker" data-reveal><span className="statusDot" /> Away from the keyboard · eight things I keep coming back to</p>
          <h1 data-reveal>Off the clock. <span className="heroAccent">Still learning things.</span></h1>
          <div className="projectsHeroFooter" data-reveal>
            <p>Water, kitchens, trails, courts, a weight room and a skateboard I am still figuring out. The habits below keep me curious and give the hard problems room to solve themselves.</p>
            <div>
              <strong>{hobbies.length}</strong>
              <span>hobbies</span>
            </div>
          </div>
        </header>

        <section className="hobbySpotlight" id="hobby-list" aria-labelledby="hobby-list-title">
          <div className="shell">
            <div className="hobbySpotlightHeader" data-reveal>
              <p className="eyebrow">Off the clock</p>
              <div className="hackathonStatement">
                <strong aria-hidden="true">{hobbies.length}</strong>
                <h2 id="hobby-list-title">Things I do when I am not shipping.</h2>
              </div>
              <p>
                Some of these I have done for years. A few I picked up recently,
                and I am still bad at one of them, which is exactly the point.
              </p>
            </div>

            <div className="hobbyGrid">
              {hobbies.map((hobby, index) => (
                <article
                  className="hobbyCard"
                  data-accent={hobby.accent}
                  data-span={remainder && index >= firstWideIndex ? wideSpan : "2"}
                  data-reveal
                  key={hobby.slug}
                >
                  <div className="hobbyTop">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{hobby.status}</span>
                  </div>
                  <div className={`hobbyMedia${hobby.image ? "" : " hobbyMedia--empty"}`}>
                    {hobby.image ? (
                      <img
                        src={hobby.image}
                        alt={hobby.imageAlt}
                        style={hobby.imagePosition ? { objectPosition: hobby.imagePosition } : undefined}
                        width="1200"
                        height="900"
                        loading="lazy"
                      />
                    ) : (
                      <span className="hobbyMediaPlaceholder" aria-hidden="true">
                        <span>{hobby.title.slice(0, 2).toUpperCase()}</span>
                        <span>Photo coming soon</span>
                      </span>
                    )}
                    {hobby.insetImage ? (
                      <span className="hobbyMediaInset">
                        <img
                          src={hobby.insetImage.src}
                          alt={hobby.insetImage.alt}
                          width="640"
                          height="480"
                          loading="lazy"
                        />
                      </span>
                    ) : null}
                    <span className="hobbyMediaLabel">{hobby.mediaLabel}</span>
                  </div>
                  <div className="hobbyContent">
                    <p className="hobbyCadence">{hobby.cadence}</p>
                    <h3>{hobby.title}</h3>
                    <p className="hobbyDescription">{hobby.description}</p>
                    <div className="hobbyNote">
                      <span>{hobby.note}</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projectsContact">
          <div className="shell" data-reveal>
            <p>Know a trail worth the drive?</p>
            <a href="mailto:zubairzafar480@gmail.com">Send it over <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <SiteFooter includeHome />
      </main>
    </>
  );
}

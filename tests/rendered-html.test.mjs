import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Zubair Zafar \| Software Engineer &amp; AI Builder<\/title>/i);
  assert.match(html, /I turn ambitious/);
  assert.match(html, /I love solving technical problems that make people’s lives easier\./);
  assert.doesNotMatch(html, /I like difficult technical problems best/);
  assert.match(html, /systems into/);
  assert.match(html, /useful products\./);
  assert.match(html, /href="\/zubair_cv\.pdf"/);
  assert.match(html, /href="https:\/\/leetcode\.com\/zubair480"/);
  assert.match(html, />460<\/strong>/);
  assert.match(html, /4× Python Teacher/);
  assert.match(html, /Stanford Code in Place · 2023 to 2026/);
  assert.doesNotMatch(html, /2023 to 2025/);
  assert.doesNotMatch(html, /3× Python Teacher/);
  assert.match(html, /hackathon wins/);
  assert.match(html, /class="heroAward"/);
  assert.match(html, /class="wordmarkLetters"/);
  assert.match(html, /class="wordmarkDot"/);
  assert.match(html, /href="\/projects#hackathon-wins"/);
  assert.match(html, /class="webglAura"/);
  assert.equal((html.match(/class="experienceLogo /g) ?? []).length, 4);
  assert.match(html, /src="\/experience\/eastern-illinois-university\.webp"/);
  assert.match(html, /src="\/experience\/wpbrigade\.webp"/);
  assert.match(html, /src="\/experience\/etihad-airways\.webp"/);
  assert.match(html, /src="\/experience\/carchaze\.webp"/);
  assert.match(html, /alt="Eastern Illinois University logo"/);
  assert.match(html, /alt="WPBrigade logo"/);
  assert.match(html, /alt="Etihad Airways logo"/);
  assert.match(html, /alt="CarChaze logo"/);
  assert.equal((html.match(/class="recognitionLogo /g) ?? []).length, 4);
  assert.match(html, /src="\/recognition\/google-code-jam\.webp"/);
  assert.match(html, /src="\/recognition\/meta-hacker-cup\.webp"/);
  assert.match(html, /src="\/recognition\/advent-of-code\.webp"/);
  assert.match(html, /src="\/recognition\/cs50-puzzle-day\.webp"/);
  assert.match(html, /alt="Google Code Jam logo"/);
  assert.match(html, /alt="Meta Hacker Cup logo"/);
  assert.match(html, /alt="Advent of Code star logo"/);
  assert.match(html, /alt="CS50 Puzzle Day logo"/);
  assert.equal((html.match(/class="communityLogo/g) ?? []).length, 4);
  assert.match(html, /src="\/credentials\/gcuf\.png"/);
  assert.match(html, /src="\/credentials\/code-in-place\.ico"/);
  assert.match(html, /src="\/credentials\/icodeguru\.png"/);
  assert.match(html, /src="\/credentials\/wordpress\.png"/);
  assert.match(html, /src="\/credentials\/lablab\.ico"/);
  assert.match(html, /src="\/credentials\/leetcode\.png"/);
  assert.match(html, /Let’s make complex work feel simple\./);
  assert.match(html, /property="og:image" content="https:\/\/zubair480\.github\.io\/og\.png"/);
  assert.doesNotMatch(html, />Languages</);
  assert.doesNotMatch(html, /Pakistan/i);
  assert.doesNotMatch(html, /codex-preview/);
});

test("server renders the complete project catalog", async () => {
  const response = await render("/projects");
  assert.equal(response.status, 200);

  const html = await response.text();
  const projectMedia = (await readdir(new URL("../public/projects/", import.meta.url)))
    .filter((name) => name.endsWith(".webp"));
  assert.match(html, /Twenty-one builds\./);
  assert.match(html, /complete project catalog/i);
  assert.match(html, /Four hackathon wins/);
  assert.match(html, /id="hackathon-wins"/);
  assert.match(html, /CrewAI Hackathon/);
  assert.match(html, /Auth0 × Stripe Hackathon/);
  assert.match(html, /Amadeus × Etihad/);
  assert.match(html, /Agent Native Builders Hackathon/);
  assert.match(html, /EstateAgent AI/);
  assert.match(html, /Clip Police/);
  assert.match(html, /ROOT/);
  assert.match(html, /AI GTM Agent/);
  assert.match(html, /Smart CPM Parser/);
  assert.match(html, /class="projectCard projectCard--/);
  assert.equal((html.match(/class="projectMedia projectMedia--/g) ?? []).length, 21);
  assert.equal((html.match(/class="projectMediaLaunch"/g) ?? []).length, 21);
  assert.equal((html.match(/class="projectImage" src="\/projects\/[^"?]+\.webp"/g) ?? []).length, 10);
  assert.equal(projectMedia.length, 10);
  assert.match(html, /class="projectBrowserStage"/);
  assert.match(html, /class="projectMobileStage"/);
  assert.match(html, /class="projectAuditStage"/);
  assert.equal((html.match(/class="projectConceptStage projectConceptStage--/g) ?? []).length, 10);
  assert.match(html, /projectConceptStage--attest/);
  assert.match(html, /projectConceptStage--crampon/);
  assert.match(html, /projectConceptStage--judge/);
  assert.match(html, /projectConceptStage--research/);
  assert.match(html, /projectConceptStage--flashcard/);
  assert.match(html, /projectConceptStage--compatibility/);
  assert.match(html, /projectConceptStage--loan/);
  assert.match(html, /projectConceptStage--hifz/);
  assert.match(html, /projectConceptStage--signal/);
  assert.match(html, /projectConceptStage--creative/);
  assert.doesNotMatch(html, /class="projectLaunch"/);
  assert.match(html, /class="projectLiveBadge"/);
  assert.match(html, /https:\/\/zubairzafar480--estateagent-ai-web\.modal\.run\//);
  assert.doesNotMatch(html, /Luma Extension|lumafill/i);
  assert.doesNotMatch(html, /agentic-audit\.webp/);
  assert.match(html, /Project post/);
  assert.match(html, /Source code/);
  assert.match(html, /class="hackathonWinCard"/);
  assert.equal((html.match(/class="hackathonWinMedia /g) ?? []).length, 4);
  assert.match(html, /src="\/hackathons\/root-team\.jpg"/);
  assert.match(html, /src="\/hackathons\/clip-police-team\.jpg"/);
  assert.match(html, /src="\/hackathons\/smart-cpm-team\.jpg"/);
  assert.match(html, /alt="ROOT project team at the CrewAI hackathon"/);
  assert.match(html, /alt="Clip Police team and organizers at the Auth0 and Stripe hackathon"/);
  assert.match(html, /alt="Smart CPM Parser hackathon team at Etihad Corporate Academy"/);
  assert.match(html, /src="\/hackathons\/attest-team\.jpg"/);
  assert.match(html, /Let’s make complex work feel simple\./);
});

test("server renders the hobbies page", async () => {
  const response = await render("/hobbies");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Hobbies \| Zubair Zafar<\/title>/i);
  assert.match(html, /Off the clock\./);
  assert.match(html, /Things I do when I am not shipping\./);
  assert.match(html, /Swimming/);
  assert.match(html, /Cooking/);
  assert.match(html, /Skateboarding/);
  assert.match(html, /Driving/);
  assert.match(html, /Hiking/);
  assert.match(html, /Badminton/);
  assert.match(html, /Pickleball/);
  assert.match(html, /Lifting/);
  assert.equal((html.match(/class="hobbyCard"/g) ?? []).length, 8);
  assert.equal((html.match(/class="hobbyMediaLabel"/g) ?? []).length, 8);
  assert.match(html, /src="\/hobbies\/cooking\.jpg"/);
  assert.match(html, /src="\/hobbies\/hiking\.jpg"/);
  assert.match(html, /src="\/hobbies\/gym\.jpg"/);
  assert.match(html, /src="\/hobbies\/skateboarding\.jpg"/);
  assert.match(html, /src="\/hobbies\/pickleball\.jpg"/);
  assert.match(html, /alt="A spread of home-cooked dishes/);
  assert.equal((html.match(/class="hobbyMediaInset"/g) ?? []).length, 2);
  assert.match(html, /src="\/hobbies\/cooking-prep\.jpg"/);
  assert.match(html, /src="\/hobbies\/skateboarding-face\.jpg"/);
  assert.equal((html.match(/data-span="3"/g) ?? []).length, 2);
  assert.equal((html.match(/class="hobbyMediaPlaceholder"/g) ?? []).length, 3);
  assert.match(html, /data-accent="blue"/);
  assert.match(html, /data-accent="sunset"/);
  assert.match(html, /data-accent="acid"/);
  assert.match(html, /class="webglAura"/);
  assert.match(html, /href="\/projects"/);
  assert.match(html, /Let’s make complex work feel simple\./);
});

test("home and projects link to the hobbies page", async () => {
  const [home, projects] = await Promise.all([
    render().then((response) => response.text()),
    render("/projects").then((response) => response.text()),
  ]);

  assert.match(home, /href="\/hobbies"/);
  assert.match(projects, /href="\/hobbies"/);
});

test("motion remains progressive and accessible", async () => {
  const [experienceLayer, heroAward, css] = await Promise.all([
    readFile(new URL("../app/experience-layer.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/hero-award.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(experienceLayer, /IntersectionObserver/);
  assert.match(experienceLayer, /textRevealTargets/);
  assert.match(experienceLayer, /item\.matches\("\.wordmark"\)/);
  assert.match(experienceLayer, /isTextVisible/);
  assert.match(experienceLayer, /loadingIsVisible/);
  assert.match(experienceLayer, /loadingIsVisible \? 760 : 40/);
  assert.match(experienceLayer, /usePathname/);
  assert.match(experienceLayer, /prefers-reduced-motion: reduce/);
  assert.match(experienceLayer, /saveData/);
  assert.match(experienceLayer, /powerPreference: "low-power"/);
  assert.match(heroAward, /sessionStorage/);
  assert.match(heroAward, /celebrated-v2/);
  assert.match(heroAward, /onMouseEnter=\{celebrateOnce\}/);
  assert.match(heroAward, /onFocus=\{celebrateOnce\}/);
  assert.match(heroAward, /Congratulations!/);
  assert.doesNotMatch(heroAward, /data-reveal/);
  assert.match(css, /\.motionReady \[data-reveal\]/);
  assert.match(css, /\.motionReady \.textMotion/);
  assert.match(
    css,
    /\.motionReady \[data-reveal\]\.isVisible \{[\s\S]*?clip-path: none;/,
  );
  assert.match(
    css,
    /\.motionReady \.textMotion\.isTextVisible \{[\s\S]*?clip-path: none;/,
  );
  assert.match(
    css,
    /\.hackathonStatement > strong \{[\s\S]*?font-family: var\(--font-geist-sans\)/,
  );
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /\.scrollProgress/);
  assert.match(css, /@keyframes heroConfettiBurst/);
  assert.match(css, /@keyframes wordmarkOrbit/);
  assert.match(css, /@keyframes wordmarkRipple/);
  assert.match(css, /@keyframes wordmarkLetterPop/);
  assert.match(css, /@keyframes wordmarkDotPop/);
  assert.match(css, /@keyframes projectLivePulse/);
  assert.match(css, /\.projectMedia/);
  assert.match(css, /\.projectActions/);
  assert.match(css, /\.heroAwardReveal/);
  assert.match(css, /\.experienceLogo/);
  assert.match(css, /\.experienceRow:hover \.experienceLogo/);
  assert.match(css, /\.recognitionLogo/);
  assert.match(css, /\.recognitionGrid article:hover \.recognitionLogo/);
});

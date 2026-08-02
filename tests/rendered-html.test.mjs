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
  assert.match(html, /Twenty builds\./);
  assert.match(html, /complete project catalog/i);
  assert.match(html, /Three hackathon wins/);
  assert.match(html, /id="hackathon-wins"/);
  assert.match(html, /CrewAI Hackathon/);
  assert.match(html, /Auth0 × Stripe Hackathon/);
  assert.match(html, /Amadeus × Etihad/);
  assert.match(html, /EstateAgent AI/);
  assert.match(html, /Clip Police/);
  assert.match(html, /ROOT/);
  assert.match(html, /AI GTM Agent/);
  assert.match(html, /Smart CPM Parser/);
  assert.match(html, /class="projectCard"/);
  assert.equal((html.match(/class="projectMedia"/g) ?? []).length, 20);
  assert.equal((html.match(/src="\/projects\/[^"?]+\.webp"/g) ?? []).length, 20);
  assert.equal(projectMedia.length, 20);
  assert.match(html, /class="projectLiveBadge"/);
  assert.match(html, /https:\/\/zubairzafar480--estateagent-ai-web\.modal\.run\//);
  assert.match(html, /chromewebstore\.google\.com\/detail\/lumafill\/hpikhienlemchmncloefeapbponamkkd/);
  assert.match(html, /Project post/);
  assert.match(html, /Source code/);
  assert.match(html, /class="hackathonWinCard"/);
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
});

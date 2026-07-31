import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  assert.match(html, /systems into/);
  assert.match(html, /useful products\./);
  assert.match(html, /href="\/zubair_cv\.pdf"/);
  assert.match(html, /href="https:\/\/leetcode\.com\/zubair480"/);
  assert.match(html, />460<\/strong>/);
  assert.match(html, /class="webglAura"/);
  assert.match(html, /property="og:image" content="https:\/\/zubair480\.github\.io\/og\.png"/);
  assert.doesNotMatch(html, />Languages</);
  assert.doesNotMatch(html, /codex-preview/);
});

test("server renders the complete project catalog", async () => {
  const response = await render("/projects");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Twenty builds\./);
  assert.match(html, /Complete project catalog/);
  assert.match(html, /EstateAgent AI/);
  assert.match(html, /Clip Police/);
  assert.match(html, /ROOT/);
  assert.match(html, /AI GTM Agent/);
  assert.match(html, /Smart CPM Parser/);
  assert.match(html, /class="projectCard"/);
});

test("motion remains progressive and accessible", async () => {
  const [experienceLayer, css] = await Promise.all([
    readFile(new URL("../app/experience-layer.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(experienceLayer, /IntersectionObserver/);
  assert.match(experienceLayer, /textRevealTargets/);
  assert.match(experienceLayer, /isTextVisible/);
  assert.match(experienceLayer, /usePathname/);
  assert.match(experienceLayer, /prefers-reduced-motion: reduce/);
  assert.match(experienceLayer, /saveData/);
  assert.match(experienceLayer, /powerPreference: "low-power"/);
  assert.match(css, /\.motionReady \[data-reveal\]/);
  assert.match(css, /\.motionReady \.textMotion/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /\.scrollProgress/);
});

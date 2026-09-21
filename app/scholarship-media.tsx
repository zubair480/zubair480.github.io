/* eslint-disable @next/next/no-img-element -- The webinar poster is a local optimised asset. */
"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";

const FB_VIDEO_URL = "https://www.facebook.com/iCodeguru/videos/405087822606984/";
const FB_EMBED_URL =
  "https://www.facebook.com/plugins/video.php?href=" +
  encodeURIComponent(FB_VIDEO_URL) +
  "&show_text=false&autoplay=true";

/**
 * A facade player: the poster is a local image and nothing loads from Facebook
 * until the visitor presses play. First paint stays fast on a phone, and no
 * third party frame is embedded unless it is actually wanted.
 */
export function WebinarPlayer({ watchUrl }: { watchUrl: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`webinarStage${playing ? " isPlaying" : ""}`}>
      {playing ? (
        <iframe
          src={FB_EMBED_URL}
          title="How to Make CV and Apply for Fully Funded Scholarships in US"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          className="webinarPlay"
          onClick={() => setPlaying(true)}
        >
          <span className="webinarPoster" aria-hidden="true" />
          <span className="webinarPlayCopy">
            <span className="webinarEyebrow">Recorded webinar · iCodeGuru · 2024</span>
            <strong>
              How to Make CV &amp; Apply for Fully Funded Scholarships in US
            </strong>
            <span className="webinarCue">
              <span className="webinarPlayIcon" aria-hidden="true" />
              Play it here
            </span>
          </span>
        </button>
      )}

      <a className="webinarFallback" href={watchUrl} target="_blank" rel="noreferrer">
        Open on Facebook <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

/** Copies the outreach email so it can be adapted instead of retyped. */
export function CopyEmailButton({ text }: { text: string }) {
  const [state, setState] = useState<"idle" | "done" | "failed">("idle");
  const timer = useRef<number | null>(null);

  const copy = useCallback(async () => {
    if (timer.current) window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      setState("failed");
    }
    timer.current = window.setTimeout(() => setState("idle"), 2600);
  }, [text]);

  return (
    <div className="copyRow">
      <button type="button" className="copyButton" onClick={copy}>
        {state === "done"
          ? "Copied"
          : state === "failed"
            ? "Select it and copy"
            : "Copy this email"}
      </button>
      <span className="srOnly" role="status" aria-live="polite">
        {state === "done" ? "Email copied to clipboard" : ""}
      </span>
      <span className="copyHint">Adapt it, do not send it as it is.</span>
    </div>
  );
}

type Tab = {
  id: string;
  label: string;
  meta: string;
  panel: ReactNode;
};

/**
 * Progressive disclosure for the two reference documents. Implements the
 * WAI-ARIA tabs pattern, arrow key roving included, so it works from the
 * keyboard and not only the mouse.
 */
export function MaterialTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    const index = tabs.findIndex((tab) => tab.id === active);
    let next = index;
    if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;

    const id = tabs[next].id;
    setActive(id);
    refs.current[id]?.focus();
  };

  return (
    <div className="materialTabs">
      <div
        className="materialTabList"
        role="tablist"
        aria-label="Application material"
        onKeyDown={onKeyDown}
      >
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              ref={(node) => {
                refs.current[tab.id] = node;
              }}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              className="materialTab"
              onClick={() => setActive(tab.id)}
            >
              <strong>{tab.label}</strong>
              <small>{tab.meta}</small>
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="materialPanel"
          hidden={tab.id !== active}
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}

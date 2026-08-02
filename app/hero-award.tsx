"use client";

import { useEffect, useRef, useState } from "react";

const celebrationKey = "zubair-hero-award-celebrated-v2";

export function HeroAward() {
  const hasCelebrated = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const [isCelebrating, setIsCelebrating] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function celebrateOnce() {
    if (hasCelebrated.current) return;

    try {
      if (window.sessionStorage.getItem(celebrationKey) === "true") {
        hasCelebrated.current = true;
        return;
      }

      window.sessionStorage.setItem(celebrationKey, "true");
    } catch {
      // The in-memory guard still guarantees a single celebration on this page.
    }

    hasCelebrated.current = true;
    setIsCelebrating(true);
    timeoutRef.current = window.setTimeout(() => setIsCelebrating(false), 1200);
  }

  return (
    <a
      className={`heroAward${isCelebrating ? " isCelebrating" : ""}`}
      href="/projects#hackathon-wins"
      aria-label="View Zubair Zafar’s three hackathon wins"
      onMouseEnter={celebrateOnce}
      onFocus={celebrateOnce}
    >
      <strong>3×</strong>
      <span className="heroAwardLabel">Hackathon winner</span>
      <span className="heroAwardArrow" aria-hidden="true">↗</span>
      <span className="heroCelebration" aria-hidden="true">
        <span className="heroCongrats">Congratulations!</span>
        {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
      </span>
      <span className="srOnly" aria-live="polite">
        {isCelebrating ? "Congratulations on three hackathon wins!" : ""}
      </span>
    </a>
  );
}

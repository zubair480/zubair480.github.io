"use client";

import { useEffect, useState } from "react";

// The link is shared one-to-one, so it can greet the person by name when the
// URL carries one: /g?name=Laiba renders "Laiba, this one is for you."
// Anything that does not look like a plain name is ignored and the neutral
// greeting stays, so a pasted link can never inject content into the page.
const NAME_PATTERN = /^[\p{L}][\p{L}\s'’.-]{0,30}$/u;

function readName(): string | null {
  try {
    const raw = new URLSearchParams(window.location.search).get("name");
    if (!raw) return null;
    const trimmed = raw.trim().replace(/\s+/g, " ");
    if (!NAME_PATTERN.test(trimmed)) return null;
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  } catch {
    return null;
  }
}

export function ScholarshipGreeting() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setName(readName());
  }, []);

  return (
    <p className="guidanceGreeting" data-personal={name ? "true" : "false"}>
      {name ? (
        <>
          <span className="guidanceGreetingName">{name}</span>, this one is for you.
        </>
      ) : (
        <>So you want a funded MS or PhD.</>
      )}
    </p>
  );
}

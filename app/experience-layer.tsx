"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type WebGLConnection = Navigator & {
  connection?: { saveData?: boolean };
};

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export function ScrollExperience() {
  const progressRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const textRevealTargets = [
      "main h2",
      "main h3",
      "main h4",
      "main p",
      "main li",
      "main figcaption",
      "main .projectNumber",
      "main .proofGrid strong",
      "main .proofGrid span",
      "main .projectsHeroFooter strong",
      "main .projectsHeroFooter span",
      "main .capabilityCard > span",
      "main .recognitionGrid article > span",
      "main .profileFacts strong",
      "main .profileFacts span",
      "main .credentialItem > span",
      "main .nav a",
      "main .button",
      "main .heroContact",
      "main .projectsContact a",
      "main .footer a",
    ].join(", ");
    const textItems = Array.from(
      document.querySelectorAll<HTMLElement>(textRevealTargets),
    ).filter((item) => {
      if (!item.textContent?.trim()) return false;
      if (item.hasAttribute("data-reveal")) return false;
      if (item.closest(".hero, .loadingScreen, [aria-hidden='true']")) return false;
      return true;
    });
    const hero = document.querySelector<HTMLElement>(".hero");

    root.classList.add("motionReady");

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
    });

    const sequenceIndexes = new Map<Element, number>();
    textItems.forEach((item) => {
      const group =
        item.closest("[data-reveal], article, details, nav, footer, section") ??
        item.parentElement ??
        document.body;
      const sequenceIndex = sequenceIndexes.get(group) ?? 0;

      item.classList.add("textMotion");
      item.style.setProperty(
        "--text-reveal-delay",
        `${Math.min(sequenceIndex, 6) * 58}ms`,
      );
      sequenceIndexes.set(group, sequenceIndex + 1);
    });

    let observer: IntersectionObserver | undefined;
    let textObserver: IntersectionObserver | undefined;
    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("isVisible"));
      textItems.forEach((item) => item.classList.add("isTextVisible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("isVisible");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10%", threshold: 0.08 },
      );

      revealItems.forEach((item) => observer?.observe(item));

      textObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("isTextVisible");
            textObserver?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -7%", threshold: 0.08 },
      );

      textItems.forEach((item) => textObserver?.observe(item));
    }

    hero?.classList.add("heroActive");

    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / maxScroll, 1);

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      if (!reduceMotion && !coarsePointer) {
        const portraitShift = Math.max(-8, Math.min(window.scrollY * 0.025, 8));
        parallaxItems.forEach((item) => {
          item.style.setProperty("--parallax-shift", `${portraitShift}px`);
        });
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      root.classList.remove("motionReady");
      observer?.disconnect();
      textObserver?.disconnect();
      textItems.forEach((item) => {
        item.classList.remove("textMotion", "isTextVisible");
        item.style.removeProperty("--text-reveal-delay");
      });
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <div ref={progressRef} className="scrollProgress" aria-hidden="true" />;
}

export function WebGLAura() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });

    if (!gl) return;

    const vertexShader = compileShader(
      gl,
      gl.VERTEX_SHADER,
      `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
    );

    const fragmentShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        varying vec2 vUv;
        uniform vec2 uResolution;
        uniform vec2 uPointer;
        uniform float uTime;
        uniform float uScroll;

        float glow(vec2 point, vec2 center, float radius) {
          float distanceToCenter = length(point - center);
          return 1.0 - smoothstep(radius * 0.15, radius, distanceToCenter);
        }

        float grain(vec2 point, float time) {
          return fract(sin(dot(point + time, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          float aspect = uResolution.x / max(uResolution.y, 1.0);
          vec2 point = vUv;
          point.x = (point.x - 0.5) * aspect + 0.5;

          float drift = uTime * 0.045 + uScroll * 0.8;
          vec2 pointer = (uPointer - 0.5) * 0.055;

          vec2 centerOne = vec2(0.18 + sin(drift) * 0.08, 0.76 - uScroll * 0.08) + pointer;
          vec2 centerTwo = vec2(0.75 + cos(drift * 0.8) * 0.1, 0.23 + uScroll * 0.06) - pointer * 0.5;
          vec2 centerThree = vec2(0.72 + sin(drift * 0.55) * 0.06, 0.82);

          float fieldOne = glow(point, centerOne, 0.56);
          float fieldTwo = glow(point, centerTwo, 0.54);
          float fieldThree = glow(point, centerThree, 0.42);

          vec3 sage = vec3(0.75, 0.89, 0.69);
          vec3 sunset = vec3(0.96, 0.68, 0.49);
          vec3 mist = vec3(0.68, 0.82, 0.88);
          vec3 color = sage * fieldOne + sunset * fieldTwo + mist * fieldThree;
          float total = max(fieldOne + fieldTwo + fieldThree, 0.001);
          color /= total;

          float texture = (grain(gl_FragCoord.xy, floor(uTime * 3.0)) - 0.5) * 0.035;
          color += texture;
          float alpha = clamp(total * 0.32, 0.0, 0.58);

          gl_FragColor = vec4(color, alpha);
        }
      `,
    );

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    const buffer = gl.createBuffer();
    if (!buffer) return;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    gl.useProgram(program);

    const position = gl.getAttribLocation(program, "position");
    const resolution = gl.getUniformLocation(program, "uResolution");
    const pointerUniform = gl.getUniformLocation(program, "uPointer");
    const timeUniform = gl.getUniformLocation(program, "uTime");
    const scrollUniform = gl.getUniformLocation(program, "uScroll");

    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.clearColor(0, 0, 0, 0);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const saveData = (navigator as WebGLConnection).connection?.saveData === true;
    const staticMode = reduceMotion || coarsePointer || saveData || window.innerWidth < 700;
    const pointer = { x: 0.5, y: 0.5 };
    let visible = true;
    let animationFrame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      const width = Math.max(1, Math.floor(canvas.clientWidth * ratio));
      const height = Math.max(1, Math.floor(canvas.clientHeight * ratio));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const draw = (timestamp = 0) => {
      resize();
      const hero = canvas.closest("header");
      const heroHeight = Math.max(hero?.clientHeight ?? window.innerHeight, 1);
      const scroll = Math.max(0, Math.min(window.scrollY / heroHeight, 1));

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform2f(pointerUniform, pointer.x, pointer.y);
      gl.uniform1f(timeUniform, timestamp * 0.001);
      gl.uniform1f(scrollUniform, scroll);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const animate = (timestamp: number) => {
      if (!visible || document.hidden) {
        animationFrame = 0;
        return;
      }

      draw(timestamp);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (staticMode) {
        draw(0);
        return;
      }
      if (!animationFrame && visible && !document.hidden) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x += (event.clientX / window.innerWidth - pointer.x) * 0.18;
      pointer.y += (1 - event.clientY / window.innerHeight - pointer.y) * 0.18;
    };

    const onResize = () => draw(performance.now());

    const onVisibilityChange = () => {
      if (document.hidden && animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      } else {
        start();
      }
    };

    const observer = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? false;
      if (!visible && animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      } else {
        start();
      }
    });

    observer.observe(canvas);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    if (!coarsePointer) window.addEventListener("pointermove", onPointerMove, { passive: true });
    start();

    return () => {
      observer.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointerMove);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return <canvas ref={canvasRef} className="webglAura" aria-hidden="true" />;
}

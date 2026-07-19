(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89177,e=>{"use strict";var t=e.i(43476),r=e.i(71645);function i(e,t,r){let i=e.createShader(t);return i?(e.shaderSource(i,r),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS))?i:(e.deleteShader(i),null):null}e.s(["ScrollExperience",0,function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t,r,i=document.documentElement,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=window.matchMedia("(pointer: coarse)").matches,a=Array.from(document.querySelectorAll("[data-reveal]")),l=Array.from(document.querySelectorAll("[data-parallax]")),c=document.querySelector(".hero");i.classList.add("motionReady"),a.forEach((e,t)=>{e.style.setProperty("--reveal-delay",`${t%4*65}ms`)}),o?a.forEach(e=>e.classList.add("isVisible")):(t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("isVisible"),t?.unobserve(e.target))})},{rootMargin:"0px 0px -10%",threshold:.08}),a.forEach(e=>t?.observe(e))),c&&(o?c.classList.add("heroActive"):(r=new IntersectionObserver(([e])=>c.classList.toggle("heroActive",e.isIntersecting),{threshold:.18})).observe(c));let s=0,d=()=>{s=0;let t=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),r=Math.min(window.scrollY/t,1);if(e.current&&(e.current.style.transform=`scaleX(${r})`),!o&&!n){let e=Math.max(-8,Math.min(.025*window.scrollY,8));l.forEach(t=>{t.style.setProperty("--parallax-shift",`${e}px`)})}},m=()=>{s||(s=window.requestAnimationFrame(d))};return d(),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m),()=>{i.classList.remove("motionReady"),t?.disconnect(),r?.disconnect(),c?.classList.remove("heroActive"),window.removeEventListener("scroll",m),window.removeEventListener("resize",m),s&&window.cancelAnimationFrame(s)}},[]),(0,t.jsx)("div",{ref:e,className:"scrollProgress","aria-hidden":"true"})},"WebGLAura",0,function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let r=t.getContext("webgl",{alpha:!0,antialias:!1,powerPreference:"low-power"});if(!r)return;let o=i(r,r.VERTEX_SHADER,`
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `),n=i(r,r.FRAGMENT_SHADER,`
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
      `);if(!o||!n)return;let a=r.createProgram();if(!a)return;if(r.attachShader(a,o),r.attachShader(a,n),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))return void r.deleteProgram(a);let l=r.createBuffer();if(!l)return;r.bindBuffer(r.ARRAY_BUFFER,l),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.useProgram(a);let c=r.getAttribLocation(a,"position"),s=r.getUniformLocation(a,"uResolution"),d=r.getUniformLocation(a,"uPointer"),m=r.getUniformLocation(a,"uTime"),u=r.getUniformLocation(a,"uScroll");r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0),r.clearColor(0,0,0,0);let f=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=window.matchMedia("(pointer: coarse)").matches,v=navigator.connection?.saveData===!0,w=f||h||v||window.innerWidth<700,g={x:.5,y:.5},p=!0,A=0,T=(e=0)=>{let i,o,n;i=Math.min(window.devicePixelRatio||1,1.25),o=Math.max(1,Math.floor(t.clientWidth*i)),n=Math.max(1,Math.floor(t.clientHeight*i)),(t.width!==o||t.height!==n)&&(t.width=o,t.height=n,r.viewport(0,0,o,n));let a=t.closest("header"),l=Math.max(a?.clientHeight??window.innerHeight,1),c=Math.max(0,Math.min(window.scrollY/l,1));r.clear(r.COLOR_BUFFER_BIT),r.uniform2f(s,t.width,t.height),r.uniform2f(d,g.x,g.y),r.uniform1f(m,.001*e),r.uniform1f(u,c),r.drawArrays(r.TRIANGLES,0,6)},x=e=>{if(!p||document.hidden){A=0;return}T(e),A=window.requestAnimationFrame(x)},E=()=>{w?T(0):A||!p||document.hidden||(A=window.requestAnimationFrame(x))},L=e=>{g.x+=(e.clientX/window.innerWidth-g.x)*.18,g.y+=(1-e.clientY/window.innerHeight-g.y)*.18},y=()=>T(performance.now()),S=()=>{document.hidden&&A?(window.cancelAnimationFrame(A),A=0):E()},R=new IntersectionObserver(e=>{(p=e[0]?.isIntersecting??!1)||!A?E():(window.cancelAnimationFrame(A),A=0)});return R.observe(t),window.addEventListener("resize",y),document.addEventListener("visibilitychange",S),h||window.addEventListener("pointermove",L,{passive:!0}),E(),()=>{R.disconnect(),A&&window.cancelAnimationFrame(A),window.removeEventListener("resize",y),document.removeEventListener("visibilitychange",S),window.removeEventListener("pointermove",L),r.deleteBuffer(l),r.deleteProgram(a),r.deleteShader(o),r.deleteShader(n)}},[]),(0,t.jsx)("canvas",{ref:e,className:"webglAura","aria-hidden":"true"})}])}]);
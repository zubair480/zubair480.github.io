(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return A},MissingStaticPage:function(){return E},NormalizeError:function(){return p},PageNotFoundError:function(){return y},SP:function(){return v},ST:function(){return w},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return P}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let c=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>c.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=l();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let v="u">typeof performance,w=v&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class p extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class E extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class A extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return c}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function c(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));else t.set(r,a(n));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},89177,e=>{"use strict";var t=e.i(43476),r=e.i(71645);function n(e,t,r){let n=e.createShader(t);return n?(e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))?n:(e.deleteShader(n),null):null}e.s(["ScrollExperience",0,function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t,r,n=document.documentElement,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=window.matchMedia("(pointer: coarse)").matches,a=Array.from(document.querySelectorAll("[data-reveal]")),c=Array.from(document.querySelectorAll("[data-parallax]")),s=document.querySelector(".hero");n.classList.add("motionReady"),a.forEach((e,t)=>{e.style.setProperty("--reveal-delay",`${t%4*65}ms`)}),o?a.forEach(e=>e.classList.add("isVisible")):(t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("isVisible"),t?.unobserve(e.target))})},{rootMargin:"0px 0px -10%",threshold:.08}),a.forEach(e=>t?.observe(e))),s&&(o?s.classList.add("heroActive"):(r=new IntersectionObserver(([e])=>s.classList.toggle("heroActive",e.isIntersecting),{threshold:.18})).observe(s));let l=0,u=()=>{l=0;let t=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),r=Math.min(window.scrollY/t,1);if(e.current&&(e.current.style.transform=`scaleX(${r})`),!o&&!i){let e=Math.max(-8,Math.min(.025*window.scrollY,8));c.forEach(t=>{t.style.setProperty("--parallax-shift",`${e}px`)})}},d=()=>{l||(l=window.requestAnimationFrame(u))};return u(),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),()=>{n.classList.remove("motionReady"),t?.disconnect(),r?.disconnect(),s?.classList.remove("heroActive"),window.removeEventListener("scroll",d),window.removeEventListener("resize",d),l&&window.cancelAnimationFrame(l)}},[]),(0,t.jsx)("div",{ref:e,className:"scrollProgress","aria-hidden":"true"})},"WebGLAura",0,function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let r=t.getContext("webgl",{alpha:!0,antialias:!1,powerPreference:"low-power"});if(!r)return;let o=n(r,r.VERTEX_SHADER,`
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `),i=n(r,r.FRAGMENT_SHADER,`
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
      `);if(!o||!i)return;let a=r.createProgram();if(!a)return;if(r.attachShader(a,o),r.attachShader(a,i),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))return void r.deleteProgram(a);let c=r.createBuffer();if(!c)return;r.bindBuffer(r.ARRAY_BUFFER,c),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.useProgram(a);let s=r.getAttribLocation(a,"position"),l=r.getUniformLocation(a,"uResolution"),u=r.getUniformLocation(a,"uPointer"),d=r.getUniformLocation(a,"uTime"),f=r.getUniformLocation(a,"uScroll");r.enableVertexAttribArray(s),r.vertexAttribPointer(s,2,r.FLOAT,!1,0,0),r.clearColor(0,0,0,0);let m=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=window.matchMedia("(pointer: coarse)").matches,v=navigator.connection?.saveData===!0,w=m||h||v||window.innerWidth<700,g={x:.5,y:.5},p=!0,y=0,E=(e=0)=>{let n,o,i;n=Math.min(window.devicePixelRatio||1,1.25),o=Math.max(1,Math.floor(t.clientWidth*n)),i=Math.max(1,Math.floor(t.clientHeight*n)),(t.width!==o||t.height!==i)&&(t.width=o,t.height=i,r.viewport(0,0,o,i));let a=t.closest("header"),c=Math.max(a?.clientHeight??window.innerHeight,1),s=Math.max(0,Math.min(window.scrollY/c,1));r.clear(r.COLOR_BUFFER_BIT),r.uniform2f(l,t.width,t.height),r.uniform2f(u,g.x,g.y),r.uniform1f(d,.001*e),r.uniform1f(f,s),r.drawArrays(r.TRIANGLES,0,6)},A=e=>{if(!p||document.hidden){y=0;return}E(e),y=window.requestAnimationFrame(A)},P=()=>{w?E(0):y||!p||document.hidden||(y=window.requestAnimationFrame(A))},b=e=>{g.x+=(e.clientX/window.innerWidth-g.x)*.18,g.y+=(1-e.clientY/window.innerHeight-g.y)*.18},x=()=>E(performance.now()),T=()=>{document.hidden&&y?(window.cancelAnimationFrame(y),y=0):P()},S=new IntersectionObserver(e=>{(p=e[0]?.isIntersecting??!1)||!y?P():(window.cancelAnimationFrame(y),y=0)});return S.observe(t),window.addEventListener("resize",x),document.addEventListener("visibilitychange",T),h||window.addEventListener("pointermove",b,{passive:!0}),P(),()=>{S.disconnect(),y&&window.cancelAnimationFrame(y),window.removeEventListener("resize",x),document.removeEventListener("visibilitychange",T),window.removeEventListener("pointermove",b),r.deleteBuffer(c),r.deleteProgram(a),r.deleteShader(o),r.deleteShader(i)}},[]),(0,t.jsx)("canvas",{ref:e,className:"webglAura","aria-hidden":"true"})}])}]);
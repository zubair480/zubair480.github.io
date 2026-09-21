import Link from "next/link";

export function SiteFooter({ includeHome = false }: { includeHome?: boolean }) {
  return (
    <footer className="siteFooter">
      <div className="shell siteFooterTop">
        <div>
          <p className="siteFooterKicker">Software engineer · AI builder</p>
          <h2>Let’s make complex work feel simple.</h2>
        </div>
        <a className="siteFooterCta" href="mailto:zubairzafar480@gmail.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="shell siteFooterBottom">
        <div className="siteFooterIdentity">
          <span className="siteFooterMark" aria-hidden="true">ZZ.</span>
          <p>Building useful full-stack and AI products from San Francisco.</p>
        </div>
        <nav aria-label="Footer navigation">
          {includeHome ? <Link href="/">Home</Link> : null}
          <a href="https://github.com/zubair480" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/zubair480" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/zubair480" target="_blank" rel="noreferrer">LeetCode</a>
          <a href="/zubair_cv.pdf" target="_blank" rel="noreferrer">CV</a>
          <a href="#top">Back to top ↑</a>
        </nav>
        <p className="siteFooterCopyright">© 2026 Zubair Zafar</p>
      </div>
    </footer>
  );
}

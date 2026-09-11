import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
export default function HeroSection() {
  const { user } = useAuth();
  return (
    <section className="hero">
      <div className="site-width hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">THE SOFTWARE ENGINEER’S PRACTICE ROOM</p>
          <h1>
            Know your work.
            <br />
            <em>Find your words.</em>
          </h1>
          <p className="hero-description">
            You’ve done the work. Practice talking about it. Interview questions
            from your resume, feedback on your answers, and room to try again.
          </p>
          <div className="hero-actions">
            <Link
              className="button-primary"
              to={user ? "/dashboard" : "/register"}
            >
              {user ? "Open your workspace" : "Start practicing"}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
            <a href="#sample" className="text-action">
              Try a sample ↓
            </a>
          </div>
          <p className="hero-footnote">
            Built for technical, behavioral & system design interviews.
          </p>
        </div>
        <div
          className="practice-preview"
          aria-label="Illustrative interview practice preview"
        >
          <div className="preview-top">
            <span className="status-dot" /> PRACTICE ROOM{" "}
            <span className="ml-auto">01 / 08</span>
          </div>
          <div className="preview-context">
            <span>Frontend engineer</span>
            <span>Technical</span>
          </div>
          <h2>
            Walk me through a technical decision you made in your last project.
          </h2>
          <div className="preview-answer">
            <p className="eyebrow">YOUR APPROACH</p>
            <p>
              “We needed to keep the interface responsive while requests were
              running. I considered two options…”
            </p>
            <span className="writing-caret" aria-hidden="true" />
          </div>
          <div className="preview-feedback">
            <span className="feedback-mark" aria-hidden="true">
              ↳
            </span>
            <div>
              <strong>Go one level deeper.</strong>
              <p>
                What tradeoff did you make, and how did you know it was the
                right one?
              </p>
            </div>
          </div>
          <div className="preview-bottom">
            <span>Illustrative example</span>
            <a href="#sample">Explore the practice loop ↗</a>
          </div>
        </div>
      </div>
      <div className="site-width hero-index">
        <span>01 — YOUR EXPERIENCE</span>
        <span>02 — THE ROLE</span>
        <span>03 — BETTER ANSWERS</span>
      </div>
    </section>
  );
}

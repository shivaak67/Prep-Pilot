import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="entry-page">
      <section className="entry-intro" aria-labelledby="intro-title">
        <div className="entry-identity" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M8 25V7h8a8 8 0 0 1 0 16h-3M13 18l8-8m-8 0h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>INTERVIEW PRACTICE</span>
        </div>
        <h1 id="intro-title">Prep Pilot</h1>
        <p>Practice interview questions based on your resume and the job you want. Get feedback on your answers and keep track of your progress.</p>
        <div className="entry-actions">
          <Link to="/login" className="entry-primary">Sign in <span aria-hidden="true">↗</span></Link>
          <Link to="/register" className="entry-secondary">Create account</Link>
        </div>
      </section>
      <footer className="entry-footer"><Link to="/privacy">Privacy</Link></footer>
    </main>
  );
}

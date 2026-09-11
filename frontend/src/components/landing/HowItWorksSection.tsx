const steps = [
  [
    "Bring your resume",
    "Upload a PDF with your skills, experience, and projects.",
  ],
  [
    "Choose your role",
    "Paste a job description and choose your interview focus.",
  ],
  [
    "Practice out loud, then write",
    "Put your reasoning into an answer before opening the guidance.",
  ],
  [
    "Review. Refine. Repeat.",
    "Use feedback to improve your answer or tackle a follow-up.",
  ],
];
export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="site-width">
        <div className="section-heading">
          <p className="eyebrow">A SIMPLE ROUTINE</p>
          <h2>From your resume to your next interview.</h2>
        </div>
        <ol className="steps-grid">
          {steps.map(([title, text], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

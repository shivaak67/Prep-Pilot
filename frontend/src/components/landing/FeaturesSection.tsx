const features = [
  [
    "Your experience is the starting point.",
    "Questions connect the projects on your resume to the responsibilities of the role you want.",
  ],
  [
    "Feedback you can act on.",
    "See where your answer needs more detail, clearer reasoning, or a specific example. Then try again.",
  ],
  [
    "Your progress stays with you.",
    "Return to saved drafts, review previous attempts, and bookmark the questions that need more work.",
  ],
];
export default function FeaturesSection() {
  return (
    <section className="features-section site-width">
      <div>
        <p className="eyebrow">PURPOSEFUL PREPARATION</p>
        <h2 className="editorial-heading">
          Make the next answer
          <br />
          <em>more like you.</em>
        </h2>
      </div>
      <ol className="feature-list">
        {features.map(([title, description], i) => (
          <li key={title}>
            <span className="feature-number">0{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

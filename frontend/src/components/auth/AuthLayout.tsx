import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Brand from "../Brand";
export default function AuthLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="auth-layout">
      <aside className="auth-story">
        <Brand />
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>
            Great work deserves
            <br />
            <em>a good answer.</em>
          </h2>
          <p>
            A space to prepare, reflect, and find the words for what you know.
          </p>
        </div>
        <span>Resume → Role → Practice</span>
      </aside>
      <div className="auth-main">
        <Link to="/" className="auth-back">
          ← Back to home
        </Link>
        <section className="auth-form">
          <p className="eyebrow">PREP PILOT / YOUR ACCOUNT</p>
          <h1>{title}</h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
          {children}
        </section>
        <p className="auth-bottom">
          Your experience. Your words. <Link to="/privacy">Your data.</Link>
        </p>
      </div>
    </main>
  );
}

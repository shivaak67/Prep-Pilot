import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function AuthLayout({ title, description, children }: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="entry-page">
      <section className="entry-account" aria-labelledby="account-title">
        <Link to="/" className="entry-wordmark">Prep Pilot</Link>
        <h1 id="account-title">{title}</h1>
        <p className="entry-description">{description}</p>
        {children}
      </section>
      <footer className="entry-footer"><Link to="/privacy">Privacy</Link></footer>
    </main>
  );
}

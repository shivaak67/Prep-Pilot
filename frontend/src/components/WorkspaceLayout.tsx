import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import Brand from "./Brand";
export default function WorkspaceLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const { user, logout } = useAuth();
  const { pathname, hash } = useLocation();
  const inSession = pathname.includes("/sessions/");
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() =>
      document.getElementById(hash.slice(1))?.scrollIntoView(),
    );
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return (
    <div className="workspace">
      <a className="skip-link" href="#workspace-content">
        Skip to content
      </a>
      <aside className="workspace-rail">
        <Brand />
        <p className="rail-label">WORKSPACE</p>
        <nav aria-label="Workspace navigation">
          <Link className={!inSession && !hash ? "active" : ""} to="/dashboard">
            <span aria-hidden="true">◫</span>Overview
          </Link>
          <Link
            className={inSession || hash === "#sessions" ? "active" : ""}
            to="/dashboard#sessions"
          >
            <span aria-hidden="true">≡</span>Practice sessions
          </Link>
          <Link
            className={hash === "#materials" ? "active" : ""}
            to="/dashboard#materials"
          >
            <span aria-hidden="true">▤</span>Your materials
          </Link>
        </nav>
        <div className="rail-bottom">
          <p className="rail-note">Good answers take practice.</p>
          <Link to="/privacy">Data & privacy ↗</Link>
          <div className="rail-account">
            <span className="avatar" aria-hidden="true">
              {user?.email?.[0]?.toUpperCase() || "P"}
            </span>
            <span className="truncate">{user?.email}</span>
          </div>
          <button onClick={logout}>Sign out</button>
        </div>
      </aside>
      <div className="workspace-body" id="workspace-content" tabIndex={-1}>
        <header className="workspace-bar">
          <span>
            Workspace <span aria-hidden="true">/</span> <strong>{title}</strong>
          </span>
          <Link to="/dashboard#new-practice" className="quiet-link">
            New session ↗
          </Link>
        </header>
        {children}
      </div>
    </div>
  );
}

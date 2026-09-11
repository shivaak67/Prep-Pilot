import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
import Brand from "../Brand";
export default function LandingNavbar() {
  const { user } = useAuth();
  return (
    <header className="site-header">
      <div className="site-width site-nav">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="/#how-it-works" className="nav-explore">
            How it works
          </a>
          <a href="/#sample" className="nav-explore">
            The practice room
          </a>
          {user ? (
            <Link to="/dashboard" className="button-primary">
              Workspace ↗
            </Link>
          ) : (
            <>
              <Link to="/login" className="quiet-link">
                Sign in
              </Link>
              <Link to="/register" className="button-primary">
                Get started ↗
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

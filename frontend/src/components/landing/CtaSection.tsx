import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
export default function CtaSection() {
  const { user } = useAuth();
  return (
    <section className="closing-section">
      <div className="site-width">
        <p className="eyebrow">ONE QUESTION IS A GOOD START.</p>
        <div>
          <h2>
            Your next interview.
            <br />
            <em>A little more prepared.</em>
          </h2>
          <Link
            to={user ? "/dashboard" : "/register"}
            className="button-primary"
          >
            {user ? "Back to practice" : "Create your account"} ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

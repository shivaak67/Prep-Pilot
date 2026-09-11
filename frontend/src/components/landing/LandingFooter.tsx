import { Link } from "react-router-dom";
import Brand from "../Brand";
export default function LandingFooter() {
  return (
    <footer className="site-footer site-width">
      <Brand />
      <p>Interview preparation, with intention.</p>
      <Link to="/privacy">Data & privacy</Link>
      <span>© {new Date().getFullYear()} Prep Pilot</span>
    </footer>
  );
}
